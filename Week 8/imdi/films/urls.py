from django.urls import path

from . import views

urlpatterns = [
    path('homepage/', views.homepage, name='homepage'),
    path('addDirector/', views.addDirector, name='addDirector'),
    path('addFilm/', views.addFilm, name='addFilm'),
]