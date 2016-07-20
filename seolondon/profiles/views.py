from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
class LoginView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/login.html"

class RegistrationView(TemplateView):
    """
    The Login view.
    """

    template_name = "profiles/register.html"

class RegistrationComplete(TemplateView):
    """
    The Registration Complete view.
    """

    template_name = "registration/registration_complete.html"

    