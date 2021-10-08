document.addEventListener('DOMContentLoaded', () => {
	
	const winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
	let x1 = "X";
	let arr1 = ["", "", "", "", "", "", "", "", ""];
	const winner = () => `Congratulations! ${x1} is the winner`;
	const turn = () => ` Play ${x}`;
	const stat = document.querySelector('#status');
	let active = true;

	function sq(square1) {
		const clicksquare = square1.target;
		const index1 = parseInt(clickesquare.getAttribute('data-cell-index'));
		
		if (arr1[index1] !== "" || !active) {
        return;
		}
		opt(clicksquare, index1);
		decider();
	}


	
	function opt(sqselected, sqnum) {
		arr1[sqnum] = x1;
		sqselected.innerHTML = x1;

	}
	
	function move() {
		x1 = x1 === "X" ? "O" : "X";
		stat.innerHTML = turn();

	}
	
	function decider() {
		let ifWon = false;
		for (var i = 0; i <= 7; i++) {
        const condition = winnings[i];
        let a = arr1[condition[0]];
        let b = arr1[condition[1]];
        let c = arr1[condition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            ifWon = true;
            break
			}
		}
		if (ifWon) {
			stat.innerHTML = winner();
			active= false;
			return;
		}
		

	   move();

	}
	

		
	function NewGame() {
		stat.innerHTML = turn();
		newBoard();
		active = true;

	}
	
	function hovering(){
		document.getElementsByClassName("square").setAttribute("class", "hover");
	}
	


	
	function newBoard() {
		arr1 = ["", "", "", "", "", "", "", "", ""];
		let boardcreate = document.getElementById("board");
		let boarddiv = boardcreate.getElementsByTagName("div");
			for(var d=0; d<boarddiv.length; d++) {
				boarddiv[d].innerHTML = "";
				boarddiv[d].setAttribute("data-cell-index", d);
				boarddiv[d].setAttribute("class", "square");
				boarddiv[d].addEventListener('click', sq);
				boarddiv[d].addEventListener("mouseover", hovering);
			}	  
	}

	newBoard();
	document.querySelector('.btn').addEventListener('click', NewGame);
	
	
 });