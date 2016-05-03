/**
 * comment.js
 *
 * authored by zindex
 */


/**
 * React component for Comment Box
 */
import React from 'react';
import ReactDOM from 'react-dom';
var  ReactCSSTransitionGroup = require('../node_modules/react/lib/ReactCSSTransitionGroup');

class TagBox extends React.Component{
	constructor(){
		super();
		this._onClickHandler = this._onClickHandler.bind(this);
	}
	_onClickHandler(){
		this.props._onClickedHandler(this.props.data,this.props.id||null);
	}
	render(){
		return <span className="tag" onClick={this._onClickHandler}>{ this.props.data }</span>
	}
}

class Tags extends React.Component{

	render(){
		return <div className="tags margin_auto space">{ this.props.children }</div>
	}
}

class HotTags extends React.Component{
	constructor(){
		super();
		this._onClickedHandler = this._onClickedHandler.bind(this);
	}
	_onClickedHandler (data){
		this.props._onAddHandler(data);
	}
	render(){
		return <div className="hot_tags margin_auto space">{ this.props.children }</div>
	}
}

class NewTag extends React.Component{
	constructor(){
		super();
		this._onClickHandler = this._onClickHandler.bind(this);
	}
	_onClickHandler(){
		var value = this.refs.input.value;
		if(value){
			this.props._onClickedHandler(value);
		}
		this.refs.input.value = null;
	}
	render(){
		return <div className="new_tag margin_auto">
				<input type="text" className="new_tag_input" placeholder="创建新标签" ref="input"></input>
				<span className="new_tag_button cp" onClick={this._onClickHandler}></span>
			   </div>
	}
}

//main box component
class CommentBox extends React.Component {
	constructor(){
		super();
		this.state = {tags:[]};
		this._onAddDataHandler = this._onAddDataHandler.bind(this);
		this._onDeleteDataHandler = this._onDeleteDataHandler.bind(this);
	}
	_onAddDataHandler(val){
		var arr = this.state.tags
		for(var i=0;i<arr.length;i++){
			if(arr[i] === val){
				alert("重复了二货！！")
				return;
			}
		}
		this.setState({tags: this.state.tags.concat(val)})
	}
	_onDeleteDataHandler(val,id){
		var temp_arr = this.state.tags;
		temp_arr.splice(id, 1);
		this.setState({tags: temp_arr});
	}
	render() {
  		var hot_tags = [],current_tags = [];
  	 	this.props.hot_tags.map((x,i) => hot_tags.push(<TagBox key={i} data={x} _onClickedHandler={this._onAddDataHandler}/>));
  	 	this.state.tags.map((x,i) => current_tags.push(<TagBox key={i} data={x} id={i} _onClickedHandler={this._onDeleteDataHandler}/>));
     	return  <form action="#" method="post" className="form">
     				<textarea className="textarea"></textarea>
     				<Tags>
     				 	<ReactCSSTransitionGroup transitionName="tags" transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={3000}>
     						{current_tags}
     					</ReactCSSTransitionGroup>
     				</Tags>
     				<div className="head">
        				<span className="head_txt tag_head_text">选择添加标签</span>
    				</div>
    				<HotTags _onAddHandler={this._onAddDataHandler}>{hot_tags}</HotTags>
    				<NewTag _onClickedHandler={this._onAddDataHandler}/>
    				<input type="text" value={ this.state.tags.join(" ")} className="comment_tags_input"></input>
    				<button type="submit" className="comment_submit">发布评论</button>
     			</form>
  }
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