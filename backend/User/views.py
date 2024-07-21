from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets
from .serializer import AdminSerializer, SurveyerSerializer, LoginSerializer
from .models import AdminProfile, SurveyorProfile, User
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token

from rest_framework.views import APIView


class RegisterAdmin(viewsets.ModelViewSet):
    serializer_class = AdminSerializer
    queryset = AdminProfile.objects.all()
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            admin_profile = serializer.save()
            return Response({
                'admin_profile': AdminSerializer(admin_profile).data,
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterSurveyer(viewsets.ModelViewSet):
    serializer_class = SurveyerSerializer
    queryset = SurveyorProfile.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            # This process creates the user and connects them one after the other
            # create the user
            admin_profile = get_object_or_404(AdminProfile, user__email=request.user.email)

            user = User.objects.create(
                username=validated_data['user']['username'],
                email=validated_data['user']['email'],
                name=validated_data['user']['name'],
                phone_number=validated_data['user']['phone_number']
            )
            user.set_password(validated_data['password'])
            user.save()


            surveyor_profile = SurveyorProfile.objects.create(
                user=user, company=admin_profile,
            )

            return Response({'surveyor_profile': SurveyerSerializer(surveyor_profile).data}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = LoginSerializer(data=data)

        if serializer.is_valid():
            email = serializer.data['email']
            password =  serializer.data['password']
            user = authenticate(email=email, password=password)

            if not user:
                return Response({"status": False, "message": 'No user'}, status.HTTP_400_BAD_REQUEST)
            token, _ = Token.objects.get_or_create(user=user)
            print(token)
            return Response({'status': True, 'token': token.key,"message": "successfully Logedin"}, status.HTTP_201_CREATED)
        else:
            return Response({"status": False, "message": serializer.errors}, status.HTTP_400_BAD_REQUEST)