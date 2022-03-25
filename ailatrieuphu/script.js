const questions = [
    {
        question:'Ai là đẹp trai nhất hôm nay ?',
        answer:[
            "Anh Như Anh",
            "Anh Đạt",
            "Anh Lê Sơn",
            "Anh Tín"
        ],
        correct: 0
    },
    {
        question:'Ai là người chơi game hay nhát hôm nay ?',
        answer:[
            "Anh Như Anh",
            "Anh Đạt",
            "Anh Lê Sơn",
            "Anh Tín"
        ],
        correct: 2
    },
    {
        question:'Ai là người học được nhiều nhất hôm nay ?',
        answer:[
            "Anh Như Anh",
            "Anh Đạt",
            "Anh Lê Sơn",
            "Anh Tín"
        ],
        correct: 3
    },
    {
        question:'Ai là người chơi game dở nhát hôm nay ?',
        answer:[
            "Anh Như Anh",
            "Anh Đạt",
            "Anh Lê Sơn",
            "Anh Tín"
        ],
        correct: 2
    },
    {
        question:'Ai là người đặt tên cho dòng sông ?',
        answer:[
            "Anh Như Anh",
            "Anh Đạt",
            "Anh Lê Sơn",
            "Anh Tín"
        ],
        correct: 1
    }
];




class Altp{
    constructor() {
        this.ui =new Ui();
        this.ui.showScreen('welcome');
        this.currentQuestion=0;
        this.currentAnswer = null;

        this.bgSound=new sound('bg.mp3');
        this.startSound=new sound('chuanbi.mp3');
        this.waitAnswerSound=new sound('wait.mp3');
        this.questionbgSound=new sound('timechoawser.mp3');

        this.ui.onStartBtnClick ( () =>{
            this.start();
        });

    }
    start(){
       this.ui.showScreen('questionScreen');
       this.startSound.start(()=>{
           this.questionbgSound.start()
       });
       this.ui.showQuestion(questions[this.currentQuestion]);
       this.ui.onClickAnswer((answer)=> {
         this.currentAnswer=answer;
          this.ui.setSelectedAnswer(answer);
         this.questionbgSound.stop()

         this.waitAnswerSound.start(()=>{
            this.checkAnswer();
         });
       })
      this.checkAnswer

    }

}
let game = new Altp();