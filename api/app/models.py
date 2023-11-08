from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Enum, Table, Boolean
from sqlalchemy.orm import declarative_base, relationship

from . import db

Base = declarative_base()


class User(db.Model, Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    surname = Column(String)
    birth = Column(DateTime)
    edu = Column(String)
    course = Column(String)
    avatar_url = Column(String)
    phone = Column(Integer)
    tags = Column(String)

    is_admin = Column(Boolean)
    auth_token = Column(String)
    pass_hash = Column(String)

    def __init__(self, name: str, surname: str, phone: int, pass_hash: str):
        self.name = name
        self.surname = surname
        self.phone = phone
        self.pass_hash = pass_hash


class Event(db.Model, Base):
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    description = Column(Text)
    tags = Column(String)
    date = Column(DateTime)
    image_url = Column(String)
    is_archived = Column(Boolean, default=0)

    def __init__(self, name: str, description: str, tags: str, date: datetime):
        self.name = name
        self.description = description
        self.tags = tags
        self.date = date

    def print(self) -> (str, str, str, datetime, str):
        return self.name, self.description, self.tags, self.date, self.image_url


class Recommendation(db.Model, Base):
    __tablename__ = 'recommendations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey(User.id))
    event_id = Column(Integer, ForeignKey(Event.id))
