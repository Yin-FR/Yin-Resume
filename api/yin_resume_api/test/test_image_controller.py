import unittest

from flask import json

from yin_resume_api.test import BaseTestCase


class TestImageController(BaseTestCase):
    """ImageController integration test stubs"""

    def test_get_image_by_name(self):
        """Test case for get_image_by_name

        Find image by name
        """
        query_string = [('name', 'name_example')]
        headers = { 
            'Accept': 'image/png',
        }
        response = self.client.open(
            '/v1/image',
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    unittest.main()
