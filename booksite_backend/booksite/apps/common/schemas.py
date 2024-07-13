from ninja import Field, Schema as NewSchema

class Schema(NewSchema):
    class Config:
        arbitrary_types_allowed = True