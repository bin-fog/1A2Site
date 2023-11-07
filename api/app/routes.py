from . import db, app
from json import dumps, loads
from sqlalchemy import select
from app.models import User, Event, Recommendation
from flask import request
from datetime import datetime


@app.route('/')
def index():
    return b"This is API", 418


@app.route('/add_user')
def add_user():
    if request.json.name is not None and request.json.surname is not None and request.json.phone is not None and request.json.pass_hash is not None:
        db.session.add(User(request.json.name, request.json.surname, request.json.phone, request.json.pass_hash))
        return 201
    else:
        return 400


@app.route('/get_events')
def get_events():
    data = db.session.get(Event, 5)
    return f"{data}"


@app.route('/add_events')
def add_events():
    data = loads(request.get_data(as_text=True, parse_form_data=True))
    print(data)
    if "name" in data and "description" in data and "tags" in data and "datetime" in data:
        db.session.add(Event(data["name"], data["description"],
                             data["tags"], datetime.fromisoformat(data["datetime"])))
        return "Ok", 201
    else:
        return "Failed", 400


"""
@app.route('/get_recomendations')
def get_recomendations():
    id = request.form["user_id"]
    cursor.execute(f"SELECT * from recomendations WHERE user_id={id}")
    data = cursor.fetchall()
    return dumps(data)


@app.route('/get_profile_public')
def get_profile_public():
    id = request.form["user_id"]
    cursor.execute(f"SELECT (name, surname, age, edu, course, phone, avatar_url) FROM users WHERE id={id}")
    data = cursor.fetchone()
    return dumps(data)


@app.route('/get_profile')
def get_profile():
    auth = request.form["auth_key"]
    id = request.form["id"]
    cursor.execute(f"SELECT (id, is_admin) from users WHERE auth={auth}")
    data = cursor.fetchone()
    if data is None:
        return "User doesn't exist", 404
    elif data[0] is id:
        cursor.execute(f"SELECT * from users WHERE id={id}")
        data = cursor.fetchone()
        return dumps(data)
    elif data[1] is True:
        cursor.execute(f"SELECT * from users WHERE id={id}")
        data = cursor.fetchone()
        return dumps(data)
    else:
        return "User doesn't exist", 404 # Говорим, что пользователя нет чтобы избежать перебора auth токенов


@app.route('/regenerate_user_token')
def regenerate_user_token():
    pass


@app.route('/auth_user')
def auth_user():
    phone = request.form["phone"]
    password_hash = request.form["password_hash"]
    cursor.execute(f"SELECT password_hash from users WHERE phone={phone}")
    data = cursor.fetchone()
    if data == password_hash:
        cursor.execute(f"SELECT auth_key from users WHERE phone={phone}")
        data = cursor.fetchone()


@app.route('/validate_user')
def validate_user():
    pass


@app.route('/add_user')
def add_user():
    pass
"""
