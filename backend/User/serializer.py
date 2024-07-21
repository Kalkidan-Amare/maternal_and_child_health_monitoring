import re
from rest_framework import serializers
from .models import AdminProfile, SurveyorProfile, User


class AdminSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    phone_number = serializers.IntegerField(source='user.phone_number')
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = AdminProfile
        fields = ['name', 'username', 'email', 'phone_number', 'country', 'password', 'confirm_password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, data):
        user_data = data.get('user')
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password != confirm_password:
            raise serializers.ValidationError('Passwords do not match')

        if User.objects.filter(username=user_data['username']).exists():
            raise serializers.ValidationError('Username already exists')

        if User.objects.filter(email=user_data['email']).exists():
            print(User.objects.filter(email=user_data['email']))
            raise serializers.ValidationError('Email already exists')

        if not self.is_strong_password(password):
            raise serializers.ValidationError(
                'Password must contain at least 6 characters, including a letter, a number, and a special character'
            )

        return data

    def is_strong_password(self, password):
        if len(password) < 6:
            return False
        if not re.search(r'[A-Za-z]', password):
            return False
        if not re.search(r'[0-9]', password):
            return False
        if not re.search(r'[@$!%*?&]', password):
            return False
        return True

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        password = validated_data.pop('password')

        user = User.objects.create(
            username=user_data['username'],
            email=user_data['email'],
            name=user_data['name'],
            phone_number=user_data['phone_number']
        )
        user.set_password(password)
        user.save()


        # Create the AdminProfile instance
        admin_profile = AdminProfile.objects.create(
            user=user,
            country=validated_data['country']
        )
        return admin_profile

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=100)
    password = serializers.CharField(max_length = 100)

class SurveyerSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.name')
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    phone_number = serializers.IntegerField(source='user.phone_number')
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = SurveyorProfile
        fields = ['name', 'username', 'email', 'phone_number', 'password', 'confirm_password']
    
    def validate(self, data):
        user_data = data.get('user')
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password != confirm_password:
            raise serializers.ValidationError('Passwords do not match')

        if User.objects.filter(username=user_data['username']).exists():
            raise serializers.ValidationError('Username already exists')

        if User.objects.filter(email=user_data['email']).exists():
            print(User.objects.filter(email=user_data['email']))
            raise serializers.ValidationError('Email already exists')

        # Validate password strength
        if not self.is_strong_password(password):
            raise serializers.ValidationError(
                'Password must contain at least 6 characters, including a letter, a number, and a special character'
            )

        return data

    def is_strong_password(self, password):
        if len(password) < 6:
            return False
        if not re.search(r'[A-Za-z]', password):
            return False
        if not re.search(r'[0-9]', password):
            return False
        if not re.search(r'[@$!%*?&]', password):
            return False
        return True