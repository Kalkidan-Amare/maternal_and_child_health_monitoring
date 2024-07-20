from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import BasicInformationViewSet

router = DefaultRouter()
router.register(r'basic_information', BasicInformationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
