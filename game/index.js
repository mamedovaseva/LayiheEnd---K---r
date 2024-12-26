const questions = [
    {"question": "Azərbaycanın paytaxtı hansıdır?", "answer": "Bakı", "hint": "Xəzər dənizinin sahilindədir."},
    {"question": "Gəncə hansı bölgədə yerləşir?", "answer": "Qərb", "hint": "Azərbaycanın ikinci ən böyük şəhəri."},
    {"question": "Naxçıvan hansı dövlətlə sərhəddir?", "answer": "Türkiyə", "hint": "Bölgə, Azərbaycanla əlaqəsizdir."},
    {"question": "Quba hansı bölgədə yerləşir?", "answer": "Şimal", "hint": "Dənizdən uzaqdır və məşhur meyvə bağları ilə tanınır."},
    {"question": "Şəki şəhəri hansı bölgədə yerləşir?", "answer": "Şimal-Qərb", "hint": "Tarixi yerləri ilə məşhurdur."},
    {"question": "Azərbaycanın ən böyük gölü hansıdır?", "answer": "Sarısu gölü", "hint": "Bu göl Azərbaycanın cənubunda yerləşir."},
    {"question": "Azərbaycanın ən böyük şəhəri hansıdır?", "answer": "Bakı", "hint": "Paytaxt şəhəridir və Xəzər dənizi sahilində yerləşir."},
    {"question": "Azərbaycanın ən qədim şəhəri hansıdır?", "answer": "Şuşa", "hint": "Şəhər Qarabağda yerləşir."},
    {"question": "Qazaxıstanla sərhəd hansı bölgədən keçir?", "answer": "Şərq", "hint": "Bu sərhəd Azərbaycanın ən böyük sərhədidir."},
    {"question": "Azərbaycanın ən yüksək dağı hansıdır?", "answer": "Bazardüzü", "hint": "Bu dağ Quba rayonunda yerləşir."},
    {"question": "Azərbaycanın hansı bölgəsində çoxlu gavalı bağları vardır?", "answer": "Gəncə", "hint": "Qərb bölgəsində yerləşir."},
    {"question": "Bakıdakı ən böyük universitet hansıdır?", "answer": "Bakı Dövlət Universiteti", "hint": "Paytaxtda yerləşir."},
    {"question": "Azərbaycanın dəniz limanı hansı şəhərdə yerləşir?", "answer": "Bakı", "hint": "Bu şəhər həm də ölkənin paytaxtıdır."},
    {"question": "Azərbaycanın hansı şəhərində Gobustan qaya şəkilləri yerləşir?", "answer": "Bakı", "hint": "Bu yer UNESCO-nun Dünya Mədəni İrsi siyahısındadır."},
    {"question": "Azərbaycanın şərqində hansı şəhər yerləşir?", "answer": "Lənkəran", "hint": "Cənub bölgəsində yerləşir."},
    {"question": "Azərbaycanın ən böyük çayı hansıdır?", "answer": "Kür", "hint": "Bu çay ölkənin ən uzun çayıdır."},
    {"question": "Azərbaycanın şimalında hansı məşhur dağ vardır?", "answer": "Şahdağ", "hint": "Quba rayonunun yaxınlığında yerləşir."},
    {"question": "Azərbaycanın hansı bölgəsində Kəlbəcər rayonunun əraziləri yerləşir?", "answer": "Qərb", "hint": "Kəlbəcər rayonunun qərb sərhədidir."},
    {"question": "Azərbaycanın hansı şəhərində Nizami muzeyi yerləşir?", "answer": "Gəncə", "hint": "Bu şəhər Nizami Gəncəvinin doğum yeridir."},
    {"question": "Azərbaycanın hansı bölgəsində Quba meyvə bağları mövcuddurdur?", "answer": "Şimal", "hint": "Quba, meyvə bağları ilə məşhurdur."},
    {"question": "Naxçıvan Muxtar Respublikası hansı dövlətlə sərhəddir?", "answer": "Ermənistan", "hint": "Bu bölgə Azərbaycanın ayrı bir hissəsidir."},
    {"question": "Azərbaycanın hansı şəhərində Xınalıq kəndi yerləşir?", "answer": "Şimal", "hint": "Azərbaycanın ən yüksək dağ kəndidir."},
    {"question": "Azərbaycanın hansı şəhərində Dədə Qorqudun məzarı yerləşir?", "answer": "Şəki", "hint": "Dədə Qorqud Azərbaycan folklorunun simvoludur."},
    {"question": "Azərbaycanın cənubunda yerləşən şəhər hansıdır?", "answer": "Lənkəran", "hint": "Bu şəhər Xəzər dənizinin sahilindədir."},
    {"question": "Azərbaycanın şimal-qərb bölgəsində hansı dağlar yerləşir?", "answer": "Qarabağ dağları", "hint": "Bu dağlar dağlıq ərazilərdən ibarətdir."},
    {"question": "Bakı şəhərində hansı tarixi məkan mövcuddur?", "answer": "İçəri Şəhər", "hint": "Bakı şəhərinin ən qədim hissəsidir."},
    {"question": "Azərbaycanın hansı bölgəsində məşhur Çırağan sarayı yerləşir?", "answer": "Bakı", "hint": "Bu saray Xəzər dənizinin sahilində yerləşir."},
    {"question": "Azərbaycanın hansı bölgəsində Xocalı şəhəri yerləşir?", "answer": "Qarabağ", "hint": "Bu şəhər tarixi hadisələrlə əlaqəlidir."}
];
let currentQuestionIndex = 0;
let currentQuestions = [];
let correctAnswers = 0;
let wrongAnswers = 0;
let wrongQuestions = [];
function getRandomQuestions() {
    let selectedQuestions = [];
    while (selectedQuestions.length < 5) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        if (!selectedQuestions.includes(question)) {
            selectedQuestions.push(question);
        }
    }
    return selectedQuestions;
}
function displayQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('hint').textContent = currentQuestion.hint;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = "Təbriklər! Doğru cavab!";
        correctAnswers++;
    } else {
        document.getElementById('result').textContent = "Yanlış cavab. Yenidən cəhd edin!";
        wrongAnswers++;
        wrongQuestions.push({
            question: currentQuestions[currentQuestionIndex].question,
            correctAnswer: correctAnswer,
            userAnswer: userAnswer
        });
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuestions.length) {
        document.getElementById('result').textContent = 
            `Oyun bitdi! Düzgün cavablar: ${correctAnswers}, Səhv cavablar: ${wrongAnswers}`;
        if (wrongAnswers > 0) {
            showWrongAnswers();
        }
        document.getElementById('restart-button').style.display = 'block'; 
    } else {
        displayQuestion();
    }
}
function showWrongAnswers() {
    let wrongAnswersText = "<h3>Səhv cavablar:</h3>";
    wrongQuestions.forEach(item => {
        wrongAnswersText += `<p><strong>Sual:</strong> ${item.question} <br><strong>Doğru cavab:</strong> ${item.correctAnswer} <br><strong>Sizin cavabınız:</strong> ${item.userAnswer}</p>`;
    });
    document.getElementById('result').innerHTML += wrongAnswersText;
}
function restartGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    wrongQuestions = [];
    currentQuestions = getRandomQuestions(); 
    document.getElementById('restart-button').style.display = 'none';  
    displayQuestion();
}
document.getElementById('check-answer-btn').addEventListener('click', checkAnswer);
document.getElementById('restart-button').addEventListener('click', restartGame);
window.onload = function () {
    currentQuestions = getRandomQuestions();
    displayQuestion();
};
