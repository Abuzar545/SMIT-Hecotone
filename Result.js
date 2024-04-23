document.addEventListener("DOMContentLoaded", function () {
    // Retrieve student details from session storage
    const studentDetails = JSON.parse(sessionStorage.getItem('studentDetails'));
    const rollNumber = studentDetails.rollNumber;
    const name = studentDetails.name;
    const batch = studentDetails.batch;
    const section = studentDetails.section;

    // Display student details
    const studentInfo = document.createElement('div');
    studentInfo.innerHTML = `
        <p><strong>Roll Number:</strong> ${rollNumber}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Batch:</strong> ${batch}</p>
        <p><strong>Section:</strong> ${section}</p>
    `;
    document.getElementById('studentInfo').appendChild(studentInfo);

    // Retrieve quiz results from session storage
    const score = sessionStorage.getItem('score');

    // Display quiz results
    const quizResult = document.createElement('div');
    quizResult.innerHTML = `
        <h2 class="text-center text-primary">Quiz Result</h2>
        <hr>
        <p><strong>Total Score:</strong> 8/8</p>
    `;
    document.getElementById('quizResult').appendChild(quizResult);
});
