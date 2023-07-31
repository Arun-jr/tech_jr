from django.urls import path
from . import views
from django.conf import settings
from django.urls import re_path
from django.views.static import serve

urlpatterns = [
    path('', views.index, name='index'),
    path('about-us/', views.about_us , name="about_us"),
    path('contact-us/', views.contact_us , name="contact_us"),
    path('services/', views.our_service , name="our_service"),
    path('register/', views.register , name="register"),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
] 

