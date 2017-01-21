//var player1 = prompt("X's or O's");


var startButton = document.getElementById("start-Button");
var blockGrid = document.getElementById("blockGrid");
var xoSelect = document.getElementById("xo-select");
var selectedX = document.getElementById("selectX");
var selectedO = document.getElementById("selectO");
var resetButton = document.getElementById("reset-button");

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
var player1Icon;
var player2Icon;
var player1WinStatement = "Player One WINS!!";
var player2WinStatement = "Player Two WINS!!";

function resetGame() {
	a1 = undefined;
	a2 = undefined;
	a3 = undefined;
	b1 = undefined;
	b2 = undefined;
	b3 = undefined;
	c1 = undefined;
	c2 = undefined;
	c3 = undefined;

	counter = 0;
	player1 = undefined;
	player2 = undefined;
	player1Icon = undefined;
	player2Icon = undefined;

	a1Click.className = "col-xs-4 hide-x hide-o";
	a2Click.className = "col-xs-4 hide-x hide-o";
	a3Click.className = "col-xs-4 hide-x hide-o";
	b1Click.className = "col-xs-4 hide-x hide-o";
	b2Click.className = "col-xs-4 hide-x hide-o";
	b3Click.className = "col-xs-4 hide-x hide-o";
	c1Click.className = "col-xs-4 hide-x hide-o";
	c2Click.className = "col-xs-4 hide-x hide-o";
	c3Click.className = "col-xs-4 hide-x hide-o";

	resetButton.className = "invisible";
	xoSelect.classList.remove("invisible");

}

function endGame() {
	blockGrid.className = "invisible";
	resetButton.classList.remove("invisible");
}

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
		endGame();
	} else if (b1 === player && b2 === player && b3 === player) {
		alert(winMessage);
		endGame();
	} else if (c1 === player && c2 === player && c3 === player) {
		alert(winMessage);
		endGame();
	} else if (a1 === player && b1 === player && c1 === player) {
		alert(winMessage);
		endGame();
	} else if (a2 === player && b2 === player && c2 === player) {
		alert(winMessage);
		endGame();
	} else if (a3 === player && b3 === player && c3 === player) {
		alert(winMessage);
		endGame();
	} else if (a1 === player && b2 === player && c3 === player) {
		alert(winMessage);
		endGame();
	} else if (a3 === player && b2 === player && c1 === player) {
		alert(winMessage);
		endGame();
	} else if (counter === 9) {
		alert("Its a TIE!!");
		endGame();
	}
	return;

};

function reAssignVar(boxID) {
	if (counter % 2 === 0) {
		boxID = player1;
	} else {
		boxID = player2;
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

function backgroundChange () {
	if ((counter % 2 !== 0 && player1Icon === "o") || (counter % 2 === 0 && player2Icon === "o")) {
		event.target.className = "col-xs-4 hide-x";
		event.target.id = "";
	} else if ((counter % 2 !== 0 && player1Icon === "x") || (counter % 2 === 0 && player2Icon === "x")) {
		event.target.className = "col-xs-4 hide-o";
		event.target.id = "";
	}
}

a1Click.addEventListener('click', function() {
	if (a1 === undefined) {
	a1 = reAssignVar(a1);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.");
	}
});
a2Click.addEventListener('click', function() {
	if (a2 === undefined) {
	a2 = reAssignVar(a2);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.");
	}
});
a3Click.addEventListener('click', function() {
	if (a3 === undefined) {
	a3 = reAssignVar(a3);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});
b1Click.addEventListener('click', function() {
	if (b1 === undefined) {
	b1 = reAssignVar(b1);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});
b2Click.addEventListener('click', function() {
	if (b2 === undefined) {
	b2 = reAssignVar(b2);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});
b3Click.addEventListener('click', function() {
	if (b3 === undefined) {
	b3 = reAssignVar(b3);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});
c1Click.addEventListener('click', function() {
	if (c1 === undefined) {
	c1 = reAssignVar(c1);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});
c2Click.addEventListener('click', function() {
	if (c2 === undefined) {
	c2 = reAssignVar(c2);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});
c3Click.addEventListener('click', function() {
	if (c3 === undefined) {
	c3 = reAssignVar(c3);
	playerMoves();
	backgroundChange();
	} else {
		alert("Sorry This Space Is Taken.")
	}
});

startButton.addEventListener('click', togglePlayerChoice);
resetButton.addEventListener('click', resetGame);


selectO.addEventListener('click', function () {
	player1 = true;
	player2 = false;
	player1Icon = "o";
	player2Icon = "x";
	toggleBoxGrid();
});

selectX.addEventListener('click', function() {
	player1 = false;
	player2 = true;
	player1Icon = "x";
	player2Icon = "o"
	toggleBoxGrid();
});



/////////////// WHO WINS ////////////////////
