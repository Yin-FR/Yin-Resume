#!/usr/bin/env python3
import connexion
from yin_resume_api import encoder
from flask_mongoengine import MongoEngine
import os

from yin_resume_api.orm_mongodb import db


MONGODB_USERNAME = os.getenv("MONGODB_USERNAME")
MONGODB_PASSWORD = os.getenv("MONGODB_PASSWORD")


app = connexion.App(__name__, specification_dir='./openapi/')
app.app.json_encoder = encoder.JSONEncoder
app.add_api('openapi.yaml',
            arguments={'title': 'OpenAPI Petstore'},
            pythonic_params=True)
application = app.app
application.config["MONGODB_SETTINGS"] = {
    'host':'mongodb+srv://{}:{}@yin-cluster.epqcei4.mongodb.net/yin_resume?retryWrites=true&w=majority'.format(MONGODB_USERNAME, MONGODB_PASSWORD)
}
db.init_app(application)


def main():
    app.run(port=8080)


if __name__ == '__main__':
    main()
