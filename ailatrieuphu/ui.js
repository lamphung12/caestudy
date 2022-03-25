class Ui {
    constructor() {
    }

    showScreen(screenName) {
        let screens = document.querySelectorAll('#wrap >div');
        screens.forEach((screen) => {
            screen.style.display = 'none'
        });


        let currenScreen = document.getElementById(screenName);
        currenScreen.style.display = 'block';
    }

    onStartBtnClick(callback) {
        let startBtn = document.getElementById("startBtn")
        startBtn.addEventListener("click", callback);
    }

    showQuestion(question) {
        document.getElementById("question").innerHTML = question.question;
        document.getElementById("answer_1").innerHTML = question.answer[0];
        document.getElementById("answer_2").innerHTML = question.answer[1];
        document.getElementById("answer_3").innerHTML = question.answer[2];
        document.getElementById("answer_4").innerHTML = question.answer[3];

    }
    onClickAnswer(callback){
        document.getElementById("answer_1").addEventListener('click',()=>callback(0));
        document.getElementById("answer_2").addEventListener('click',()=>callback(1));
        document.getElementById("answer_3").addEventListener('click',()=>callback(2));
        document.getElementById("answer_4").addEventListener('click',()=>callback(3));

    }
    setSelectedAnswer(answer){
        let answerIndex = answer +1;
        let answerDiv=document.getElementById('answer_' + answerIndex);

        answerDiv.style.backgroundColor='green'
        answerDiv.style.color='white'


    }
}