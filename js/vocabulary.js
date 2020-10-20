
fetch('js/package.json')
    .then(data => {
        return data.text()
    }).then(data => {
    let words = JSON.parse(data)
    return words
    }).then(words => {

let countAnim = 1;
let rightAnswer = 0;
let notRightAnswer = 0;
let countQuestions = 0;

let wordsVocabulary = JSON.parse(localStorage.getItem('words'));

class newWord {
    constructor(word) {
        this.word = word;
        word = words[words.indexOf(words.find(item => item.word === this.word))].word;
    }
    render(x) {
        let newvoc = document.createElement(`newvoc-${this.word}`);
        let a = `<div id="delete-${this.word}" class="vocabulary_wrap">
                                    <div  class="actionsWord_wrap">
                                        <div class="vocabularyInEng">${this.word}</div>
                                         <div class="actions_cont">
                                            <audio id="audio-${this.word}" src="audio/${this.word}.mp3"></audio> 
                                            <i id='listen-${this.word}-js' onclick="(function () {
                                                let sound = document.getElementById('audio-${this.word}').play()
                                               }());" class="fas fa-volume-up listen-${this.word}-js"></i>  
                                            <i id='del-${this.word}-js-js' onclick="(function () {
                                                   let deleteWord = document.getElementById('delete-${this.word}');
                                                    deleteWord.style.display = 'none'
                                                    let getArray = JSON.parse(localStorage.getItem('words'))
                                                    let removed = getArray.splice(getArray.indexOf(this.word), 1);
                                                    let setArray = JSON.stringify(getArray);
                                                    localStorage.setItem('words', setArray);
                                                }());" class="fas fa-times-circle"></i>       
                                          </div> 
                                    </div>
                                    <div class="vocabularyInRus">${words[words.indexOf(words.find(item => item.word === this.word))].translation}</div>
                                    <div class="vocabularyInRus">${words[words.indexOf(words.find(item => item.word === this.word))].otherValues}</div>
                                </div>`;
        newvoc.innerHTML = a;
        document.getElementById(x).appendChild(newvoc);
    }
    wraper = document.querySelector('.wraper');
}
    let wraper = document.querySelector('.wraper')
    let sec1 = document.querySelector('.sec1_con')

    if(localStorage.length === 0 || wordsVocabulary.length === 0){
        wraper.innerHTML = `<div class="noWord">
                                <h1>Вы еще не добавили ни одного слова в словарь</h1>
                            </div>`

    } else {
        sec1.innerHTML = `<div class="sec1_con">
                            <div class="checkWordsBtn_wrap">
                                <div class="checkWordsBtn">Проверить знания</div>
                                <div class="mustBeTenWords"><h5>Для проверки слов, в словаре должно быть 10 слов<h5></div>
                            </div>`
    if(wordsVocabulary.indexOf(wordsVocabulary[0]) === -1){

    } else {
        let word = new newWord(wordsVocabulary[0])
        let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[1]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[1])
    let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[2]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[2])
    let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[3]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[3])
    let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[4]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[4])
    let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[5]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[5])
    let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[6]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[6])
    let b = word.render('wraper');
    }


    if(wordsVocabulary.indexOf(wordsVocabulary[7]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[7])
    let b = word.render('wraper');
    }


    if(wordsVocabulary.indexOf(wordsVocabulary[8]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[8])
    let b = word.render('wraper');
    }

    if(wordsVocabulary.indexOf(wordsVocabulary[9]) === -1){

    } else {
    let word = new newWord(wordsVocabulary[9])
    let b = word.render('wraper');
    }
    }

    // получаем массив случ. чисел

    function generateArrayRandomNumber (min, max) {
        let totalNumbers 		= max - min + 1,
            arrayTotalNumbers 	= [],
            arrayRandomNumbers 	= [],
            tempRandomNumber;

        while (totalNumbers--) {
            arrayTotalNumbers.push(totalNumbers + min);
        }

        while (arrayTotalNumbers.length) {
            tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
            arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
            arrayTotalNumbers.splice(tempRandomNumber, 1);
        }

        return arrayRandomNumbers;
        }


    let b = generateArrayRandomNumber(0, 9)

let modal = document.querySelector('.modal');
let btn = document.querySelector('.checkWordsBtn');

class report {
    constructor(rightAnswer, notRightAnswer) {
        this.rightAnswer = rightAnswer;
        this.notRightAnswer = notRightAnswer;
    }
    render(x) {

        let a = `<i class="fas fa-times-circle"></i>
                                <div class="noWord_wrap">
                                    <div class="noWord_txt">правильных ответов: ${this.rightAnswer}</div>
                                    <div class="noWord_txt">количество ошибок: ${this.notRightAnswer}</div>
                                    <div class="noWord_txt">процент правильных ответов: ${this.rightAnswer * 10}%</div> 
                                </div>`



        document.getElementById(x).innerHTML = a;

        i = -1;
        countAnim = 1;
        rightAnswer = 0;
        notRightAnswer = 0;
        countQuestions = 0;

        let closeWin = document.querySelector('.modal-content i')
        closeWin.addEventListener('click', function (){
            modal.style.display = "none";

            i = -1;
            countAnim = 1;
            rightAnswer = 0;
            notRightAnswer = 0;
            countQuestions = 0;

        })
    }


}

    let i = -1;

class createTask {
    constructor() {

    }

    render(x) {
        i++
        const random = b[i]

        if(random >= 0 && random <= 4){
        let a = `<i class="fas fa-times-circle"></i>
                                <div class="test_wrap">
                                    <div class="test_word_end">переведите слово на английский:</div> 
                                        <div class="theWord">${words.find(item => item.word === wordsVocabulary[random]).translation}</div>
                                        <div class="theTask"><input type="text"></div>
                                <div class="checkBtn_wrap">
                                    <div class="checkBtn">Проверить</div>
                                </div>
                               </div>`

        document.getElementById(x).innerHTML = a;

        document.querySelector('.checkBtn').addEventListener('click', function () {

                let theVal = document.querySelector('.theTask input').value
                let LowerCase = theVal.toLowerCase()
                if (LowerCase === wordsVocabulary[random]) {

                    let task = new createTask()
                    let b = task.render('modal');
                    rightAnswer++
                    countAnim++
                    countQuestions++
                    let lineProgres = document.querySelector(`.progressPart${countAnim}`)
                    lineProgres.style.display = "block";
                    let closeWin = document.querySelector('.modal-content i')
                    closeWin.addEventListener('click', function (){
                        modal.style.display = "none";
                    })
                } else {
                    let task = new createTask()
                    let b = task.render('modal');
                    countQuestions++
                    notRightAnswer++
                    countAnim++
                    let lineProgres = document.querySelector(`.progressPart${countAnim}`)
                    lineProgres.style.display = "block";
                    lineProgres.style.background = "darkred";
                }
                if (countQuestions === 10) {

                    let theReport = new report(rightAnswer, notRightAnswer)
                    let b = theReport.render('modal')
                }

            let closeWin = document.querySelector('.modal-content i')
            closeWin.addEventListener('click', function (){
                modal.style.display = "none";
            })
            }
        )
    } else {
            let a = `<i class="fas fa-times-circle"></i>
                                <div class="test_wrap">
                                    <div class="test_word_end">переведите слово на русский:</div> 
                                        <div class="theWord">${wordsVocabulary[random]}</div>
                                        <div class="theTask"><input type="text"></div>
                                <div class="checkBtn_wrap">
                                    <div class="checkBtn">Проверить</div>
                                </div>
                               </div>`

            document.getElementById(x).innerHTML = a;

            document.querySelector('.checkBtn').addEventListener('click', function () {




                    let theVal = document.querySelector('.theTask input').value
                    let LowerCase = theVal.toLowerCase()
                    let otherValues = words[words.indexOf(words.find(item => item.word === wordsVocabulary[random]))].otherValues;
                    let str = otherValues;
                    let arrOtherValues = str.split(',');
                    if (LowerCase === words[words.indexOf(words.find(item => item.word === wordsVocabulary[random]))].translation || arrOtherValues.indexOf(LowerCase) !== -1) {

                        let task = new createTask()
                        let b = task.render('modal');
                        rightAnswer++
                        countAnim++
                        countQuestions++
                        let lineProgres = document.querySelector(`.progressPart${countAnim}`)
                        lineProgres.style.display = "block";

                    } else {

                        let task = new createTask()
                        let b = task.render('modal');
                        countQuestions++
                        countAnim++
                        notRightAnswer++
                        let lineProgres = document.querySelector(`.progressPart${countAnim}`)
                        lineProgres.style.display = "block";
                        lineProgres.style.background = "darkred";
                    }
                    if (countQuestions === 10) {
                        let theReport = new report(rightAnswer, notRightAnswer)
                        let b = theReport.render('modal')
                    }
                }
            )
        }
        let closeWin = document.querySelector('.modal-content i')
        closeWin.addEventListener('click', function (){
            modal.style.display = "none";
        })
}

}


btn.addEventListener('click', function () {

    let wordsVocabulary = JSON.parse(localStorage.getItem('words'));

    if(wordsVocabulary.length < 10) {
        modal.style.display = "block";
        modal.innerHTML = `<div id="modal" class="modal-content">
                                <div class="noWord_wrap">
                                    <div class="noWord_txt">Для проверки слов, в словаре должно быть 10 слов</div>
                                <div class="noWord_checkBtn_wrap">   
                                    <div class="noWord_checkBtn">ОК</div>
                                </div>    
                                </div>
                            </div>`

        document.querySelector('.noWord_checkBtn').addEventListener('click', function (){
            modal.style.display = "none"
        })

    } else {
        i++
        const random = b[i]

    modal.style.display = "flex";
    modal.innerHTML = `<div class="lineProgress">
                            <div class="progressPart1"></div>
                            <div class="progressPart2"></div>
                            <div class="progressPart3"></div>
                            <div class="progressPart4"></div>
                            <div class="progressPart5"></div>
                            <div class="progressPart6"></div>
                            <div class="progressPart7"></div>
                            <div class="progressPart8"></div>
                            <div class="progressPart9"></div>
                            <div class="progressPart10"></div>
                        </div>
                        
                        <div id="modal" class="modal-content"> 
                                <i class="fas fa-times-circle"></i>
                                <div class="test_wrap">
                                    <div class="test_word_end">переведите слово на русский:</div> 
                                        <div class="theWord">${wordsVocabulary[random]}</div>
                                        <div class="theTask"><input type="text"></div>
                                <div class="checkBtn_wrap">
                                    <div class="checkBtn">Проверить</div>
                                </div>
                               </div>     
                        </div>
                    </div>`

    document.querySelector('.checkBtn').addEventListener('click', checkTask);

    function checkTask () {

    let inputVal = document.querySelector('.theTask input').value
        let LowerCase = inputVal.toLowerCase();
        let otherValues = words[words.indexOf(words.find(item => item.word === wordsVocabulary[random]))].otherValues;
        let str = otherValues;
        let arrOtherValues = str.split(',');
        if(LowerCase === words[words.indexOf(words.find(item => item.word === wordsVocabulary[random]))].translation || arrOtherValues.indexOf(LowerCase) !== -1){

            let newRandom = new createTask ();
            let task = new createTask(newRandom)
            let b = task.render('modal');
            rightAnswer++
            countQuestions++
            let lineProgres =  document.querySelector('.progressPart1')
            lineProgres.style.display = "block";
        } else {
            let newRandom = new createTask ();
            let task = new createTask(newRandom)
            let b = task.render('modal');
            countQuestions++
            notRightAnswer++
            let lineProgres =  document.querySelector('.progressPart1')
            lineProgres.style.display = "block";
            lineProgres.style.background = "darkred"
        }
    }

    let closeWin = document.querySelector('.modal-content i')
    closeWin.addEventListener('click', function (){
        modal.style.display = "none";
    })

}})
})







