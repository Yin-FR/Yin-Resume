from yin_resume_api.orm_mongodb import db


class Desc(db.Document):
    name_id = db.StringField()
    name = db.StringField()
    profile = db.StringField()
    mail = db.StringField()
    phone = db.IntField()
    phone_prefix = db.IntField()
    address = db.StringField()
    desc = db.StringField()
    meta = {'collection': 'desc'}