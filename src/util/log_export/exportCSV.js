function exportCSV() {
  let exportList = ["Title, Description, Due Date, Date Validity, Class List"];
  for (let i = 0; i < myJobs.length; i++) {
    const jobbies = myJobs[i];
    const exportJobs = `\n${jobbies.job}, ${jobbies.desc}, ${jobbies.due}, ${jobbies.isDateTrueFalse}, ${jobbies.status}`;
    exportList.push(exportJobs);
  }

  return exportList;

  //const downloadCSV = document.createElement("a");

  //actualDownload(exportList, exportDiv);
}

/*function actualDownload(exportList, exportDiv) {
  const downloadCSV = document.createElement("a");
  const file = new Blob(exportList, { type: ".csv" });
  downloadCSV.href = URL.createObjectURL(file);
  downloadCSV.innerText = "Download Jobs";
  downloadCSV.download = "job_list.csv";
  exportDiv.appendChild(downloadCSV);
  console.log("end of download function");
}*/
