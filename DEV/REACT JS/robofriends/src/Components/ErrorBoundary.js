import React from 'react';

class ErrrorBoundary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info)
	{
		this.setState({hasError: true})
	}
	render(){
		if(this.state.hasError === true)
		{
			return (
				<div>
					<h1> Ooooops. That is not good </h1>
				</div>)
		}
		return this.props.children
	}
}

export default ErrrorBoundary;