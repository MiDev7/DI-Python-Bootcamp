from django import forms
from .models import * 

class AddFilmForm(forms.ModelForm):
    class Meta:
        model= Title
        fields = '__all__'

class AddDirector(forms.ModelForm):
    class Meta:
        model= Director
        fields = '__all__'


