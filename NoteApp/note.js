// === DATE HANDLER ===
// Show today's date in the card title
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);
document.getElementById("date-title").textContent = formattedDate;



const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".input-btn");

// Function to update placeholder visibility
function updateEmptyState() {
  if (notesContainer.children.length === 0) {
    notesContainer.classList.add("empty");
  } else {
    notesContainer.classList.remove("empty");
  }
}

// Add new note
createBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  note.className = "note";

  const p = document.createElement("p");
  p.className = "input-box";
  p.contentEditable = "true";

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.innerHTML = `<img src="images/trash-can.png" alt="Delete Note">`;

  delBtn.addEventListener("click", () => {
    note.remove();
    updateEmptyState();
  });

  note.appendChild(p);
  note.appendChild(delBtn);
  notesContainer.appendChild(note);

  updateEmptyState();
});
updateEmptyState();