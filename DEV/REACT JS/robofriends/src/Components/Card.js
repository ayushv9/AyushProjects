import React from 'react';

const Card = (props) =>
{
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		  <img alt = 'robots' src = {`https://robohash.org/${props.id}?200x200`}/> {/* `...` this is template strings so we need to wrap it in curly brackets so that the Javascript expression can be evaluated. The ${props.id} will now give unique values corresponding to the id passd in from oject robots which is now getting called here. ?200x200 is dimensions for the picture of the robofriends from the websie itself*/}
		  <div>
		    <h2>{props.name}</h2>
		    <p>{props.email}</p>
		  </div>
		</div>
		)	
}

export default Card; 