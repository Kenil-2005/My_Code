from django.contrib import admin
from .models import Student
from .views import generate_students_csv


@admin.action(description="Export selected students to CSV")
def export_students_action(modeladmin, request, queryset):
    return generate_students_csv(queryset)


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'marks')
    actions = [export_students_action]   # <-- adds the button under 'Actions'
