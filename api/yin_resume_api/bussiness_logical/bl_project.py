from yin_resume_api.orm_mongodb.project import Project
from flask import jsonify


def bl_get_all_projects(**kwargs):
    projects = Project.objects(**kwargs)
    return jsonify(projects), 200