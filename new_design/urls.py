from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home") ,

    # Particuliers
    path('connect/user', views.user_connect, name='user_connect') ,
    path('register/user', views.user_register, name="user_register") ,
    path('login_user', views.connect_user, name='connect_user') ,
    path('register_user', views.register_user, name='register_user') ,
    path('update/<int:id>', views.update_user, name='update_user') ,
    path('deconnect/user', views.user_deconnect, name='user_deconnect') ,

    # Professionnels
    path('connect/professional', views.professional_connect, name='professional_connect') ,
    path('register/professional', views.professional_register, name="professional_register") ,
    path('login_professional', views.connect_professional, name='connect_professional') ,
    path('register_professional', views.register_professional, name='register_professional') ,


    # favoris
    path('favoris/<int:id>', views.getFavoris, name='getFavoris') ,

    # parametres:
    path('parametres/user/<int:id>', views.user_params, name="user_params") ,


    # dashboard:
    path('dashboard', views.dashboard, name="dashboard") ,
    path('abonnement', views.dashboard_abonnement, name="dashboard_abonnement") ,
    path('transactions', views.dashboard_transaction, name="dashboard_transaction") ,
    path('mails', views.dashboard_mails, name="dashboard_mails") ,
    path('notifications', views.dashboard_notifications, name="dashboard_notifications") ,
    path('profil', views.dashboard_profil, name="dashboard_profil") ,
    path('faq', views.dashboard_faq, name="dashboard_faq") ,
    path('cgv', views.dashboard_cgu, name="dashboard_cgu") ,
    path('cgu', views.dashboard_cgv, name="dashboard_cgv") ,



    # profil update
    path('update_professional/<int:id>', views.modif_professionnal_profil, name='modif_professionnal_profil') ,

    path('deconnect_professional', views.deconnect_professional, name='deconnect_professional') ,
    
]