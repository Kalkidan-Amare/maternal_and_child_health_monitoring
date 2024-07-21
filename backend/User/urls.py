from django.urls import path, include
from .views import RegisterAdmin, RegisterSurveyer, LoginView

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'admins', RegisterAdmin, basename='admin')
router.register(r'surveyors', RegisterSurveyer, basename='surveyor')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
]