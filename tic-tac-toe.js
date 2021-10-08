window.addEventListener('DOMContentLoaded', () =>{

	const board = document.querySelectorAll("board");
	const actualBoard = document.getElementById("board").children;
  	const x= "X";
  	const o="O";
  	const stat=document.getElementById("status");
  	const btnButton=document.getElementsByClassName("btn")[0];
  	const rules=[[0,4,8],[0,3,6],[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
  	let selected;
  	let nexxt=true;
	

	btnButton.addEventListener('click', resetBoard);
});