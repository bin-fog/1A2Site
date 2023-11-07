from jose import jwt, JWTError

from app.models import User
from config import Config
from . import db


def get_current_user(token):
    try:
        payload = jwt.decode(token, Config.JWT_SECRET_KEY, algorithms=[Config.JWT_ALGORITHM])
        id: int = payload.get("id")

        if id is None:
            raise PermissionError
    except JWTError as e:
        raise e

    user = db.session.get(User, id)

    if user is None:
        raise PermissionError

    return user
