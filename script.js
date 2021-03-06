var css = document.querySelector("H3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("grad");

// console.log(css);
// console.log(col1);
// console.log(col2);

function setgrad()	{
	body.style.background = 
	"linear-gradient(to right, " + 
	col1.value + ", " + 
	col2.value + ")";
	// console.log(col1.value);
	// console.log(col2.value);
	css.textContent = body.style.background + ";";
}

col1.addEventListener("input",setgrad);
col2.addEventListener("input",setgrad);

// console.log(col1.value);
// console.log(col2.value);
	

// col2.addEventListener("input", function()	{
// 	console.log(col2.value);
// })