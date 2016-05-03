/**
 * search.js
 *
 * authored by zindex
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
var $ = require("jquery");

class SearchBox extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <input id="inputBox" type="text" className="input va_item" placeholder="课程名、标签" onFocus={this.props.onFocusHandler}  onBlur={this.props.onBlurHandler} onChange={this.props.onChangeHandler}/>
	}
}

class PopBox extends React.Component{
	constructor(){
		super();
	}
	render(){
		var styles = {
			show:{
				display:"block"
			},
			hide:{
				display:"none"
			}
		}
		return <div style={((!this.props.isFocus)&&(!this.props.isBoxClicked))?styles.hide:styles.show} className="pop_box">{ this.props.children }</div>
	}
}

class PopList extends React.Component{
	constructor(){
		super();
	}
	render(){
		var styles = {
			show:{
				display:"block"
			},
			hide:{
				display:"none"
			}
		}
		return <div style={this.props.hasResult?styles.show:styles.hide} className="pop_list">{ this.props.children }</div>
	}
}

class PopListItem extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <a className="item" href={ this.props.data.url }>{ this.props.data.title }</a>
	}
}

class TagBox extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="tag"><a href={ this.props.data.url }>{ this.props.data.title }</a></div>
	}
}

class HotTags extends React.Component{
	constructor(){
		super();
	}
	render(){
		var styles = {
			show:{
				display:"block"
			},
			hide:{
				display:"none"
			}
		}
		return <div style={this.props.isTyping&&this.props.hasResult?styles.hide:styles.show} className="hot_tags">
			   	<div className="tag_title" onClick={this.props.onClickHandler} ><a href="/login">大家都在搜</a></div>
			   	<div className="tag_list">
					{ this.props.children }
			   	</div>
			   </div>
	}
}


class SearchComponent extends React.Component{
	constructor(){
		super();
		this.state = {
			isFocus:false,
			isBoxClicked:false,
			isTyping:false,
			hasResult:false,
			list:[]
		};
		this._onFocusHandler = this._onFocusHandler.bind(this);
		this._onBlurHandler = this._onBlurHandler.bind(this);
		this._onChangeHandler = this._onChangeHandler.bind(this);
		this._onMouseDownHandler = this._onMouseDownHandler.bind(this);
	}
	componentDidMount() {
    	window.addEventListener('mousedown', this._onMouseDownHandler, true);
	}
	_onFocusHandler(){
		this.setState({isFocus:true})
		this.setState({isBoxClicked:false})
	}
	_onMouseDownHandler(e){
		if (ReactDOM.findDOMNode(this).contains(e.target)){
			if (e.target.id !== "inputBox"){
				this.setState({isBoxClicked:true})
			}
		}else{
			this.setState({isBoxClicked:false})
		}
	}
	_onBlurHandler(e){
		this.setState({isFocus:false})
	}
	_onChangeHandler(e){
		var val = e.target.value,
		that = this;
		if(val !== ""){
			this.setState({isTyping:true})
			var url = "/api/hot_tags/" + encodeURIComponent(val)
			$.get(url).done(function(data){
				var l_data = JSON.parse(data);
				if(l_data.length){
					that.setState({list:JSON.parse(data),hasResult:true})
				}else{
					that.setState({hasResult:false})
				}
			}).fail(function(){
			})
		}else{
			this.setState({isTyping:false,hasResult:false})
		}
	}
	render(){
		var pop_list = [];
		this.state.list.map((x,i) => pop_list.push(<PopListItem key={i} data={x} id={i} />));
		return <div className="search_container">
					<PopBox isFocus={this.state.isFocus} isBoxClicked={this.state.isBoxClicked} >
						<HotTags isTyping={this.state.isTyping} hasResult={this.state.hasResult}>

						</HotTags>
						<PopList hasResult={this.state.hasResult}>
							{pop_list}
						</PopList>
					</PopBox>
					<SearchBox onFocusHandler={this._onFocusHandler} onBlurHandler={this._onBlurHandler} onChangeHandler={this._onChangeHandler}></SearchBox>
			   </div>
	}
}

module.exports = SearchComponent;