window.addEventListener('DOMContentLoaded', () =>{
	/** Lab3 for Claude Manning **/
	const board = document.querySelectorAll("board");
	const actualBoard = document.getElementById("board").children;
  	let x= "X";
  	const stat=document.querySelectorAll('#status');
  	const btnButton=document.getElementsByClassName("btn")[0];
  	const rules=[[0,4,8],[0,3,6],[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
  	let selected;
  	let nexxt=true;
	let arr=["","","","","","","","",""];
	const clicksquare;
	const index;
	const gamewon= () => 'Congratulations ${x} is the winner ';
	const gamedraw = () => 'None of you won';
	const xplay = () => '${x} please play';
	let sqaureselect;
	let index2;
	let square;

	function sq(square) {
		 clicksquare = square.target;
		 index= parseInt(clicksquare.getAttribute('cellindex'));
		
		if (arr[index] !== "" || !nexxt) {
        return;
		}
		inserted(clicksquare, index);
		current();
	}

	function insereted(sqaureselect, index2) {
		 arr[index] = x;
		 squareselect.innerHTML= x;

	}
	

	function move() {
		x = x === "X" ? "O" : "X";
		stat.innerHTML = x();

	}




	btnButton.addEventListener('click', resetBoard);
});