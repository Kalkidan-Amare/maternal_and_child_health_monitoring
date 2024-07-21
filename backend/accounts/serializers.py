from django.contrib.auth.models import User
from rest_framework import serializers
from .models import AdminProfile, SurveyorProfile, ClientProfile

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=[('admin', 'Admin'), ('surveyor', 'Surveyor'), ('client', 'Client')], write_only=True)
    client = serializers.PrimaryKeyRelatedField(queryset=ClientProfile.objects.all(), required=False, allow_null=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'role', 'client')

    def create(self, validated_data):
        role = validated_data.pop('role')
        client = validated_data.pop('client', None)
        user = User.objects.create_user(**validated_data)
        if role == 'admin':
            AdminProfile.objects.create(user=user)
        elif role == 'surveyor':
            SurveyorProfile.objects.create(user=user, client=client)
        elif role == 'client':
            ClientProfile.objects.create(user=user)
        return user

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if hasattr(instance, 'adminprofile'):
            representation['role'] = 'admin'
        elif hasattr(instance, 'surveyorprofile'):
            representation['role'] = 'surveyor'
            representation['client'] = instance.surveyorprofile.client.id if instance.surveyorprofile.client else None
        elif hasattr(instance, 'clientprofile'):
            representation['role'] = 'client'
            representation['client'] = None
        else:
            representation['role'] = None
            representation['client'] = None
        return representation


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
