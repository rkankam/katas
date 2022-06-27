let gridChildren = document.getElementById("grid").children;
let grid = document.getElementById("grid");
let insert = document.getElementById("insert");

for (const gridCase of gridChildren) {
	gridCase.addEventListener("click", () => {
		insert.textContent = gridCase.textContent;
		choosediv(gridCase);
	});
}

function choosediv(element) {
	let curr_sel = document.querySelector(".unselected.selected");
	if (curr_sel) curr_sel.classList.remove("selected");
	element.classList.add("selected");
}
