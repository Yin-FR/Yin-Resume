import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from yin_resume_api.models.desc import Desc  # noqa: E501
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
