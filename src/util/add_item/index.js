//ADD ITEM BUTTON
function addItem() {
  inputDiv.classList.add("form-outline");
  jobInputDiv.appendChild(inputDiv);
  inputDiv.replaceChildren();
  const jobInput = createInputs("label-input-job", "Job: ", "job");
  const descInput = createInputs("label-b", "Description: ", "description");
  const dateInput = createInputs("label-c", "DD/MM/YYYY: ", "date");

  inputDiv.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (!validateInputs(jobInput, descInput, dateInput)) {
        return;
      }
      const dateBoolean = validateDate(dateInput);
      myJobs.push({
        job: jobInput.value,
        desc: descInput.value,
        due: dateInput.value,
        date: dateBoolean,
        classes: "",
      });

      enterEventListener();
      // EVENT LISTENERS WONT BE REMOVED WITH THE CHILD SO VALUE MUST BE SET TO ""
      jobInput.value = "";
      descInput.value = "";
      dateInput.value = "";
    }
  });
}
