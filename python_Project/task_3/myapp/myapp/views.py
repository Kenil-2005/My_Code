import csv
from django.http import HttpResponse
from .models import Student


def generate_students_csv(queryset=None):
    """
    This function generates a CSV HttpResponse from the given queryset.
    It will be called from Django admin action.
    """

    # If queryset is not given, export all students
    if queryset is None:
        queryset = Student.objects.all()

    # Prepare HTTP response with CSV headers
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="students.csv"'

    writer = csv.writer(response)

    # Write header row
    writer.writerow(['ID', 'Name', 'Email', 'Marks'])

    # Write data rows
    for student in queryset:
        writer.writerow([student.id, student.name, student.email, student.marks])

    return respons