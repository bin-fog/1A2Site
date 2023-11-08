from . import db, app
from json import dumps, loads
from sqlalchemy import select
from app.models import User, Event, Recommendation
from flask import request
from datetime import datetime
from _md5 import md5


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
    data = db.session.execute(select(Event))
    dt = []
    for i in list(data):
        tmp = list(i[0].print())
        if tmp[3] is not None:
            tmp[3] = " ".join(":".join(tmp[3].isoformat().split(":")[:-1]).split("T"))
        dt.append(tmp)
    return dumps(dt)


@app.route('/add_events')
def add_events():
    data = loads(request.get_data(as_text=True, parse_form_data=True))
    print(data)
    if "name" in data and "description" in data and "tags" in data and "datetime" in data:
        db.session.add(Event(data["name"], data["description"],
                             data["tags"], datetime.fromisoformat(data["datetime"])))
        db.session.commit()
        return "Ok", 201
    else:
        return "Failed", 400


@app.route('/get-recommendations')
def get_recommendations():
    data = loads(request.get_data(as_text=True, parse_form_data=True))
    if "user_id" in data is None:
        return "Failed", 400
    tags = db.session.get(User, {"id": data["user_id"]}).tags
    tags = tags.split()
    fin = []
    for i in loads(get_events()):
        etags = i[2].split()
        rate = 0
        for j in tags:
            if j[1:] in etags:
                if j[0] == "-":
                    rate -= 2
                else:
                    rate += 1
        if rate > 0:
           fin.append([i[0], i[1], i[3], etags])
    fin.sort(key=lambda x: x[3])
    return dumps(fin), 200


@app.route('/auth_user')
def auth_user():
    data = loads(request.get_data(as_text=True, parse_form_data=True))
    phone = data["phone"]
    password = data["password"]
    if phone is None or password is None:
        return "Invalid Arguments", 400
    hash = db.session.get(User, {"phone": phone}).password_hash
    if hash == md5(password):
        return db.session.get(User, {"phone": phone}).auth_key, 200
    else:
        return "Invalid", 400

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





@app.route('/validate_user')
def validate_user():
    pass


@app.route('/add_user')
def add_user():
    pass
"""
