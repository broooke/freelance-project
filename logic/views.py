from .serializers import ProductSerializer, UserSerializer
from .models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth.models import User

# Create your views here.

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('q')
    if query == None:
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    else:
        products = Product.objects.filter(name__icontains=query)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user
        serializer = UserSerializer(user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def register(request):
    data = request.data
    
    try:
        user = User.objects.create(
            username = data['email'],
            email= data['email'],
            password = make_password(data['password'])
        )

        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail':'Пользователь с таким именем уже зарегистрирован'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def productDetail(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)