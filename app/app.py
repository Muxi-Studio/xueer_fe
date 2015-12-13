# coding: utf-8

import json
from flask import Flask
from flask import render_template,request
from jinja2 import Environment

app = Flask(__name__)

app.jinja_env.add_extension('jinja2.ext.loopcontrols')


def is_mobie():
    platform = request.user_agent.platform
    if platform in ["android", "iphone", "ipad"]:
        return True
    else:
        return False
      
@app.route('/')
def index():
	flag = is_mobie()
	if flag:
		return render_template("pages/mobie/index.html")
	else:
		with app.open_resource('mock/index.json') as f:
			data = f.read()
			json_dict = json.loads(data)
		return render_template("pages/index.html", top_list=json_dict['top_list'],banner=json_dict['banner'])


@app.route('/course')
def course():
    with app.open_resource('mock/course.json') as f:
        data = f.read()
        json_dict = json.loads(data)
    return render_template("pages/course.html",info=json_dict['info'],hot_comments=json_dict['hot_comments'])

@app.route('/registe')
def registe():
   
    return render_template("pages/register.html")

@app.route('/login')
def login():
    
    return render_template("pages/login.html")


@app.route('/search-result')
def search():
    with app.open_resource('mock/search-result.json') as f:
        data = f.read()
        json_dict = json.loads(data)
    return render_template("pages/search-result.html",result=json_dict['result'],number=json_dict['number'],courses=json_dict['courses'])

if __name__ == "__main__":
    app.run(debug=True)



