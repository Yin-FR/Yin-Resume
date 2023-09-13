from yin_resume_api.bussiness_logical.bl_project import *

def get_projects(name_id=None):  # noqa: E501
    """Get the projects information by ID

    Get the projects information # noqa: E501

    :param name_id: ID of the person
    :type name_id: str

    :rtype: Union[Project, Tuple[Project, int], Tuple[Project, int, Dict[str, str]]
    """
    if name_id:
        return bl_get_all_projects(name_id=name_id)
    return bl_get_all_projects()
