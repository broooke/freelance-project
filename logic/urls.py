from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.getProducts, name='products'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='login'),
    path('register/', views.register, name='register'),
    path('product/<int:pk>/', views.productDetail, name='product'),
]