# myapp/views.py

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, LoginSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        role = data.get('role')
        if role not in ['client', 'surveyor']:
            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(email=email, password=password)
            if user:
                token, created = Token.objects.get_or_create(user=user)  # Correct usage of Token.objects
                user_data = {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'role': self.get_user_role(user)
                }
                return Response({'token': token.key, 'user': user_data}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_user_role(self, user):
        # Custom logic to determine user role based on related models or other criteria
        if hasattr(user, 'adminprofile'):
            return 'admin'
        elif hasattr(user, 'surveyorprofile'):
            return 'surveyor'
        elif hasattr(user, 'clientprofile'):
            return 'client'
        return None

class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            token = Token.objects.get(user=request.user)
            token.delete()
            return Response(status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
