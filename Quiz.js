const quizForm = document.getElementById('quizForm');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const quizHeading = document.getElementById('quizHeading').value;
    const quizTopic = document.getElementById('quizTopic').value;
    const questions = [];
    for (let i = 1; i <= 5; i++) {
        const question = {
            question: quizForm.elements[`question${i}`].value,
            answer: quizForm.elements[`answer${i}`].value
        };
        questions.push(question);
    }

    // Optionally, you can do something with the data, like send it to a server or display it
    console.log('Quiz Heading:', quizHeading);
    console.log('Quiz Topic:', quizTopic);
    console.log('Questions:', questions);

    // Optionally, you can clear the form after submission
    quizForm.reset();

    alert('Quiz submitted successfully!');
});