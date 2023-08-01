import React from 'react';

const SearchBox = ({searchChange})=> // we are using destructuring here:{...} allows us to grab the props object and grab its properties which is searchChange here)
{
	
	return (
		<div className ='pa2'>
		  <input
		  className = 'pa3 ba b--green bg-lightest-blue'
		  type = 'seach'
		  placeholder ='search robots'
		  onChange ={searchChange} //https://www.w3schools.com/jsref/event_onchange.asp The onchange event occurs when the value of an HTML element is changed.


		  />
		</div>
		)
}

export default SearchBox;