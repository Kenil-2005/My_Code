from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Contact


@csrf_exempt                          # this disables CSRF only for this view
def save_contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # simple validation (optional)
        if not (name and email and message):
            return HttpResponse("All fields are required", status=400)

        # save to database
        Contact.objects.create(
            name=name,
            email=email,
            message=message,
        )
        return HttpResponse("Data saved successfully!")

    # GET request → just show the form
    return render(request, "contact_form.html")
