from google.cloud import storage


def download_blob(source_blob_name, bucket_name="yin-resume-bucket"):
    """Downloads a blob from the bucket."""

    storage_client = storage.Client()

    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob("images/" + source_blob_name)

    return blob.download_as_bytes()