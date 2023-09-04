from yin_resume_api.orm_mongodb.desc import Desc
from flask import jsonify


def get_all_descs():
    descs = Desc.objects()
    print(descs)
    return jsonify(descs), 200