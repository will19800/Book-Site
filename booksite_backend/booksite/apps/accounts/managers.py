from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

class CustomUserManager(BaseUserManager):
    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError("Please input a valid email address")
    
    def validate_user(self, first_name, last_name, email):
        if not (first_name and last_name):
            raise ValueError("Please input a valid email address")
        
        if email:
            self.email_validator(email)
            self.normalize_email(email)
        else:
            raise ValueError("An email address is required")
        
    def create_user(self, first_name, last_name, password, email):
        self.validate_user(first_name, last_name, email)
        user = self.model(first_name=first_name, last_name=last_name, password=password, email=email)
        user.set_password(password)
        user.save()
        return user
    
    async def acreate_user(self, first_name, last_name, password, email):
        self.validate_user(first_name, last_name, email)
        user = self.model(first_name=first_name, last_name=last_name, password=password, email=email)
        user.set_password(password)
        await user.save()
        return user
