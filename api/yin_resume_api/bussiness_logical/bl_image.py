from yin_resume_api.cloud_storage.data_bucket_utils import download_blob
from flask import jsonify
from google.api_core.exceptions import NotFound


def get_image_by_name(name):
    if not name:
        return None
    try:
        bytes = download_blob(source_blob_name=name), 200
    except NotFound as e:
        return "Not Found", 404
    return bytes
    