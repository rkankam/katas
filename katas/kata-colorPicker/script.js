let picker = document.getElementById("picker");
let pickerContainerBg = document.querySelector("#picker_container");
let title = document.querySelector("h1");
let square = document.getElementById("square");

pickerContainerBg.style.backgroundColor = "black";

picker.addEventListener("change", (e) => {
	if (navigator.vendor == "Google Inc.") {
		let color = e.target.value;
		pickerContainerBg.style.backgroundColor = color;
		title.style.color = color;
		square.style.border = `solid 2px ${color}`;
	} else {
		let color = e.explicitOriginalTarget.value;
		pickerContainerBg.style.backgroundColor = color;
		title.style.color = color;
		square.style.border = `solid 2px ${color}`;
	}
	console.log(e);
});
