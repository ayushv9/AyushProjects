

// // function sayHello()
// // {
// // 	console.log("Hello");
// // }
// // sayHello();

// // var sayBye = function()
// // {
// // 	console.log("Bye");
// // }
// // function multiply(a,b)
// // {
// // 	return a * b;
// // }
// // sayBye();

// // Make a keyless car EVEN BETTER!
// // We are improving our car from previous exercise now.
// // Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

// function checkDriverAge()
// {
// 	var age = prompt("What is your age?");
// 	if (age < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }


// var checkDriverAge2 = function()
// {
// 	var age = prompt("What is your age?");
// 	if (age < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }

// function checkDriverAge3()
// {
// 	var age = prompt("What is your age?");
// 	if (age < 18) {
// 	return console.log("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	return console.log("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	return console.log("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }
// checkDriverAge3();

// // //1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// // // Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// // //2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// // //BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// // checkDriverAge(92);
// // it returns "Powering On. Enjoy the ride!"
// // using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift();
// console.log(array);
// array.sort();
// console.log(array);
// array.push("Kiwi");
// console.log(array);
// array.shift();
// console.log(array);
// array.reverse();
// console.log(array);


// // 1. Remove the Banana from the array.

// // 2. Sort the array in order.

// // 3. Put "Kiwi" at the end of the array.

// // 4. Remove "Apples" from the array.

// // 5. Sort the array in reverse order. (Not alphabetical, but reverse
// // the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// // you should have at the end:
// // ["Kiwi", "Oranges", "Blueberries"]

// // using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1]);
// // access "Oranges".

// Create an object and an array which we will use in our facebook exercise. 

// // 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// var userDetails1 = {
// 	username: "Ayush",
// 	password: "Bittu1!"
// }



// // 2. Create an array which contains the object you have made above and name the array "database".
// var database = [userDetails1];
// console.log(database[0]);


// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// var newsfeed = [
// {
// 	username: "Zagreus",
// 	timeline: "Javascript is cool"
// },
// {
// 	username: "Hades",
// 	timeline: "Java is better!"	
// },
// {
// 	username: "Persephone",
// 	timeline: "Both are good when used correctly"
// }
// ]

// var usernamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");

// function signIn(user, pass)
// {
// 	if(user === database[0].username && pass === database[0].password)
// 	{
// 		console.log(newsfeed);
// 	}
// 	else
// 	{
// 		alert("Sorry wrong username or password!")
// 	}
// }

// signIn(usernamePrompt, passwordPrompt);

// var todos = [
// "clean room",
// "brush teeth",
// "exercise",
// "study javascript",
// "eat healthy"
// ];
// console.log(todos.length);

// for(var i = 0; i < todos.length; i++)
// {
// 	console.log(todos[i]+ "!");
// }
// var todosLength = todos.length

// for (var i = 0; i < todosLength; i++) 
// {
// 	todos.pop();
// }
// console.log(todos);
// var counter = 0
// while(counter <10)
// {
// 	console.log(counter);
// 	counter++;
// }

// var counterOne = 10;
// while(counterOne > 0)
// {
// 	console.log(counterOne);
// 	counterOne--;
// }

// using the below sytax, this is what is being performed, 
// 1) forEach() is called on the todos list
// 2) On each element of the todos list, an anonymous function is being called
// 3) The anonymous function takes an array element as an input
// 4) Each element is printed out to console as that is what the function does in this case
// 5) forEach() takes multiple inputs into function, the first is the element, the second is the index and the third is the array itself
// 6) More information can be found online to read up on it

// todos.forEach(function(arrayElement)
// {
// 	console.log(arrayElement);
// }
// )

// todos.forEach(function(arrayElement, index)
// {
// 	console.log(arrayElement, index);
// }
// )

// make the function outside the forEach
// function logTodos(todos, i)
// {
// 	console.log(todos, i);
// }

// // call the function inside the forEach
// todos.forEach(logTodos);



// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction) // using all three inputs of forEach in this case in myFunction

// function myFunction(item, index, arr) {
//   arr[index] = item * 10; // this sets the item/element in the arr/array at each index/index to the item/element * 10
// }


// //Create an object and an array which we will use in our facebook exercise. 

// // 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// var userDetails1 = {
// 	username: "Ayush",
// 	password: "Bittu1!"
// }



// // 2. Create an array which contains the object you have made above and name the array "database".
// var database = [
// {
// 	username: "Ayush",
// 	password: "Bittu1!"
// },
// {
// 	username: "Sally",
// 	password: "123"
// },
// {
// 	username: "Ingrid",
// 	password: "777"
// }
// ]



// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// var newsfeed = [
// {
// 	username: "Zagreus",
// 	timeline: "Javascript is cool"
// },
// {
// 	username: "Hades",
// 	timeline: "Java is better!"	
// },
// {
// 	username: "Persephone",
// 	timeline: "Both are good when used correctly"
// }
// ]


// function isUserValid(user, pass)
// {
// 	for(var i = 0; i < database.length; i++)
// 	{
// 		if(user === database[i].username && pass === database[i].password)
// 	{
// 		return true;
// 		// console.log(newsfeed);
// 	}
// }
// return false;
// }

// function signIn(username, password)
// {
// 	if(isUserValid(username, password))
// 	{
// 		console.log(newsfeed)
// 	}
// 	else
// 	{
// 		console.log("Sorry wrong username or password!")
// 	}
// }

// var usernamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");
// signIn(usernamePrompt,passwordPrompt)


// //#1 Create a one line function that adds adds two parameters

// //Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)


// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

// //What are the two elements of a pure function?


// //Advanced Arrays
// var array = [1, 2, 10, 16];
// const double = [];
// const newArray = array.forEach((num) => {
// 	double.push(num * 2);
// }
// )
// console.log("forEach: ", double); 

// //map, filter reduce
// const mapArray = array.map((num) => {
// 	return (num*2)
// })

// console.log("mapArray: ", mapArray);

// //filter

// const filterArray = array.filter((num) =>
// {
// 	return num > 5;
// })

// console.log("filter", filterArray);

// const reduceArray = array.reduce((accumulator, num) =>
// {
// 	return accumulator + num
// },0 // the accumulator starts at 0 in this case, basically it starts a tally where you want it to begin
// )

// // console.log("reduce: ", reduceArray)

// var object1 = {value: 10};
// var object2 = object1
// var object3 = { value = 10};

// // context vs scope

// const object4 = {
// 	a: function()
// 	{
// 		console.log(this); // keyword this refers to the object4 in this instance
// }

// instantiation - when you create instances or multiple copies of the object to make the code reusable

// class Player
// {
// 	constuctor(name, type)
// 	{
// 		this.name = name;
// 		this.type = type;
// 	}

// 	introduce()
// 	{
// 		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// 	}
// }
// class Wizard extends Player // if you extend a class, use super to have access to the parent properties
// {
// 	constructor(name, type)
// 	{
// 		super(name,type);
// 	}
// 	play()
// 	{
// 		console.log(`WEEE I'm a ${this.type}`);
// 	}

// }

// const wizard1 = new Wizard('Shelly','Healer');
// const wizard2 = new Wizard('Shawn','Dark Magic');

// // Object.assign({},obj) // makes copy of object
//                 //{} -> empty object parameter 1
//                 //obj -> actual object passed in this is parameter 2
// //{...obj} -> same as Object.assign but slightly cleaner than the previous method
// // [].concat(array)
//  //[] -> empty array passed in 
//  //array -> the actual items array list to be passed in
// // Solve the below problems:

// // #1) Line up the Turtle and the Rabbit at the start line:
//   const startLine = '     ||<- Start line';
//   let turtle = '🐢';
//   let rabbit = '🐇';
// turtle.padStart(9)
// rabbit.padStart(9)

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);


// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');


// // #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// Object.entries(obj).map((value)=>
// {
//   return console.log(value.join(" "))
// })
// // to this:
// 'my name is Rudolf the raindeer'

// //Looping

// // const baset = ['apples', 'oranges', 'grapes'];
// const detailedBasket = 
// {
// 	apples: 5,
// 	oranges: 10,
// 	grapes: 1000
// }

// //1
// for(let i = 0; i < basket.length; i++)
// {
// 	console.log(basket[i]);
// }

// //2

// basket.forEach((item) =>
// {
// 	return console.log(item);
// })

// // for of - Does not work with objects
// // Iterating - can be done over iterables - arrays, strings.
// for(item of basket) // item is a variable and can be named whatever is convnient and basket is the array it iterates over. Keyword is of in the brackets and the array name which is being iterated over here
// {
// 	console.log(item)
// }

// // for in - properties - used for objects. Will also work in arrays and give indexes
// // enumerating - objects
// // objects cannot be iterated over in most cases so
// for(item in detailedBasket) //enumerates over the properties
// {
// 	console.log(item);
// }

//Javascript is a single threaded language and the call stack has a first in last out system - remember using magic the gathering stack. Other languages can have multiple call stacks, making them multi-threaded
// It has only one memory heap in it and so it is single threaded
// sychronous programming means you wait for one item to finish and then the second one will begin