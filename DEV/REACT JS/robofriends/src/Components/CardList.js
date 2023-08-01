import Card from './Card';
import React from 'react';
//props stands for the properties which the Cardlist has which in this case is {robots} array
const CardList = (props) =>
{
	// if(true)
	// {
	// 	throw new Error('Nooooo!')
	// }
	const cardArray = props.robots.map((user, i) =>
	{
		//Instructor says we need a key prop so that React knows that it has a unique id in case things change. Whenever we use a loop, we need to remember to assign a key.
		// Here the id property is given as a unique identifier
		return (
			<Card 
			key = {props.robots[i].id} 
			id = {props.robots[i].id} 
			name ={props.robots[i].name} 
			email = {props.robots[i].email}
			/>
			)
	})
	//Since cardArray is a Javascript item we wrap brackets when calling it within the div
	return (
		<div>
			{cardArray}; 
		</div>
		)
}
export default CardList;