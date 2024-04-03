let executeButton = document.getElementById("executeButton");
let userInput = document.getElementById("userInput");
let output = document.getElementById("output")

executeButton.addEventListener("click", function() {
	let input = userInput.value;
	generator(input);
	restyle();
});

function generator(userInput) {
	let rand = Math.floor(Math.random() * 100);
	console.log(rand);
	output.innerText = userInput + ", your lucky number is " + rand + "!";
};

function restyle() {
	//font color
	let r = Math.random() * 255;
	let g = Math.random() * 255;
	let b = Math.random() * 255;
	heading.style.color = "rgb("+r+","+g+","+b+")";
	//font size
	let size = 0;
	while (size < 20){
		size = Math.floor(Math.random() * 150)
	}
	heading.style.fontSize = size + "px";
	//font family
	var font = ["Courier New", "Times New Roman", "Verdana"];
	let index = Math.floor(Math.random() * 3);
	let fontFam = font[index];
	heading.style.fontFamily = fontFam;
};