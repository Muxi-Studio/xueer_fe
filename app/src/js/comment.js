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
		return <span className="tag va_item" onClick={this._onClickHandler}>{ this.props.data }</span>
	}
}

const Tags = (props) => {
	return <div className="tags va_item space">{ props.children }</div>
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
		return <div className="new_tag va_item">
						<input type="text" className="new_tag_input" placeholder="输入标签，用空格间隔" ref="input"></input>
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
     	return  <form action="/add_comment/" method="post" className="form">
     				<textarea className="textarea"></textarea>
     				<div className="tags_box space">
     					<Tags>
     				 		<ReactCSSTransitionGroup transitionName="tags" transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={3000}>
     						{current_tags}
     						</ReactCSSTransitionGroup>
     					</Tags>
     					<NewTag _onClickedHandler={this._onAddDataHandler}/>
     				</div>
     				<div className="tag_head">
        				热门标签，点击直接添加
    				</div>
    				<HotTags _onAddHandler={this._onAddDataHandler}>{hot_tags}</HotTags>
    				<input type="text" value={ this.state.tags.join(" ")} className="comment_tags_input"></input>
    				<button type="submit" className="submit_bt tc margin_auto">发布评论</button>
     			</form>
  }
}

//init comment box
if (document.querySelector(".comment_box_x")){
	var tags = document.querySelector(".comment_box_x").innerHTML.split(" ");
	ReactDOM.render( <CommentBox  hot_tags={tags}/> , document.querySelector(".comment_box_x"));
}

//init search box
if (document.querySelector("#xinput_warpper")){
	ReactDOM.render( <SearchComponent/> , document.querySelector("#input_warpper"));
}