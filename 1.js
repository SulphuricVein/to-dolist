const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

setTimeout(function () {
  document.querySelector(".container").classList.add("animate");
}, 500);

function addTask() {
  if (inputBox.value === "") alert("Invalid Input");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  store();
}
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");

    store();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();

    store();
  } else {
    return null;
  }
});

function store() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function show() {
  listContainer.innerHTML = localStorage.getItem("data");
}
show();
