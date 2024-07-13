from ninja import NinjaAPI

from apps.accounts.views import authentication_router

api = NinjaAPI(
    docs_url="/",
)

api.add_router('/api/authentication/', authentication_router)