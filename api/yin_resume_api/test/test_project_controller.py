import unittest

from flask import json

from yin_resume_api.models.project import Project  # noqa: E501
from yin_resume_api.test import BaseTestCase


class TestProjectController(BaseTestCase):
    """ProjectController integration test stubs"""

    def test_get_projects(self):
        """Test case for get_projects

        Get the projects information by ID
        """
        query_string = [('name_id', 'name_id_example')]
        headers = { 
            'Accept': 'application/json',
        }
        response = self.client.open(
            '/v1/project/projects',
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
