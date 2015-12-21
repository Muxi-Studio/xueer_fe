/**
 * search.js
 * 
 * authored by zindex
 */

'use strict';

import React from 'react';


class SearchBox extends React.Component{
	constructor(){
		super();
		//this._onClickHandler = this._onClickHandler.bind(this);
	} 
	render(){
		return <input type="text" className="input va_item" placeholder="课程名、标签"/>
	}
}

class PopBox extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return <div className="pop_box">{ this.props.children }</div>
	}
	
}

class PopList extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return <div className="pop_list">{ this.props.children }</div>
	}
	
}

class PopListItem extends React.Component{
	constructor(){
		super();
	} 
	render(){
		return <li className="item"></li>
	}
}

class SearchComponent extends React.Component{
	constructor(){
		super();
		//this._onClickHandler = this._onClickHandler.bind(this);
	} 
	render(){
		return <div className="search_container">
					<SearchBox></SearchBox>
					<PopBox>
						<PopList>
							
						</PopList>
					</PopBox>
			   </div>
	}
}