
from django.contrib import admin
from .models import AdminProfile, SurveyorProfile, User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserAdmin(BaseUserAdmin):
    print('****')
    model = User
    list_display = ('email', 'name', 'phone_number', 'created_at')  # Customize as needed
    search_fields = ('email', 'name')  # Fields to search on
    ordering = ('-created_at',)  # Default ordering

    # Fields to be displayed on the user creation and change forms
    fieldsets = (
        (None, {'fields': ('email', 'name', 'phone_number', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'phone_number', 'password1', 'password2')}
        ),
    )
    filter_horizontal = ('user_permissions',)

class AdminProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'country')  # Customize as needed
    search_fields = ('user__email', 'user__name', 'country')  # Fields to search on
    list_filter = ('country',)  # Filter options

admin.site.register(AdminProfile, AdminProfileAdmin)

admin.site.register(User, UserAdmin)
class SurveyorProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'company', 'user_name', 'user_email', 'user_phone_number')

    def user_name(self, obj):
        return obj.user.name

    def user_email(self, obj):
        return obj.user.email

    def user_phone_number(self, obj):
        return obj.user.phone_number

    user_name.admin_order_field = 'user__name'
    user_email.admin_order_field = 'user__email'
    user_phone_number.admin_order_field = 'user__phone_number'

admin.site.register(SurveyorProfile, SurveyorProfileAdmin)
