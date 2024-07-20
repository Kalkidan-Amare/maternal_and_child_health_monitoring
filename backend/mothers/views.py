from rest_framework import viewsets
from .models import MotherInformation, AntenatalFollowUp, PostnatalFollowUp
from .serializers import MotherInformationSerializer, AntenatalFollowUpSerializer, PostnatalFollowUpSerializer

class MotherInformationViewSet(viewsets.ModelViewSet):
    queryset = MotherInformation.objects.all()
    serializer_class = MotherInformationSerializer

class AntenatalFollowUpViewSet(viewsets.ModelViewSet):
    queryset = AntenatalFollowUp.objects.all()
    serializer_class = AntenatalFollowUpSerializer

class PostnatalFollowUpViewSet(viewsets.ModelViewSet):
    queryset = PostnatalFollowUp.objects.all()
    serializer_class = PostnatalFollowUpSerializer
