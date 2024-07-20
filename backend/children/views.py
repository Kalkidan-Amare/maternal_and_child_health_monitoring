from rest_framework import viewsets
from .models import ChildInformation, ChildFollowUp
from .serializers import ChildInformationSerializer, ChildFollowUpSerializer

class ChildInformationViewSet(viewsets.ModelViewSet):
    queryset = ChildInformation.objects.all()
    serializer_class = ChildInformationSerializer

class ChildFollowUpViewSet(viewsets.ModelViewSet):
    queryset = ChildFollowUp.objects.all()
    serializer_class = ChildFollowUpSerializer
