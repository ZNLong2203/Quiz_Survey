document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById("quiz");
    const resultContainer = document.getElementById("result");
    const submitButton = document.getElementById("submit");

    function buildQuiz() {
        questions.forEach((question, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `<p>${question.question}</p>`;
            
            if (question.type === "Chọn 1 trong 4 đáp án") {
                // Nhóm 2: Chọn 1 trong 4 đáp án
                const options = question.options.map((option, idx) => {
                    return `<input type="radio" id="q${index}_option${idx}" name="q${index}" value="${idx}">
                            <label for="q${index}_option${idx}">${option}</label><br>`;
                }).join("");
                questionDiv.innerHTML += options;
            } else if (question.type === "Chọn nhiều đáp án") {
                // Nhóm 3: Chọn nhiều đáp án
                const options = question.options.map((option, idx) => {
                    return `<input type="checkbox" id="q${index}_option${idx}" name="q${index}" value="${idx}">
                            <label for="q${index}_option${idx}">${option}</label><br>`;
                }).join("");
                questionDiv.innerHTML += options;
            } else if (question.type === "Trả lời tự luận") {
                // Nhóm 4: Trả lời tự luận
                const textarea = `<textarea id="q${index}_answer" rows="4" cols="50"></textarea>`;
                questionDiv.innerHTML += textarea;
            } else {
                // Nhóm 1: Lựa chọn đúng/sai
                questionDiv.innerHTML += `<input type="radio" id="q${index}_true" name="q${index}" value="true">
                                          <label for="q${index}_true">Đúng</label>
                                          <input type="radio" id="q${index}_false" name="q${index}" value="false">
                                          <label for="q${index}_false">Sai</label><br>`;
            }

            quizContainer.appendChild(questionDiv);
        });
    }

    function showResults() {
        let score = 0;
        questions.forEach((question, index) => {
            if (question.type === "Chọn 1 trong 4 đáp án") {
                const selectedAnswer = document.querySelector(`input[name=q${index}]:checked`);
                if (selectedAnswer !== null && parseInt(selectedAnswer.value) === question.answer) {
                    score++;
                }
            } else if (question.type === "Chọn nhiều đáp án") {
                const selectedAnswers = Array.from(document.querySelectorAll(`input[name=q${index}]:checked`)).map(input => parseInt(input.value));
                if (selectedAnswers.length === question.answer.length && selectedAnswers.every(answer => question.answer.includes(answer))) {
                    score++;
                }
            } else if (question.type === "Lựa chọn đúng/sai") {
                const selectedAnswer = document.querySelector(`input[name=q${index}]:checked`);
                if (selectedAnswer !== null && selectedAnswer.value === question.answer.toString()) {
                    score++;
                }
            }
        });
        resultContainer.innerHTML = `Score: ${score}/${questions.length}`;

        questions.forEach((question, index) => {
            let correctAnswer = '';

            // Nếu câu hỏi có đáp án kiểu "Chọn 1 trong 4 đáp án"
            if (question.type === "Chọn 1 trong 4 đáp án") {
                correctAnswer = question.options[question.answer];
            }
            // Nếu câu hỏi có đáp án kiểu "Chọn nhiều đáp án"
            else if (question.type === "Chọn nhiều đáp án") {
                correctAnswer = question.answer.map(idx => question.options[idx]).join(', ');
            }
            // Nếu câu hỏi có đáp án kiểu "Lựa chọn đúng/sai"
            else if (question.type === "Lựa chọn đúng/sai") {
                correctAnswer = question.answer ? 'Đúng' : 'Sai';
            }
            else {
                correctAnswer = "sẽ được chấm tự luận";
            }

            // Hiển thị đáp án
            const answerDiv = document.createElement("div");
            answerDiv.innerHTML = `<p>Câu ${index + 1}: Đáp án đúng là ${correctAnswer}</p>`;
            resultContainer.appendChild(answerDiv);
        });
    }

    buildQuiz();

    submitButton.addEventListener("click", showResults);
});
