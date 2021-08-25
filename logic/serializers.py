from rest_framework import serializers
from .models import Product
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = '__all__'
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)