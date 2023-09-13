import connexion
from typing import Dict
from typing import Tuple
from typing import Union

from yin_resume_api.models.send_mail_request import SendMailRequest  # noqa: E501
from yin_resume_api import util

from flask import redirect

from yin_resume_api.bussiness_logical.bl_mail import send_mail_to


def root_get():  # noqa: E501
    """Get swagger UI

    Get swagger UI # noqa: E501


    :rtype: Union[None, Tuple[None, int], Tuple[None, int, Dict[str, str]]
    """
    return redirect("ui", code=301)


def send_mail():  # noqa: E501
    """send mail by address

    Send a mail to receiver mail address # noqa: E501

    :param send_mail_request: request body of send mail
    :type send_mail_request: dict | bytes

    :rtype: Union[str, Tuple[str, int], Tuple[str, int, Dict[str, str]]
    """
    if connexion.request.is_json:
        send_mail_request = SendMailRequest.from_dict(connexion.request.get_json())  # noqa: E501
        receiver = send_mail_request.receiver
        mail = receiver.mail
        title = receiver.title
        body = receiver.body
        try:
            send_mail_to(mail, title, body)
        except Exception:
            return "FAILED"
        return "SUCCEED"

    return "FAILED"
