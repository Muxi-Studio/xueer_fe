# coding: utf-8

import json
from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/')
def index():
    with app.open_resource('mock/index.json') as f:
        data = f.read()
        json_dict = json.loads(data)
    return render_template("pages/index.html", top_list=json_dict['top_list'])


@app.route('/course')
def course():
    with app.open_resource('mock/course.json') as f:
        data = f.read()
        json_dict = json.loads(data)
    return render_template("pages/course.html",info=json_dict['info'],hot_comments=json_dict['hot_comments'])


if __name__ == "__main__":
    app.run(debug=True)
