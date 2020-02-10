from unittest import TestCase
from flask_webtest import TestApp
from main import app
from io import BytesIO
import base64

class ExampleTest(TestCase):
    def setUp(self):
        self.app = TestApp(app)

    def test__can_recognize(self):
        with open("sample1.jpg", "rb") as image_file:
            file_base64 = base64.b64encode(
                image_file.read()
            ).decode('utf-8')
            response = self.app.post_json(
                '/recognize',
                { "file_base64": file_base64 }
            )
            assert response.json == {
                "code": 42
            }, response.json

#class RecognizeView(View):
#    @method_decorator(csrf_exempt)
#    def dispatch(self, request, *args, **kwargs):
#        return super().dispatch(request, *args, **kwargs)
#
#    def post(self, request):
#        im = Image.open(request.FILES['file'])
#        code = decode(im)[0].data
#        return HttpResponse(code)

