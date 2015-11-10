# coding: utf-8

import json
from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/')
def index():
	file = open('mock/index.json', 'r')
	json_dict = json.loads(file.read())
	file.close()
	return render_template("pages/index.html",top_list=json_dict['top_list'])


@app.route('/course')
def course():
	file = open('mock/course.json', 'r')
	json_dict = json.loads(file.read())
	file.close()
	return render_template("pages/course.html",info=json_dict['info'],hot_comments=json_dict['hot_comments'])

if __name__ == "__main__":
    app.run(debug=True)
