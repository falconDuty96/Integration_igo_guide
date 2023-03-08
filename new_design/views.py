from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
# Create your views here.
base_url = "http://127.0.0.1:3000/"
def home(request):
    
    return render(request, 'index.html')


# particuliers
def user_connect(request):
    return render(request, 'auth/login_utilisateur.html')

def user_register(request):
    return render(request, 'auth/inscription_utilisateur.html')

def connect_user(request):
    req = requests.post(url= base_url+"api/login/particular", data={'email': request.POST['email'] ,'password': request.POST['password']}).json()
    if 'Status' in req:
        return render(request, 'auth/login_utilisateur.html', {'error': True})
    else:
        request.session['user_email'] = req.get('email')
        request.session['user_id'] = req.get('id')
        request.session['user_name'] = req.get('last_name')
        request.session['user_type'] = 'particular'
        
        return render(request, "index.html", {'connected': True})

def register_user(request):

    req = requests.post(url=base_url+"api/user/new", data={
        'last_name': request.POST['last_name'] ,
        'first_name': request.POST['first_name'] ,
        'email': request.POST['email'] ,
        'phone': request.POST['phone'] ,
        'password': request.POST['password'] ,
        'type': 'particular',
    })

    request.session['user_email'] = req.get('email')
    request.session['user_id'] = req.get('id')
    request.session['user_name'] = req.get('last_name')
    request.session['user_type'] = 'particular'

    return render(request, "index.html", {'connected': True})

# professionnels
def professional_connect(request):
    return render(request, 'auth/login.html')

def professional_register(request):
    return render(request, 'auth/inscription.html')

def connect_professional(request):
    req = requests.post(url=base_url+"api/login/professional", data={'email': request.POST['email'] ,'password': request.POST['password']}).json()
    if 'Status' in req:
        return render(request, 'auth/login.html', {'error': True})
    else:
        request.session['user_email'] = req.get('email')
        request.session['user_id'] = req.get('id')
        request.session['user_name'] = req.get('last_name')
        request.session['user_type'] = 'professional'
        return render(request, "front/dashboard/index.html", {'connected': True})

def register_professional(request):

    req = requests.post(url=base_url+"api/user/new", data={
        'last_name': request.POST['last_name'] ,
        'first_name': request.POST['first_name'] ,
        'email': request.POST['email'] ,
        'phone': request.POST['phone'] ,
        'password': request.POST['password'] ,
        'type': 'professional',
    })


    request.session['user_email'] = req.get('email')
    request.session['user_id'] = req.get('id')
    request.session['user_name'] = req.get('last_name')
    request.session['user_type'] = 'professional'
    # request.session['email'] = req.email
    

    return render(request, "front/dashboard/index.html", {'connected': True})


# Favoris:
def getFavoris(request, id):
    
    req = requests.get(url=base_url+"api/user/favoris/get/{}".format(id))
    contenu = req.json()
    if 'Status' in contenu:
        return render(request, 'front/favoris.html', {'favoris_content': []})
    else:
        request.session['user_email'] = req.get('email')
        request.session['user_id'] = req.get('id')
        request.session['user_name'] = req.get('last_name')
        request.session['user_type'] = 'particular'
        return render(request, 'front/favoris.html',{'favoris_content':req.content})


# Parametre user:
def user_params(request, id):
    req = requests.get(url=base_url+"api/user/show/{}".format(id)).json()
    return render(request, "front/setting_user.html",{"params": req})

# modif user:
def update_user(request, id):
    req = requests.post(url=base_url+"api/user/update/{}".format(id), data = {
        'last_name': request.POST['last_name'] ,
        'first_name': request.POST['first_name'] ,
        'email': request.POST['email'] ,
        'phone': request.POST['phone'] ,
        # 'password': request.POST['password'] ,
        # 'type': 'professional',
    })
    del request.session['user_email']
    del request.session['user_id']
    return render(request, 'auth/login_utilisateur.html')

# deconnect user:
def user_deconnect(request):
    del request.session['user_email']
    del request.session['user_id']
    del request.session['user_name']
    del request.session['user_type']

    return render(request, 'index.html')



# dashboard:


# abonnement
def dashboard_abonnement(request):
     return render(request, "front/dashboard/Abonnement.html")
#transactions
def dashboard(request):
    if request.session['user_type'] == 'particular':
        return render(request, "auth/dashboarde/login.html")
    else:
        return render(request, "front/dashboard/index.html")
    
def dashboard_transaction(request):
     return render(request, "front/dashboard/transactions.html")
def dashboard_mails(request):
     return render(request, "front/dashboard/mails.html")
def dashboard_notifications(request):
     return render(request, "front/dashboard/notifications.html")

# profil section:
def dashboard_profil(request):
    id = request.session['user_id'] 
    req = requests.get(url=base_url+"api/user/show/{}".format(id)).json()
    return render(request, "front/dashboard/profil.html",{"params": req})

def modif_professionnal_profil(request, id):
    req = requests.post(url=base_url+"api/user/update/{}".format(id), data = {
        'last_name': request.POST['last_name'] ,
        'first_name': request.POST['first_name'] ,
        'email': request.POST['email'] ,
        'phone': request.POST['phone'] ,
        # 'password': request.POST['password'] ,
        # 'type': 'professional',
    })
    del request.session['user_email']
    del request.session['user_id']
    del request.session['user_name']
    del request.session['user_type']
    return render(request, "auth/login.html")


def dashboard_faq(request):
     return render(request, "front/dashboard/faq.html")
def dashboard_cgu(request):
     return render(request, "front/dashboard/cgu.html")
def dashboard_cgv(request):
     return render(request, "front/dashboard/cgv.html")

def deconnect_professional(request):
    del request.session['user_email']
    del request.session['user_id']
    del request.session['user_name']
    del request.session['user_type']
    return render(request, "auth/login.html")