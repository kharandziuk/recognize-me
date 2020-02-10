from flask import Flask, jsonify, request
from marshmallow import Schema, fields, ValidationError, utils
import base64
from io import BytesIO
from pyzbar.pyzbar import decode
from PIL import Image


app = Flask(__name__)

class BodySchema(Schema):
    file_base64= fields.String(required=True)

body_schema = BodySchema(unknown=utils.RAISE)

@app.route('/recognize', methods=['POST'])
def recognize():
    json_input = request.get_json()
    try:
        data = body_schema.load(json_input)['file_base64']
        im = Image.open(BytesIO(base64.b64decode(data)))
        code = decode(im)[0].data.decode('utf-8')
        print(code)
    except ValidationError as err:
        return jsonify(err.messages), 422
    return jsonify({ "code": code })
