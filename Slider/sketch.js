var slider = document.getElementById("slider");

function setup() {
	var c = createCanvas(500,500);
	c.parent("canvasWrapper");
}

function draw()  {
	background("#39C5BB");
	noStroke();
	fill("#0000ff");	
	circle(width/2,height/2,slider.value);
}