from rest_framework import serializers
from .models import ChildInformation, ChildFollowUp

class ChildInformationSerializer(serializers.ModelSerializer):
    submission_date = serializers.DateField(read_only=True)
    class Meta:
        model = ChildInformation
        fields = '__all__'

class ChildFollowUpSerializer(serializers.ModelSerializer):
    submission_date = serializers.DateField(read_only=True)
    class Meta:
        model = ChildFollowUp
        fields = '__all__'
