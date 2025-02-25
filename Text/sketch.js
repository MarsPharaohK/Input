var textInput = document.getElementById("text");

function setup() {
	var c = createCanvas(500,500);
	c.parent("canvasWrapper");
}

function draw()  {
	background("#aaaaaa");
	noStroke();
	fill("#0000ff");	
	textAlign(CENTER,CENTER);
	textSize(40);
	text(textInput.value,width/2,height/2);
}