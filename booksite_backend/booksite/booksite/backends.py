# from django.contrib.auth.backends import ModelBackend
# from django.contrib.auth import get_user_model

# class EmailAuth(ModelBackend):
#     def authenticate(self, request, username=None, password=None, **kwargs):
#         UserModel = get_user_model()
#         try:
#             user = UserModel.objects.get(email=username)
#             print('success')
#         except UserModel.DoesNotExist:
#             print('failure')
#             return None
#         else:
#             if user.check_password(password):
#                 print('uau')
#                 return user
#         return None