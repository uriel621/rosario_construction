"""rosario_construction URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from rosario_construction_app import views

urlpatterns = [
    url(r'^uriel621/', admin.site.urls),
    url(r'^$', views.index, name='index'),
    url(r'^login/', views.login_page, name='login_page'),
    # url(r'^user_login/', views.user_login, name='user_login'),
    url(r'^post/', views.post, name='post'),
    url(r'^contacts/', views.contacts, name='contacts'),
    url(r'^main/', views.contacts, name='main'),
    url(r'^invoice/', views.invoice, name='invoice'),
    url(r'^logout/', views.user_logout, name='logout'),
]
