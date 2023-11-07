import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or '4e9f36500c141a25932230430e3c6c9a05d89ff0f4caaa23a2e8bee4a8d2dd12'

    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or '00c144e9f36501a2500c141a259322304393224e9f36503043'
    JWT_ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 43200

    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://postuser:pwfmlsmbps@78.155.197.50:5431/maindb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
