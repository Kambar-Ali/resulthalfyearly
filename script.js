// script.js
const mockData = {
    "5": {
     "507": { // Ananya
       name: "Ananya",
       marks: {
         Hindi: 48,
         Science: 32,
         English: 40,
         Art: 38,
         SScience: 45,
         NaitikShiksha: 45,
         Math: 30,
         Grammar: 0,
       },
     },
     "527": { // Kafeel Khan
       name: "Kafeel Khan",
       marks: {
         Hindi: 42,
         Science: 34,
         English: 10,
         Art: 40,
         SScience: 40,
         NaitikShiksha: 42,
         Math: 45,
         Grammar: 0,
       },
     },
     "514": { // Farhan Khan
       name: "Farhan Khan",
       marks: {
         Hindi: 32,
         Science: 22,
         English: 38,
         Art: 36,
         SScience: 32,
         NaitikShiksha: 44,
         Math: 40,
         Grammar: 0,
       },
     },
     "524": { // Mo Akmal Malik
       name: "Mo Akmal Malik",
       marks: {
         Hindi: 46,
         Science: 32,
         English: 30,
         Art: 40,
         SScience: 22,
         NaitikShiksha: 25,
         Math: 35,
         Grammar: 0,
       },
     },
     "529": { // Mo Mubashhir
       name: "Mo Mubashhir",
       marks: {
         Hindi: 30,
         Science: 32,
         English: 5,
         Art: 34,
         SScience: 35,
         NaitikShiksha: 30,
         Math: 30,
         Grammar: 0,
       },
     },
     "510": { // Ilma Altaaf
       name: "Ilma Altaaf",
       marks: {
         Hindi: 40,
         Science: 18,
         English: 6,
         Art: 38,
         SScience: 18,
         NaitikShiksha: 32,
         Math: 20,
         Grammar: 0,
       },
     },
     "506": { // Mo Sufiyan
       name: "Mo Sufiyan",
       marks: {
         Hindi: 42,
         Science: 24,
         English: 5,
         Art: 36,
         SScience: 40,
         NaitikShiksha: 0, // Absent
         Math: 25,
         Grammar: 0,
       },
     },
     "518": { // Surbhi Devi
       name: "Surbhi Devi",
       marks: {
         Hindi: 30,
         Science: 25,
         English: 8,
         Art: 36,
         SScience: 20,
         NaitikShiksha: 25,
         Math: 0,
         Grammar: 0,
       },
     },
     "519": { // Mo Ayan
       name: "Mo Ayan",
       marks: {
         Hindi: 22,
         Science: 12,
         English: 6,
         Art: 38,
         SScience: 6,
         NaitikShiksha: 15,
         Math: 25,
         Grammar: 0,
       },
     },
     "520": { // Karan
       name: "Karan",
       marks: {
         Hindi: 14,
         Science: 20,
         English: 8,
         Art: 39,
         SScience: 8,
         NaitikShiksha: 13,
         Math: 15,
         Grammar: 0,
       },
     },
     "511": { // Nihal Kushwaha
       name: "Nihal Kushwaha",
       marks: {
         Hindi: 26,
         Science: 16,
         English: 10,
         Art: 30,
         SScience: 4,
         NaitikShiksha: 25,
         Math: 5,
         Grammar: 0,
       },
     },
     "532": { // Aaleen Fatima
       name: "Aaleen Fatima",
       marks: {
         Hindi: 24,
         Science: 10,
         English: 11,
         Art: 40,
         SScience: 3,
         NaitikShiksha: 14,
         Math: 0,
         Grammar: 0,
       },
     },
     "534": { // Ifra
       name: "Ifra",
       marks: {
         Hindi: 4,
         Science: 4,
         English: 6,
         Art: 38,
         SScience: 4,
         NaitikShiksha: 9,
         Math: 0,
         Grammar: 0,
       },
     },
     "535": { // Mo Yasir
       name: "Mo Yasir",
       marks: {
         Hindi: 4,
         Science: 0,
         English: 9,
         Art: 38,
         SScience: 2,
         NaitikShiksha: 13,
         Math: 0,
         Grammar: 0,
       },
     },
     // Add remaining students here...
   }
   };
   
   document.getElementById("downloadButton").style.display = "block";
   
   document.getElementById("resultForm").addEventListener("submit", function (e) {
     e.preventDefault();
     const classSelected = document.getElementById("class").value;
     const rollNumber = document.getElementById("rollNumber").value;
   
     if (mockData[classSelected] && mockData[classSelected][rollNumber]) {
       const studentData = mockData[classSelected][rollNumber];
       const marks = studentData.marks;
       const studentName = studentData.name;  // Get the student's name
   
       let totalMarks = 0, maxMarks = 0;
       const resultTable = document.getElementById("resultTable");
       resultTable.innerHTML = "";
   
       for (const subject in marks) {
         const marksObtained = marks[subject];
         totalMarks += marksObtained;
         maxMarks += 50; // Assuming max marks per subject is 50
   
         const row = document.createElement("tr");
         row.innerHTML = `<td>${subject}</td><td>${marksObtained}</td>`;
         resultTable.appendChild(row);
       }
   
       const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);
   
       // Display student name, total marks, and percentage
       document.getElementById("resultSection").style.display = "block";
       document.getElementById("totalMarks").textContent = `${totalMarks}/${maxMarks}`;
       document.getElementById("percentage").textContent = percentage;
       document.getElementById("studentName").textContent = `Student Name: ${studentName}`;  // Show student name
     } else {
       alert("No result found for the entered details!");
     }
   });
   
   // Function to generate and download the result as a PDF
   document.getElementById("downloadButton").addEventListener("click", function () {
     const classSelected = document.getElementById("class").value;
     const rollNumber = document.getElementById("rollNumber").value;
   
     if (mockData[classSelected] && mockData[classSelected][rollNumber]) {
       const studentData = mockData[classSelected][rollNumber];
       const marks = studentData.marks;
       const studentName = studentData.name;
   
       const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
       const maxMarks = Object.keys(marks).length * 50; // Assuming max marks per subject is 50
       const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);
   
       // Initialize jsPDF
       const { jsPDF } = window.jspdf;
       const doc = new jsPDF();
   
       // Add school details
       doc.setFontSize(16);
       doc.text("M. Muzaffar Husain Junior High School", 105, 20, { align: "center" });
       doc.setFontSize(12);
       doc.text("Address: Barwar Kheri", 105, 30, { align: "center" });
       doc.text("Manager: Mr. Rahat Abbas | Principal: Mr. Nijam", 105, 40, { align: "center" });
       doc.text("Half Yearly Result 2024-2025", 105, 50, { align: "center" });
   
       // Add table with student details and marks
       const resultData = [];
       for (const subject in marks) {
         resultData.push([subject, marks[subject]]);
       }
   
       // Add total marks and percentage row
       resultData.push(["Total Marks", `${totalMarks}/${maxMarks}`]);
       resultData.push(["Percentage", `${percentage}%`]);
   
       // Use autoTable for a well-structured table
       doc.autoTable({
         startY: 60,
         head: [["Subject", "Marks"]],
         body: resultData,
         styles: { halign: "center", valign: "middle" },
         theme: "grid", // Adds borders to the table
       });
   
       // Save the PDF
       doc.save(`${studentName}_Result.pdf`);
     } else {
       alert("No result found for the entered details!");
     }
   });
   