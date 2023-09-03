import unittest

from flask import json

from yin_resume_api.models.desc import Desc  # noqa: E501
from yin_resume_api.test import BaseTestCase


class TestResumeController(BaseTestCase):
    """ResumeController integration test stubs"""

    def test_get_desc(self):
        """Test case for get_desc

        Find person description by ID
        """
        query_string = [('name_id', 'name_id_example')]
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/v2/resume/description',
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
