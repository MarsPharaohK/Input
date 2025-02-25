var textInput = document.getElementById("amount");
var colorInput = document.getElementById("colorpicker");

function setup() {
	var c = createCanvas(500,500);
	c.parent("canvasWrapper");
}

function draw()  {
	background(colorpicker.value);
	noStroke();
	fill("#0000ff");	
	textAlign(CENTER,CENTER);
	textSize(140);
	text(textInput.value,width/2,height/2);
}