from django.urls import path
from .views import index, acerca_de

urlpatterns = [
    path('', index, name='index'),
    path('acerca_de', acerca_de, name='acerca_de'),
]
