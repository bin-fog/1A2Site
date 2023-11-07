import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or '00c144e9f36501a2500c141a259322304393224e9f36503043'
    JWT_ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 43200

    SQLALCHEMY_DATABASE_URI = 'postgresql://lev:idea_platona@109.71.9.102:5432/main'
    SQLALCHEMY_TRACK_MODIFICATIONS = False