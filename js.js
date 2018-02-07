// task1

document.getElementById('box').onmousemove = function (e) {
	x = e.offsetX;
	y = e.offsetY;

	document.getElementById('outXY').innerHTML = `x: ${x} <br> y: ${y}`;
}

// task2

document.getElementById('folder').ondblclick = function () {
	this.style.backgroundImage = 'url(open.png)';
}

// task 3

var boxes = document.getElementById('boxes');
for (var i = 0; i < 300; i++){
	boxes.innerHTML +=' <div class="Blocksball"></div>';
}

var Blocksball = document.getElementsByClassName('Blocksball');

for (var i = 0; i <Blocksball.length; i++){
	Blocksball[i].onmouseenter = round;
	Blocksball[i].onmouseleave = square;
}

function round () {
	this.style.borderRadius = '100%';
}
function square () {
	this.style.borderRadius = '0%';
}


// task 4

var images = document.getElementsByClassName('bgImg');

for (var i = 0; i < images.length; i++){
	images[i].onclick = bgi;
}

function bgi () {
	document.getElementById('mainImg').style.backgroundRepeat='no-repeat';
	document.getElementById('mainImg').style.backgroundImage = `url(${this.src})`;
}



// task5

var margintop = 100;
document.getElementById('blockMove').onclick = function () {
	this.style.marginTop = margintop + 'px';
	margintop += 100;
}


// task 6

var posLeft = 0;
var posNum = 0;
document.getElementById('stripe').onclick = function () {
	posLeft += 100;
	posNum++;
	if (posLeft >= 300) {
		posLeft = 0;
		posNum = 0;
	}
	document.getElementById('trig').style.left = posLeft + 'px';
	console.log(posNum);
}




