from pydantic import Field, EmailStr

from apps.common.schemas import Schema

class CreateUserSchema(Schema):
    first_name: str = Field(..., examples='Max')
    last_name: str = Field(..., examples='Smith')
    email: EmailStr = Field(..., examples='maxsmith123@gmail.com')
    password: str = Field(..., examples='strongpassword')
