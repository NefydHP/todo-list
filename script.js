document.addEventListener("DOMContentLoaded", function () {
	function add_task() {
		const task_input = document.querySelector("#tasks-manager #task-input");

		const newTaskLabel = document.createElement("label");
		newTaskLabel.classList.add("task-container");

		const input = document.createElement("input");
		input.type = "checkbox";
		input.classList.add("task-checkbox");
		newTaskLabel.appendChild(input);

		const customCheckmark = document.createElement("span");
		customCheckmark.classList.add("custom-checkmark");
		newTaskLabel.appendChild(customCheckmark);

		const taskLabel = document.createElement("span");
		taskLabel.classList.add("task-label");
		taskLabel.textContent = task_input.value;
		newTaskLabel.appendChild(taskLabel);

		document.getElementById("tasks-container").appendChild(newTaskLabel);

		task_input.value = "";

		const checkbox = newTaskLabel.querySelector(".task-checkbox");
		checkbox.addEventListener("change", function () {
			if (checkbox.checked) {
				const label = newTaskLabel.querySelector(".task-label");

				// Trigger strikethrough animation
				label.classList.add("strikethrough");

				// Fade out the entire task after 1s
				setTimeout(() => {
					newTaskLabel.style.transition = "opacity .5s";
					newTaskLabel.style.opacity = "0";
					setTimeout(() => {
						newTaskLabel.remove();
					}, 500);
				}, 500);
			}
		});
	}

	document
		.querySelector("#tasks-manager #tasks-control button")
		.addEventListener("click", function () {
			add_task();
		});

	document
		.querySelector("#tasks-manager #tasks-control #task-input")
		.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				event.preventDefault();
				add_task();
			}
		});

	document
		.querySelectorAll("#tasks-section #tasks-container .task-container")
		.forEach(function (element) {
			element.addEventListener("click", function () {
				// your code here
			});
		});
});
