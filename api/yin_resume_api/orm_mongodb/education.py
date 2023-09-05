from yin_resume_api.orm_mongodb import db


class Education(db.Document):
    name_id = db.StringField()
    school_name = db.StringField()
    school_link = db.StringField()
    school_pic = db.StringField()
    diploma = db.StringField()
    graduation_time = db.StringField()
    desc = db.StringField()
    meta = {'collection': 'education'}