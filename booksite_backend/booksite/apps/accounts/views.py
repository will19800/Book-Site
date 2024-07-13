from ninja import Router

# from .models import User

from .schemas import (
    CreateUserSchema,
    
)

authentication_router = Router(tags=['Authentication'])

@authentication_router.post(
    'register/',
    summary='',
    description='',
    response={201: CreateUserSchema},
)
def CreateUser(request, data: CreateUserSchema):
    return request