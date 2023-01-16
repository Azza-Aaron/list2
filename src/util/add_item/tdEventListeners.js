//PROCESS INPUT LISTENERS FOR ELEMENTS
function addTdEventListener(i, passDiv) {
  passDiv.addEventListener("click", function () {
    if (passDiv.className === "task") {
      passDiv.classList.remove("done", "overdue", "task", "urgent");
      passDiv.classList.add("done");
    } else {
      passDiv.classList.remove("done", "overdue", "task", "urgent");
      passDiv.classList.add(`task`);
    }
  });
  passDiv.addEventListener("dblclick", function () {
    passDiv.classList.remove("done", "overdue", "task", "urgent");
    passDiv.classList.add("overdue");
  });
}
