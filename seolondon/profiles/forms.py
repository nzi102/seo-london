from django import forms
from .models import seoUser

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = seoUser
        