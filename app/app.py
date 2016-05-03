# coding: utf-8

import json
from flask import Flask
from flask import render_template,request
from jinja2 import Environment
from flask import jsonify

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
		return render_template("pages/index.html", top_list=json_dict['top_list'],banner=json_dict['banner'],hot_five=json_dict['hot_five'], guess_courses=json_dict['guess_courses'])


@app.route('/course')
def course():
    with app.open_resource('mock/course.json') as f:
        data = f.read()
        json_dict = json.loads(data)
    return render_template("pages/course.html",info=json_dict['info'],hot_comments=json_dict['hot_comments'])

@app.route('/register')
def register():
   
    return render_template("pages/register.html",page="register")

@app.route('/login')
def login():
    return render_template("pages/login.html",page="login")


@app.route('/search-result')
def search():
    with app.open_resource('mock/search-result.json') as f:
        data = f.read()
        json_dict = json.loads(data)
    return render_template("pages/search-result.html",result=json_dict['result'],number=json_dict['number'],courses=json_dict['courses'])

@app.route('/404')
def not_found():
    return render_template("pages/404.html")

@app.route('/category')
def classify():
    return render_template("pages/category.html")

@app.route('/api/hot_tags/<string:key_word>')
def hot_tags(key_word):
    key_word = key_word.encode('utf-8')
    data_a = [
        {
            'title':'哈',
            'url':'/login'
        },
        {
            'title':'哈',
            'url':'/login'
        },
    ]
    data_b = [
        {
            'title':'哈哈',
            'url':'/login'
        },
        {
            'title':'哈哈',
            'url':'/login'
        },
    ]
    if (key_word == "哈"):
        return json.dumps(data_a)
    elif(key_word == "哈哈"):
        return json.dumps(data_b)
    else:
        return json.dumps([])
    return "",404

if __name__ == "__main__":
    app.run(debug=True)



