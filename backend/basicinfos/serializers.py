from rest_framework import serializers
from .models import BasicInformation

class BasicInformationSerializer(serializers.ModelSerializer):
    submission_date = serializers.DateField(read_only=True)
    class Meta:
        model = BasicInformation
        fields = '__all__'
