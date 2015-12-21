/**
 * main.js
 *
 * author by zindex
 */
'use strict';
//import vendors
import React from 'react';
import ReactDOM from 'react-dom';

//import banner component
//var banner = require('./banner.js');

//import comment component
var CommentBox = require("./comment.js");

//init banner
if (document.querySelector(".banner")){
	//init banner here!
}

//init comment box
if (document.querySelector(".comment_box")){
	var tags = document.querySelector(".comment_box").innerHTML.split(" ");
	ReactDOM.render( < CommentBox  hot_tags={tags}/> , document.querySelector(".comment_box"));

}

    