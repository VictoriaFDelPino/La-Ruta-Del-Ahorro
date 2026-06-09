from rest_framework import serializers
from .models import userProfile
from django.contrib.auth.models import User
from datetime import date, timedelta

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = userProfile
        fields = ['id', 'user', 'name', 'email', 'phone_number', 'address']

        read_only_fields = ['id']