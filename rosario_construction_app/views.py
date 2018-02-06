from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rosario_construction_app.models import Clients_info
from django.core.mail import EmailMessage

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    return render(request, 'rosario_construction_app/index.html')

def login_page(request):
    return render(request, 'rosario_construction_app/login.html')

@login_required
def main(request):
    return render(request, 'rosario_construction_app/main.html')

@login_required
def invoice(request):
    return render(request, 'rosario_construction_app/invoice.html')

@login_required
def contacts(request):
    contacts = Clients_info.objects.order_by('full_name')
    contacts = {'contacts': contacts}
    return render(request, 'rosario_construction_app/contacts.html', context=contacts)

@csrf_exempt
def post(request):
    if request.method == 'POST':
        name = request.POST['name']
        phone = int(request.POST['phone'])
        email = request.POST['email']
        message = request.POST['message']

        clients_info = Clients_info(full_name=name, phone_number=phone, email=email, message=message)
        clients_info.save()

        email = EmailMessage(
                    'New Contact',
                    '<div style="color:blue">{}</div>'.format(message),
                    email,
                    ['uriel621@live.com']
                )
        email.content_subtype = "html" 
        email.send()

        return HttpResponse('621')

@login_required     
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('contacts'))
            else:
                return HttpResponse('Account Not Active')

        else:
            print('Some one loggedin and failed')
            print('username: {} and password: {}'.format(username, password))
            return HttpResponse('Invalid login details')

    else:
        return render(request, 'rosario_construction_app/login.html')

# @login_required
# def invoice(request):
#     contacts = Clients_info.objects.order_by('full_name')
#     contacts = {'contacts': contacts}
#     return render(request, 'rosario_construction_app/invoice.html', context=contacts)