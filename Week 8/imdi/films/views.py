from multiprocessing import context
from django.shortcuts import render
from .forms import *
# Create your views here.
def homepage(request):
    films = Title.objects.all()
    context = {'films': films}
    return render(request,'homepage.html',context)

def addDirector(request):
    context = {}
    return render(request,'director/addDirector.html', context)

def addFilm(request):
    addFilms = AddFilmForm(request.POST)
    context = {'films': addFilms}
    if addFilms.is_valid():
        addFilms.save()
    return render(request,'film/addfilm.html', context)