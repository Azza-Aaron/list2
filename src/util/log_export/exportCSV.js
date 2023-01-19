function exportCSV() {
  let exportList = ["Title, Description, Due Date, Date Validity, Class List"];
  for (let i = 0; i < myJobs.length; i++) {
    const jobbies = myJobs[i];
    const exportJobs = `\n${jobbies.job}, ${jobbies.desc}, ${jobbies.due}, ${jobbies.isDateTrueFalse}, ${jobbies.status}`;
    exportList.push(exportJobs);
  }

  return exportList;
}
