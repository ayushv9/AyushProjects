import React from 'react'

const Scroll = (props) =>
{
	return (
		// here we use double brackets to pass object style properties
		<div style ={{overflow: 'scroll', border: '5px solid black', height: '500'}}> 
		{props.children}
		</div>
		);
}
export default Scroll;