//var player1 = prompt("X's or O's");


var startButton = document.getElementById("start-Button");
var blockGrid = document.getElementById("blockGrid");
var xoSelect = document.getElementById("xo-select");
var selectedX = document.getElementById("selectX");
var selectedO = document.getElementById("selectO");

var a1Click = document.getElementById("a1");
var a2Click = document.getElementById("a2");
var a3Click = document.getElementById("a3");
var b1Click = document.getElementById("b1");
var b2Click = document.getElementById("b2");
var b3Click = document.getElementById("b3");
var c1Click = document.getElementById("c1");
var c2Click = document.getElementById("c2");
var c3Click = document.getElementById("c3");

var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var counter = 0;
var player1;
var player2;
var player1WinStatement = "Player One WINS!!";
var player2WinStatement = "Player Two WINS!!";


function togglePlayerChoice() {
	startButton.className = "invisible";
	xoSelect.classList.remove("invisible");
};

function toggleBoxGrid() {
	startButton.className = "invisible";
	blockGrid.classList.remove("invisible");
	xoSelect.className = "invisible";
};

function disableBox() {
	event.target.className = "col-xs-4 disable";    ////CREATE CLASS IN CSS
}

function checkForWin(player, winMessage) {

	if (a1 === player && a2 === player && a3 === player) {
		alert(winMessage);
	} else if (b1 === player && b2 === player && b3 === player) {
		alert(winMessage);
	} else if (c1 === player && c2 === player && c3 === player) {
		alert(winMessage);
	} else if (a1 === player && b1 === player && c1 === player) {
		alert(winMessage);
	} else if (a2 === player && b2 === player && c2 === player) {
		alert(winMessage);
	} else if (a3 === player && b3 === player && c3 === player) {
		alert(winMessage);
	} else if (a1 === player && b2 === player && c3 === player) {
		alert(winMessage);
	} else if (a3 === player && b2 === player && c1 === player) {
		alert(winMessage);
	}
	return;

};

function reAssignVar(boxID) {
	if (counter % 2 === 0) {
		boxID = player2;
	} else {
		boxID = player1;
	}
	return boxID;
};

function playerMoves() {

	counter++;
	if (counter % 2 === 0) {
		checkForWin(player2, player2WinStatement);
	} else {
		checkForWin(player1, player1WinStatement);
	}
	return;
}

a1Click.addEventListener('click', function() {
	a1 = reAssignVar(a1);
	playerMoves();
});
a2Click.addEventListener('click', function() {
	a2 = reAssignVar(a2);
	playerMoves();

});
a3Click.addEventListener('click', function() {
	a3 = reAssignVar(a3);
	playerMoves();
});
b1Click.addEventListener('click', function() {
	b1 = reAssignVar(b1);
	playerMoves();
});
b2Click.addEventListener('click', function() {
	b2 = reAssignVar(b2);
	playerMoves();
});
b3Click.addEventListener('click', function() {
	b3 = reAssignVar(b3);
	playerMoves();
});
c1Click.addEventListener('click', function() {
	c1 = reAssignVar(c1);
	playerMoves();
});
c2Click.addEventListener('click', function() {
	c2 = reAssignVar(c2);
	playerMoves();
});
c3Click.addEventListener('click', function() {
	c3 = reAssignVar(c3);
	playerMoves();
});

startButton.addEventListener('click', togglePlayerChoice);
// selectX.addEventListener('click', toggleBoxGrid);

selectO.addEventListener('click', function () {
	player1 = true;
	player2 = false;
	toggleBoxGrid();
});

selectX.addEventListener('click', function() {
	player1 = false;
	player2 = true;
	toggleBoxGrid();
});



/////////////// WHO WINS ////////////////////
