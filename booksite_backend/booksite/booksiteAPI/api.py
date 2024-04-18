from ninja import NinjaAPI, Schema

from django.shortcuts import get_object_or_404
from django.http import Http404

from django.contrib.auth.models import auth
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

api = NinjaAPI()

class UserIn(Schema):
    username: str
    password: str
    email: str
    
    class Config:
        
        extra = 'forbid'
        
class UserOut(Schema):
    username: str
    password: str
    email: str
    
@api.post('register/')
def register(request, payload: UserIn):
    payload_data = payload.dict()
    user = User.objects.create_user(**payload_data)
    return {'success':True}
    
@api.get('login/{employee_id}', response=UserOut)
def login(request, employee_id):
    user = get_object_or_404(User, pk=employee_id)
    return user

# @api.get('login/{employee_id}', response=UserOut)
# def login(request, employee_id):
#     try:
#         user = User.objects.get(pk=employee_id)  # Assuming employee_id is the primary key
#     except User.DoesNotExist:
#         raise Http404("User does not exist")
#     return user