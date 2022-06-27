let feedback = document.getElementById("feedback");
let counter = document.getElementById("counter");
let count = 0;

document.body.addEventListener("keyup", (e) => {
	feedback.textContent += e.key;
	count++;
	counter.textContent = count;
});
