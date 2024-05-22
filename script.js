function shopAtYSL() {
	let name = prompt("What is your name?");
	if ((name = name)) {
		alert("Hey " + name + ", enjoy the shopping experience!👗👠 ");
	} else {
		alert("You're missing out!");
	}
}
let shopYSL = document.querySelector("button");
shopYSL.addEventListener("click", shopAtYSL);