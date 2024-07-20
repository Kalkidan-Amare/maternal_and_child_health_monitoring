from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import MotherInformationViewSet, AntenatalFollowUpViewSet, PostnatalFollowUpViewSet

router = DefaultRouter()
router.register(r'mother_information', MotherInformationViewSet)
router.register(r'antenatal_follow_up', AntenatalFollowUpViewSet)
router.register(r'postnatal_follow_up', PostnatalFollowUpViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
