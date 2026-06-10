from django.contrib import admin
from django.urls import path
from app import views



urlpatterns = [
    path("admin/", admin.site.urls),
    path('index/', views.inicio, name='inicio'),
    path('base/', views.contacto, name='base'),   
    path('acerca_de/', views.acerca_de, name='acerca_de'),
    path('logueo/', views.logueo, name='logueo'),
    path('registro/', views.registro, name='registro'),     
]
