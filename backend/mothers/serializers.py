from rest_framework import serializers
from .models import MotherInformation, AntenatalFollowUp, PostnatalFollowUp

class MotherInformationSerializer(serializers.ModelSerializer):
    submission_date = serializers.DateField(read_only=True)
    class Meta:
        model = MotherInformation
        fields = '__all__'

class AntenatalFollowUpSerializer(serializers.ModelSerializer):
    submission_date = serializers.DateField(read_only=True)
    class Meta:
        model = AntenatalFollowUp
        fields = '__all__'

class PostnatalFollowUpSerializer(serializers.ModelSerializer):
    submission_date = serializers.DateField(read_only=True)
    class Meta:
        model = PostnatalFollowUp
        fields = '__all__'
