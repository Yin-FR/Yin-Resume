import unittest

from flask import json

from yin_resume_api.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_root_get(self):
        """Test case for root_get

        Get swagger UI
        """
        headers = { 
        }
        response = self.client.open(
            '/v1/',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
