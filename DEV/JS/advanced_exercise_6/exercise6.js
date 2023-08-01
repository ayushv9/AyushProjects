//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 5 
const object2 = object1;  // 5
const object3 = object2;  // 5
const object4 = { a: 5};  // 5
object1.a = 4; //value is 4 for object1, object2 and object3 and still 5 for object4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal
{
	constructor(name, type, colour)
	{
		this.name = name;
		this.type = type;
		this.colour = colour;
	}

}

class Mamal extends Animal
{
	constructor(name,type, colour)
	{
		super(name, type, colour);
	}
	sound()
	{
		console.log(`MOOO! my name is ${this.name}, my type is ${this.type} and my colour is ${this.colour}`);
	}

}
const cow = new Mamal("Shelly", "cow", "brown");