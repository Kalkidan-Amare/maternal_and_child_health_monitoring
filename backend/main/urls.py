from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('basicinfos/', include('basicinfos.urls')),
    path('mothers/', include('mothers.urls')),
    path('user/', include('User.urls')),
    path('children/', include('children.urls')),
]
