import React from 'react';
import ReactDOM from 'react-dom';

//main box component 
class Photo extends React.Component {
  render() {
  	var p = [];
  	 this.props.data.map((x,i) => p.push(<p key={i}>{x}</p>));
  	 console.log(p)
     return  <div>{p}</div>
  } 
}

var data = document.querySelector("#box").innerHTML.split(" ");
data.map((x,i) => console.log(x))
ReactDOM.render( < Photo data={data}/> , document.querySelector("#box"));


	

    