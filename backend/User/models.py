from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


class User(AbstractUser):
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(unique=True, null=False, blank=False)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # Added related_name attributes to avoid clashes with thwe builtin AbstractUser class
    groups = models.ManyToManyField(Group, related_name='User_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='User_user_permissions')

    # replaces the username field with email
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

# AdminProfile -> is the company thats going to be registered/use
class AdminProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    # This is were the company will input were its basedin.
    country = models.CharField(max_length=100, null=False, blank=False)

    def save(self, *args, **kwargs):
        self.is_admin = True
        self.user.save()
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.user.name} --> Company'

class SurveyorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company = models.ForeignKey(AdminProfile, on_delete=models.CASCADE, related_name='company')

    def save(self, *args, **kwargs):
        self.is_surveyer = True
        self.user.save()
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.user.name} -- {self.company}'