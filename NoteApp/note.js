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

// === LOCALSTORAGE HANDLER ===
function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note .input-box").forEach(p => {
    notes.push(p.innerHTML); // save note text
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(text => {
    createNote(text);
  });
  updateEmptyState();
}

// === CREATE NOTE ===
function createNote(text = "") {
  const note = document.createElement("div");
  note.className = "note";

  const p = document.createElement("p");
  p.className = "input-box";
  p.contentEditable = "true";
  p.innerHTML = text;

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.innerHTML = `<img src="images/trash-can.png" alt="Delete Note">`;

  // Delete note
  delBtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
    updateEmptyState();
  });

  // Auto-save when user types
  p.addEventListener("input", saveNotes);

  note.appendChild(p);
  note.appendChild(delBtn);
  notesContainer.appendChild(note);

  updateEmptyState();
  saveNotes();
}

// === Add button event ===
createBtn.addEventListener("click", () => {
  createNote(); // blank note
});

// === Run on page load ===
loadNotes();
