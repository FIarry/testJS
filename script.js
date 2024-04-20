let questions = [
    {
        question: "Какой язык программирвоания вы изучаете",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Что такое HTML",
        options: ["Язык Разметки", "Язык Программирования", "База данных", "Видеоредактор"],
        correctAnswer: "Язык Разметки"
    },
    {
        question: "Что такое CSS",
        options: ["Таблицы Стилей", "Язык Программирования", "База данных", "Библиотека"],
        correctAnswer: "Таблицы Стилей"
    },
]

let curQuestion = 0
let corAnswers = 0

let readyBtn = document.getElementById('ready')
let inputName = document.getElementById('inputName')
let username = 'N/A'

function displayQuestion() {
    let questionEl = document.getElementById('question')
    questionEl.textContent = `Вопрос ${curQuestion + 1}: ${questions[curQuestion].question}`
    let optionsEl = document.getElementById('options')
    optionsEl.innerHTML = ""
    let optionsArray = questions[curQuestion].options

    optionsArray.forEach((option) => {
        let button = document.createElement('button')
        optionsEl.append(button)
        button.textContent = option
    })

    optionsEl.addEventListener('click', (e) => {
        let target = e.target
        nextQuestion(target.textContent)
    }, { once: true })
}

function nextQuestion(answer) {
    if (answer === questions[curQuestion].correctAnswer) {
        corAnswers++
    }
    curQuestion++
    if (curQuestion == questions.length) {
        displayResult()
    } else {
        displayQuestion()
    }
}



function displayResult() {
    let questionEl = document.getElementById('question')
    let optionsEl = document.getElementById('options')
    let resultEl = document.getElementById('result')
    questionEl.style.display = 'none'
    optionsEl.style.display = 'none'
    let grade = 2
    let calc = (corAnswers / questions.length) * 100
    calc = (calc + 0.5) - (calc + 0.5) % 1
    if (calc > 30 && calc < 50) {
        grade = 3
    } else if (calc > 50 && calc < 80) {
        grade = 4
    } else if (calc > 80) {
        grade = 5
    }
    resultEl.textContent = `Правильных Ответов ${corAnswers} из ${questions.length} (${calc}%), ${username}, Ваша оценка ${grade}`
}

readyBtn.addEventListener('click', (e) => {
    username = inputName.value
    inputName.style.display = 'none'
    readyBtn.style.display = 'none'
    displayQuestion()
})