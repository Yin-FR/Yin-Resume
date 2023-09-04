from yin_resume_api.orm_mongodb.desc import Desc
from yin_resume_api.orm_mongodb import db
from flask import jsonify


def get_all_descs():
    
    new_desc = Desc(
        name_id = "ASDAWD",
        name = "db.StringField()",
        profile = "db.StringField()",
        mail = "db.StringField()",
        phone = 1413513515,
        phone_prefix = 33,
        address = "db.StringField()",
        desc = "db.StringField()"
    )
    new_desc.save()
    descs = Desc.objects()
    print(descs)
    return jsonify(descs), 200