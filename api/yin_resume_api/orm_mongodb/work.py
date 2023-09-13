from yin_resume_api.orm_mongodb import db


class Work(db.Document):
    name_id = db.StringField()
    company_name = db.StringField()
    company_link = db.StringField()
    company_pic = db.StringField()
    role = db.StringField()
    start_time = db.StringField()
    end_time = db.StringField()
    desc = db.StringField()
    meta = {'collection': 'work'}