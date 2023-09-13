from yin_resume_api.orm_mongodb import db


class Project(db.Document):
    name_id = db.StringField()
    name = db.StringField()
    link = db.StringField()
    github = db.StringField()
    desc = db.StringField()
    pic = db.StringField()
    meta = {'collection': 'project'}