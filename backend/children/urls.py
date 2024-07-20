from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ChildInformationViewSet, ChildFollowUpViewSet

router = DefaultRouter()
router.register(r'child_information', ChildInformationViewSet)
router.register(r'child_follow_up', ChildFollowUpViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
