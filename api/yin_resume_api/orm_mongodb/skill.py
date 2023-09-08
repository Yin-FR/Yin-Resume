from yin_resume_api.orm_mongodb import db


class Skill(db.Document):
    name_id = db.StringField()
    skill_name = db.StringField()
    skill_value = db.IntField()
    meta = {'collection': 'skill'}