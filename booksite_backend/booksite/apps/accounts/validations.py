from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import UserAttributeSimilarityValidator, MinimumLengthValidator, CommonPasswordValidator, NumericPasswordValidator


def custom_validation(data):
    email = data['email'].strip()
    password = data['password'].strip()
    username = data['username'].strip()
    
    if not email or User.objects.filter(email=email).exists():
        raise ValidationError('Email already exists')
    if not password:
        raise ValidationError('Choose another password')
    if not username or User.objects.filter(username=username).exists():
        raise ValidationError('Choose another username')
    
    return data

def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError('an email is needed')
    
    if email and User.objects.filter(email=email).exists():
        return True

def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('choose another username')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    
    if password and User.objects.filter(password=password).exists():
        return True