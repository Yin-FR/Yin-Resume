from yin_resume_api.orm_mongodb import db


class Social_Network(db.Document):
    name_id = db.StringField()
    name = db.StringField()
    className = db.StringField()
    url = db.StringField()
    meta = {'collection': 'social_network'}