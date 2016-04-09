/**
 * main.js
 *
 * author by zindex
 */
'use strict';
//import vendors
import React from 'react';
import ReactDOM from 'react-dom';

//import css
require("../scss/pages/index.scss");

// import banner component
var banner = require('./banner.js');

//import comment component
var CommentBox = require("./comment.js");

//import search component
var SearchComponent = require("./search.js");

//init banner
if (document.querySelector(".banner")){
	//init banner here!
}

//init comment box
if (document.querySelector(".comment_box")){
	var tags = document.querySelector(".comment_box").innerHTML.split(" ");
	ReactDOM.render( <CommentBox  hot_tags={tags}/> , document.querySelector(".comment_box"));
}

//init comment box
if (document.querySelector("#input_warpper")){
	ReactDOM.render( <SearchComponent/> , document.querySelector("#input_warpper"));
}

    