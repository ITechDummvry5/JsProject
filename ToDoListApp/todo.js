const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listcontainer");
const card = document.querySelector(".card"); // main card container

function updateCardVisibility() {
    // Hide card if no tasks, show if there is at least one
    if (listContainer.children.length === 0) {
        card.style.display = "none";
    } else {
        card.style.display = "block";
    }
}

function addTask() {
    const taskText = inputBox.value.trim();
    if (!taskText) return alert("You must write something!");

    // Create task container
    const div = document.createElement("div");
    div.classList.add("task", "today"); // default category

    // Check circle
    const spanCheck = document.createElement("span");
    spanCheck.classList.add("check");
    div.appendChild(spanCheck);

    // Task text
    const textNode = document.createTextNode(taskText);
    div.appendChild(textNode);

    // Remove button
    const removeBtn = document.createElement("span");
    removeBtn.classList.add("remove");
    removeBtn.innerHTML = "&times;"; // × symbol
    div.appendChild(removeBtn);

    listContainer.appendChild(div);
    inputBox.value = "";

    updateCardVisibility();
}

// Toggle check or remove
listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
        e.target.classList.toggle("checked");
    } else if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        updateCardVisibility();
    }
});

// Initial hide if empty
updateCardVisibility();
