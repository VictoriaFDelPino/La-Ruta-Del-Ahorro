from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm


# Create your views here.

def index(request):
    return render(request, 'index.html')


def acerca_de(request):
    return render(request, 'acerca_de.html')   


def registro(request):
    return render(request, 'registro.html', {'form': UserCreationForm})


def logueo(request):
    return render(request, 'logueo.html')

def base(request):
    return render(request, 'base.html')