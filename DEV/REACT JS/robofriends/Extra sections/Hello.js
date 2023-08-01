import React from 'react';
import './Hello.css'

// class Hello extends React.Component
// {
// 	render()
// 	{
// 		return (
// 			<div className ='f1 tc'>
// 				<h1> Hello World </h1>
// 				<p>{this.props.greeting} </p> ///this.props. means -> this Onject -> Properties -> greeting, given by us in Index.js 
// 			</div>
// 			)
// 	} ---> In Object form

// }
const Hello = (props) => // props is just properties
{
	return (
		<div className ='f1 tc'>
			<h1> Hello World </h1>
			<p>{props.greeting} </p>
		</div>
		);
} //---> In function form. Ultimately they are functions. Notice -> the keyword 'this' is gone



export default Hello;