import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll.js'
//STATE means a description of your app. An object which describes your application. STATE can change. PROPS does not. PROPS are things which come out of STATE. STATE recieves PROPS. STATE >>PROPS

class App extends React.Component {
  constructor(){
		super()
		this.state = {
		robots: [],
		searchfield: ''
	}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			return response.json();
			}) //converting the response to json
			.then((users) => {
				this.setState({ robots: users})
			});
		}
//Whenever you make your own components in React.Component as done here, use the function notation used below 
	onSearchChange = (event) =>{
		//Another rule is to use this.setState and we change searchfield to the values inputted into the box
		this.setState({searchfield: event.target.value}) //https://dev.to/jasterix/when-do-you-actual-need-to-use-curly-braces-in-react-25mh 	//event.target.value -> value of the searchChange is given


		// console.log(event.target.value); //function here logs whatever is typed into it and is passed as a property of SearchBox
		
	} 
	render()
	{
		const filteredRobots = this.state.robots.filter((robot) =>
		{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //this.state.searchfield.toLowerCase() will not work if you put it in a method which is made by yourself such as onSearchChange because 'this' now refers to the value of 'input' in SeachBox, not in App. Since 'input' does not have state.robot, the function call does not work 
		})
		//Since we have the function which does the changes, we can now use it as props directly as we did under properties/props of CardList
		if (this.state.robots.length === 0)
		{
			return <h1> Loading </h1>
		}
		else
		{
			return (
		<div className = 'tc'>
		<h1 className = 'f1'>Robofriends</h1>
		<SearchBox searchChange = {this.onSearchChange}/> 
		<Scroll>
		<CardList robots = {filteredRobots}/>
		</Scroll>
		</div>
		)
		}
	}


//Another way App could be written which is in function form which still works but when we need to use the App STATE then we use the above case
// const App = () =>
// {
// 	return (
// 		<div className = 'tc'>
// 		<h1>Robofriends</h1>
// 		<SearchBox />
// 		<CardList robots = {robots}/>
// 		</div>
// 		)
// }
}
export default App;