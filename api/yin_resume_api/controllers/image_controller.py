from yin_resume_api.bussiness_logical.bl_image import get_image_by_name as get_image


def get_image_by_name(name=None):  # noqa: E501
    """Find image by name

    Get an image by name # noqa: E501

    :param name: name of the image
    :type name: str

    :rtype: Union[file, Tuple[file, int], Tuple[file, int, Dict[str, str]]
    """
    return get_image(name)
