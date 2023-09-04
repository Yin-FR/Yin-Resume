import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from yin_resume_api.models.desc import Desc  # noqa: E501
from yin_resume_api.models.education import Education  # noqa: E501
from yin_resume_api.models.work import Work  # noqa: E501
from yin_resume_api import util

import json

from yin_resume_api.bussiness_logical.bl_resume import get_all_descs


def get_desc(name_id):  # noqa: E501
    """Find person description by ID

    Get the text about self description # noqa: E501

    :param name_id: ID of the person
    :type name_id: str

    :rtype: Union[Desc, Tuple[Desc, int], Tuple[Desc, int, Dict[str, str]]
    """
    return get_all_descs()


def get_educations(name_id):  # noqa: E501
    """Find person description by ID

    Get all education info for a person by ID # noqa: E501

    :param name_id: ID of the person
    :type name_id: str

    :rtype: Union[Education, Tuple[Education, int], Tuple[Education, int, Dict[str, str]]
    """
    return 'do some magic!'


def get_works(name_id):  # noqa: E501
    """Find person description by ID

    Get all work info for a person by ID # noqa: E501

    :param name_id: ID of the person
    :type name_id: str

    :rtype: Union[Work, Tuple[Work, int], Tuple[Work, int, Dict[str, str]]
    """
    return 'do some magic!'
