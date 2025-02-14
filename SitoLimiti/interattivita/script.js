// Definizione di un array con 30 domande e risposte relative ai limiti
const allQuestions = [
    { question: "Limite di (1/x) quando x tende a infinito", answer: "0" },
    { question: "Limite di (x^2 - 1) / (x - 1) quando x tende a 1", answer: "2" },
    { question: "Limite di (sin(x)) / x quando x tende a 0", answer: "1" },
    { question: "Limite di (e^x - 1) / x quando x tende a 0", answer: "1" },
    { question: "Limite di (x^2 + 3x - 4) / (x - 1) quando x tende a 1", answer: "5" },
    { question: "Limite di (ln(x)) / x quando x tende a 0 da destra", answer: "infinito" },
    { question: "Limite di (x^3 - 1) / (x - 1) quando x tende a 1", answer: "3" },
    { question: "Limite di (x - sin(x)) / x^3 quando x tende a 0", answer: "1/6" },
    { question: "Limite di (1 - cos(x)) / x^2 quando x tende a 0", answer: "1/2" },
    { question: "Limite di (tan(x)) / x quando x tende a 0", answer: "1" },
    { question: "Limite di (x^3 - 2x + 1) / (x - 1) quando x tende a 1", answer: "3" },
    { question: "Limite di (x^2 + 2x + 1) / (x + 1) quando x tende a -1", answer: "4" },
    { question: "Limite di (ln(x+1)) / x quando x tende a 0", answer: "1" },
    { question: "Limite di (sin(x) - x) / x^3 quando x tende a 0", answer: "0" },
    { question: "Limite di (cos(x) - 1) / x^2 quando x tende a 0", answer: "-1/2" },
    { question: "Limite di (x^4 - 1) / (x^2 - 1) quando x tende a 1", answer: "2" },
    { question: "Limite di (x^2 - 4) / (x - 2) quando x tende a 2", answer: "4" },
    { question: "Limite di (e^x - e^(-x)) / x quando x tende a 0", answer: "2" },
    { question: "Limite di (x^5 - 1) / (x - 1) quando x tende a 1", answer: "5" },
    { question: "Limite di (x^2 - x - 2) / (x - 2) quando x tende a 2", answer: "3" },
    { question: "Limite di (sqrt(x) - 2) / (x - 4) quando x tende a 4", answer: "1/4" },
    { question: "Limite di (x - 1) / (x^2 + 3x - 4) quando x tende a 1", answer: "1/8" },
    { question: "Limite di (x^2 - 3x + 2) / (x^2 - 1) quando x tende a 1", answer: "0" },
    { question: "Limite di (x - cos(x)) / x^3 quando x tende a 0", answer: "1/6" },
    { question: "Limite di (x^3 - x) / (x - 1) quando x tende a 1", answer: "3" },
    { question: "Limite di (e^x - 1) / (x^2) quando x tende a 0", answer: "1" },
    { question: "Limite di (ln(x)) / (x - 1) quando x tende a 1", answer: "-infinito" },
    { question: "Limite di (x^2 + 1) / (x - 1) quando x tende a 1", answer: "infinito" },
    { question: "Limite di (x - e^x) / x^2 quando x tende a 0", answer: "-1/2" },
    { question: "Limite di (sin(2x) - sin(x)) / x quando x tende a 0", answer: "0" },
    { question: "Limite di (x^3 - x^2) / (x^2 - 1) quando x tende a 1", answer: "2" },
    { question: "Limite di (x^2 - 4x + 3) / (x - 1) quando x tende a 1", answer: "2" }
];

// Funzione che restituisce un array di domande selezionate casualmente
function getRandomQuestions(allQuestions, numQuestions) {
    // Mescola casualmente l'array delle domande
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    // Restituisce le prime 'numQuestions' domande
    return shuffled.slice(0, numQuestions);
}

// Seleziona 10 domande casuali
const questions = getRandomQuestions(allQuestions, 10);

// Variabili per gestire il punteggio e le risposte dell'utente
let currentQuestionIndex = 0;  // Indice della domanda attuale
let score = 0;  // Punteggio dell'utente
let userAnswers = [];  // Array per salvare le risposte dell'utente

// Funzione per visualizzare la prossima domanda
function showNextQuestion() {
    // Se ci sono ancora domande da visualizzare
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];  // Ottiene l'oggetto della domanda corrente
        document.getElementById("quizQuestion").innerText = questionObj.question;  // Mostra la domanda
        document.getElementById("quizAnswer").value = '';  // Pulisce il campo della risposta
    } else {
        showResults();  // Se tutte le domande sono state fatte, mostra i risultati
    }
}

// Funzione per inviare la risposta dell'utente
function submitAnswer() {
    const userAnswer = document.getElementById("quizAnswer").value.trim();  // Ottiene la risposta dell'utente
    const correctAnswer = questions[currentQuestionIndex].answer;  // Risposta corretta

    // Aggiunge il risultato dell'utente alla lista delle risposte
    userAnswers.push({
        question: questions[currentQuestionIndex].question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: userAnswer.toLowerCase() === correctAnswer.toLowerCase()  // Verifica se la risposta è corretta
    });

    // Se la risposta è corretta, incrementa il punteggio
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }

    currentQuestionIndex++;  // Passa alla domanda successiva
    showNextQuestion();  // Mostra la prossima domanda
}

// Funzione per visualizzare i risultati finali
function showResults() {
    document.getElementById("quiz").style.display = 'none';  // Nasconde il quiz
    document.getElementById("results").style.display = 'block';  // Mostra la sezione dei risultati
    document.getElementById("finalScore").innerText = `Hai risposto correttamente a ${score} su ${questions.length} domande.`;  // Mostra il punteggio finale

    const resultsList = document.getElementById("detailedResults");
    resultsList.innerHTML = '';  // Pulisce la lista dei risultati

    // Mostra i dettagli di ogni risposta
    userAnswers.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <p><strong>Domanda ${index + 1}:</strong> ${result.question}</p>
            <p><strong>Risposta dell'utente:</strong> ${result.userAnswer}</p>
            <p><strong>Risposta corretta:</strong> ${result.correctAnswer}</p>
            <p><strong>Esito:</strong> ${result.isCorrect ? 'Corretta' : 'Sbagliata'}</p>
            <hr>
        `;
        resultsList.appendChild(resultItem);  // Aggiunge il risultato alla lista
    });
}

// Avvia la visualizzazione della prima domanda
showNextQuestion();