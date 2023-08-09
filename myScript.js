class Cell { 

	constructor(num) {
		this.numValue = num;
		this.candidates = [];
		this.given = true;

		this.Cell(num);
	}

	Cell(num) {
		if (num == 0) {
			this.candidates = [1,2,3,4,5,6,7,8,9];
			this.given = false;
		}
	}

	get getNum() {
		return this.numValue;
	}

	set setNum(newNum) {
		this.numValue = newNum;
	}

}

let showMessage = false;
let puzzleString = "";

let myArray= [];   // array elements 0 to 80   read from puzzle string
const cellArray = [];  // create the cells array

readString();
drawGrid();

function readString() {
	let z = document.getElementById("puzzleString");
	puzzleString = z.value;
	myArray = puzzleString.split("").map((item) => {
		let num = Number(item);
		if (isNaN(num)) {num = 0};
		return num;
	});  //convert puzzle string to array
	
	for (let i = 0 ; i< myArray.length ;i++  ) {
		cellArray[i] = new Cell(myArray[i]);
	}
}

function drawGrid() {
	// start <table with style
	//<table style="text-align: center; width: 100px;" border="1" cellpadding="2" cellspacing="2">
	// <td style="height: 50px; width: 50px;"></td>
	//<table id="myTable"  style="text-align: center; margin-left: auto; width: 500px; font-size:400% ; height: 500px; margin-right: auto;" border="3" cellpadding="05" cellspacing="0">
		//style="text-align: center; width: 1000px; height: 1000px;" border="1" cellpadding="2" cellspacing="2"
	
		// let outerTag = 'div'
	// let puzzleHtml = `<${outerTag}>`
	// let r = 0;
	// for (let row = 0; row < 9; row++) {
	//  puzzleHtml += '<tr>'
	// 	for (let col = 0; col < 9; col++) {
	// 		r = ((row * 9) + col);
			
	// 	 puzzleHtml += '<td>'
	// 		cellNum = cellArray[r].getNum
	// 		if (cellNum > 0) {
	// 		 puzzleHtml += cellNum;
	// 		}
	// 	 puzzleHtml += '</td>'
	// 	};
	//  puzzleHtml += '</tr>'
	// }

	let puzzleHtml = '<div class="grid-container">'
	for (let i = 0; i < cellArray.length; i++) {
		puzzleHtml += `<div>${cellArray[i].getNum}</div>`

	}

	puzzleHtml += '</div>'


//  puzzleHtml+= `</${outerTag}>`
	let z1 = document.getElementById("grid");
	z1.innerHTML = puzzleHtml;

}  