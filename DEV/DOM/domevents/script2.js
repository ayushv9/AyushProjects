var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// var li = document.createElement("li") // creates list element
// // li.appendChild(document.createTexNode("testing")) // Adds "testing" text to the list element created earlier here
// console.log(input.value);
// li.appendChild(document.createTextNode(input.value))
// ul.appendChild(li); // adds the li element to te acual list we have otherwise it would exit but be in the js only and not on the actual form

function inputLength()
{
	return input.value.length;
}

function createListElement()
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
function addListAfterClick()
{
	if(input.value.length > 0)
		{
			createListElement();
		}
}

function addEventAfterKeypress(event)
{
	if(inputLength() > 0 && event.which === 13)
		{
			createListElement();
		}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addEventAfterKeypress)