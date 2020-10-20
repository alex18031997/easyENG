
let words;

fetch('js/package.json')
    .then(data => {
        return data.text()
    }).then(data => {
    words = JSON.parse(data);
})


class TheTranslation {
    constructor(word, marginTop, marginLeft) {
        this.word = word;
        this.marginTop = marginTop;
        this.marginLeft = marginLeft;
    }
    render(x) {
let checkIcon = 'plus';
if(localStorage.length > 0){
let getLocStr = JSON.parse(localStorage.getItem('words'));
    if(getLocStr.indexOf(this.word) === -1){
        checkIcon = 'plus';
    } else {
        checkIcon = 'times-circle';
    }
}
    document.querySelector('video').pause()
let a =  `<div class="wrap-hint">
             <div class="inEnglish">${words[words.indexOf(words.find(item => item.word === this.word))].word}
                <div class="add_wrap">
                  <i id='listen-${this.word}-js' class="fas fa-volume-up"></i>
                  <i id='add-${this.word}-js'  class="fas fa-${checkIcon} deleteWord-${this.word}-js" ></i>
               </div>
               </div>
               <div class="inRussian">${words[words.indexOf(words.find(item => item.word === this.word))].translation}</div>
               <div class="otherValues">Другие значения:<br>${words[words.indexOf(words.find(item => item.word === this.word))].otherValues}</div>
             </div>`
        document.getElementById(x).innerHTML = a;
        let sound = document.getElementById(`listen-${this.word}-js`);
        let word = this.word;

        sound.addEventListener('click', function (){

            sound.innerHTML = `<audio src="audio/${word}.mp3" autoplay></audio>`
        });
        let add = document.getElementById(`add-${this.word}-js`);
        let deleteWord = document.querySelector(`.deleteWord-${this.word}-js`)

        add.addEventListener("click",  () => {
                if (localStorage.length === 0) {
                    let array = [];
                    array.push(word)
                    let ArrayJSON = JSON.stringify(array);
                    localStorage.setItem(`words`, `${ArrayJSON}`)
                } else {
                    let getArray = JSON.parse(localStorage.getItem('words'))
                    if (getArray.indexOf(word) === -1) {
                        getArray.push(word)
                        let setArray = JSON.stringify(getArray);
                        localStorage.setItem(`words`, `${setArray}`)
                    }
                }
            let word1 = new TheTranslation (word)
            let b = word1.render('theTranslation');
        });

            if(checkIcon === 'plus'){
               
            } else {
                deleteWord.addEventListener('click', function (){
                    let getArray = JSON.parse(localStorage.getItem('words'))
                    let removed = getArray.splice(getArray.indexOf(word), 1);
                    let setArray = JSON.stringify(getArray);
                    localStorage.setItem(`words`, `${setArray}`)

                    let word1 = new TheTranslation (word)
                    let b = word1.render('theTranslation');
                })
        }

        let theTranslation = document.querySelector('.translation_box');

        theTranslation.style.padding = '5px 5px 0px 10px';
        theTranslation.style.marginTop = `${this.marginTop}`;
        theTranslation.style.marginLeft = `${this.marginLeft}`;

    }
}

let subtitles = document.querySelector('.translation');

let getTime = () => {
    let videoTime = document.querySelector("video").currentTime;
    if(videoTime >= 5.08 && videoTime <= 7.56){
        subtitles.innerHTML = `<p4 id="I">I</p4>
                               <p4 id="was">was</p4>
                               <p4 id="on">on</p4>
                               <p4 id="the">the</p4>
                               <p4 id="phone">phone</p4>
                               <p4 id="for">for</p4>
                               <p4 id="an">an</p4>
                               <p4 id="hour">hour</p4>`;
        subtitles.style.padding = '0px 5px 0px 5px';
        // подсказка для слова I
        document.getElementById('I').addEventListener("mouseover",() => {
            let word = new TheTranslation ('i', '-333px', '-185px')
            let b = word.render('theTranslation');

        });
        // подсказка для слова was
        document.getElementById('was').addEventListener("mouseover", () => {
            let word = new TheTranslation ('was', '-332px', '-160px')
            let b = word.render('theTranslation');
        });
        // подсказка для слова on
        document.getElementById('on').addEventListener("mouseover", () => {
            let word = new TheTranslation ('on', '-299px', '-95px')
            let b = word.render('theTranslation');
        });
        // подсказка для слова the
        document.getElementById('the').addEventListener("mouseover", () => {
            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';
        });
        // подсказка для слова phone
        document.getElementById('phone').addEventListener("mouseover", () => {

            let word = new TheTranslation ('phone', '-315px', '-5px')
            let b = word.render('theTranslation');

            });

        // подсказка для слова for

        document.getElementById('for').addEventListener("mouseover", () => {

            let word = new TheTranslation ('for', '-315px', '60px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова an

        document.getElementById('an').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';


        });


        // подсказка для слова hour

        document.getElementById('hour').addEventListener("mouseover", () => {

            let word = new TheTranslation ('hour', '-317px', '185px')
            let b = word.render('theTranslation');

        }
    );
    } else if(videoTime >= 8.28 && videoTime <= 10.4){

        subtitles.innerHTML = `<p4 id="who">Who</p4>
                               <p4 id="were">were</p4>
                               <p4 id="you">you</p4>
                               <p4 id="talking">talking</p4>
                               <p4 id="to">to</p4>
                               <p4 id="for">for</p4>
                               <p4 id="an">an</p4>
                               <p4 id="hour">hour?</p4>`;
        subtitles.style.padding = '0px 5px 0px 5px';


        // подсказка для слова who

        document.getElementById('who').addEventListener("mouseover", () => {
                let word = new TheTranslation ('who', '-317px', '-200px')
                let b = word.render('theTranslation');
            });

        // подсказка для слова were

        document.getElementById('were').addEventListener("mouseover", () => {
            let word = new TheTranslation ('were', '-300px', '-150px')
            let b = word.render('theTranslation');
        });


        // подсказка для слова you

        document.getElementById('you').addEventListener("mouseover", () => {
            let word = new TheTranslation ('you', '-299px', '-80px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова talking

        document.getElementById('talking').addEventListener("mouseover", () => {
            let word = new TheTranslation ('talk', '-317px', '-20px')
            let b = word.render('theTranslation');
        });


        // подсказка для слова to

        document.getElementById('to').addEventListener("mouseover", () => {
            let word = new TheTranslation ('to', '-300px', '60px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова for

        document.getElementById('for').addEventListener("mouseover", () => {
            let word = new TheTranslation ('for', '-317px', '79px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова an

        document.getElementById('an').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';


        });

        // подсказка для слова hour

        document.getElementById('hour').addEventListener("mouseover", () => {
            let word = new TheTranslation ('hour', '-315px', '190px')
            let b = word.render('theTranslation');
        });

    } else if(videoTime >= 11.037263 && videoTime <= 13.596554) {

        subtitles.innerHTML = `<p4 id="sam">Sam,</p4>
                               <p4 id="an">an</p4>
                               <p4 id="old">old</p4>
                               <p4 id="friend">friend</p4>
                               <p4 id="from">from</p4>
                               <p4 id="college">college</p4>`;
        subtitles.style.padding = '0px 5px 0px 5px';

        // подсказка для слова sam

        document.getElementById('sam').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';

        });


        // подсказка для слова an

        document.getElementById('an').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';

        });



        // подсказка для слова old

        document.getElementById('old').addEventListener("mouseover", () => {

            let word = new TheTranslation ('old', '-315px', '-80px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова friend

        document.getElementById('friend').addEventListener("mouseover", () => {

            let word = new TheTranslation ('friend', '-332px', '-3px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова from

        document.getElementById('from').addEventListener("mouseover", () => {

            let word = new TheTranslation ('from', '-300px', '60px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова college

        document.getElementById('college').addEventListener("mouseover", () => {

            let word = new TheTranslation ('college', '-332px', '150px')
            let b = word.render('theTranslation');

        });

    } else if(videoTime >= 13.837727 && videoTime <= 15.836909) {

        subtitles.innerHTML = `<p4 id="when">When,</p4>
                               <p4 id="is">is</p4>
                               <p4 id="the">the</p4>
                               <p4 id="last">last</p4>
                               <p4 id="time">time</p4>
                               <p4 id="talk">talked</p4>
                               <p4 id="to">to</p4>
                               <p4 id="him">him?</p4>`;

        subtitles.style.padding = '0px 5px 0px 5px';

        // подсказка для слова when

        document.getElementById('when').addEventListener("mouseover", () => {

            let word = new TheTranslation ('when', '-315px', '-200px')
            let b = word.render('theTranslation');

        });


    // подсказка для слова is

    document.getElementById('is').addEventListener("mouseover", () => {

        theTranslation.innerHTML = '';
        theTranslation.style.padding = '';

    });

        // подсказка для слова the

        document.getElementById('the').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';

        });

        // подсказка для слова last

        document.getElementById('last').addEventListener("mouseover", () => {

            let word = new TheTranslation ('last', '-315px', '-20px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова time

        document.getElementById('time').addEventListener("mouseover", () => {

            let word = new TheTranslation ('time', '-315px', '45px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова talked

        document.getElementById('talk').addEventListener("mouseover", () => {

            let word = new TheTranslation ('talk', '-315px', '45px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова to

        document.getElementById('to').addEventListener("mouseover", () => {

            let word = new TheTranslation ('to', '-300px', '135px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова him

        document.getElementById('him').addEventListener("mouseover", () => {

            let word = new TheTranslation ('him', '-299px', '200px')
            let b = word.render('theTranslation');

        });

} else if(videoTime >= 16.403356 && videoTime <= 17.933358) {

        subtitles.innerHTML = `<p4 id="at">At</p4>
                               <p4 id="college">college</p4>
                               <p4 id="graduation">graduation</p4>`;

        subtitles.style.padding = '0px 5px 0px 5px';

        // подсказка для слова at

        document.getElementById('at').addEventListener("mouseover", () => {

            let word = new TheTranslation ('at', '-299px', '-120px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова college

        document.getElementById('college').addEventListener("mouseover", () => {

            let word = new TheTranslation ('college', '-333px', '-55px')
            let b = word.render('theTranslation');

        });

        // подсказка для слова graduation

        document.getElementById('graduation').addEventListener("mouseover", () => {

            let word = new TheTranslation ('graduation', '-354px', '90px')
            let b = word.render('theTranslation');
        });
    } else if(videoTime >= 18.566369 && videoTime <= 20.837734) {

        subtitles.innerHTML = `<p4 id="wow">Wow!</p4>
                               <p4 id="that">That</p4>
                               <p4 id="was">was</p4>
                               <p4 id="30">30</p4>
                               <p4 id="years">years</p4>
                               <p4 id="ago">ago</p4>`;
        subtitles.style.padding = '0px 5px 0px 5px';

        // подсказка для wow

        document.getElementById('wow').addEventListener("mouseover", () => {

            let word = new TheTranslation ('wow', '-315px', '-140px')
            let b = word.render('theTranslation');

        });

        // подсказка для that

        document.getElementById('that').addEventListener("mouseover", () => {

            let word = new TheTranslation ('that', '-297px', '-65px')
            let b = word.render('theTranslation');

        });

        // подсказка для was

        document.getElementById('was').addEventListener("mouseover", () => {
            let word = new TheTranslation ('was', '-332px', '-15px')
            let b = word.render('theTranslation');
        });

        // подсказда для 30

        document.getElementById('30').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';


        });

        // подсказка для years

        document.getElementById('years').addEventListener("mouseover", () => {
            let word = new TheTranslation ('years', '-297px', '75px')
            let b = word.render('theTranslation');
        });

        // подсказка для ago

        document.getElementById('ago').addEventListener("mouseover", () => {
            let word = new TheTranslation ('ago', '-297px', '155px')
            let b = word.render('theTranslation');
        });

    }else if(videoTime >= 21.409025 && videoTime <= 23.342742) {

        subtitles.innerHTML = `<p4 id="we">We</p4>
                               <p4 id="had">had</p4>
                               <p4 id="a">a</p4>
                               <p4 id="lot">lot</p4>
                               <p4 id="of">of</p4>
                               <p4 id="catching up">catching up</p4>
                               <p4 id="to">to</p4>
                               <p4 id="do">do</p4>`;

        subtitles.style.padding = '0px 5px 0px 5px';

        // подсказка для слова we

        document.getElementById('we').addEventListener("mouseover", () => {
            let word = new TheTranslation ('we', '-297px', '-190px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова had

        document.getElementById('had').addEventListener("mouseover", () => {
            let word = new TheTranslation ('had', '-297px', '-135px')
            let b = word.render('theTranslation');
        });

        // подсказда для a

        document.getElementById('a').addEventListener("mouseover", () => {

            theTranslation.innerHTML = '';
            theTranslation.style.padding = '';


        });

        // подсказка для слова lot

        document.getElementById('lot').addEventListener("mouseover", () => {
            let word = new TheTranslation ('lot', '-297px', '-75px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова catching up

        document.getElementById('catching up').addEventListener("mouseover", () => {
            let word = new TheTranslation ('catching up', '-321px', '60px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова to

        document.getElementById('to').addEventListener("mouseover", () => {
            let word = new TheTranslation ('to', '-297px', '135px')
            let b = word.render('theTranslation');
        });

        // подсказка для слова do

        document.getElementById('do').addEventListener("mouseover", () => {
            let word = new TheTranslation ('do', '-315px', '210px')
            let b = word.render('theTranslation');
        });

        }
    else {
        subtitles.innerHTML = '';
        subtitles.style.padding = '';
    }
    //ограничиваем количество слов в словаре
    let modal = document.querySelector('.modal');

    let WordsArray = JSON.parse(localStorage.getItem('words'));
  if(WordsArray.length > 10) {
        WordsArray.pop()
        let setWordsArray = JSON.stringify(WordsArray)
        localStorage.setItem(`words`, `${setWordsArray}`)
        modal.style.display = "block";
        modal.innerHTML = `<div id="modal" class="modal-content">
                                <div class="limit-wrap">
                                     <h4>количество слов не может быть больше 10</h4>
                                     <div id="ok-js" class="checkBtn">ОК</div>
                                </div>     
                            </div>`

    document.getElementById('ok-js').addEventListener('click', () => {
        modal.style.display = "none";
    })
  }
   window.addEventListener('click', () => {
        modal.style.display = "none";
    })

}



let el = document.querySelector('.wrap')


el.addEventListener('mouseleave', closeHint)



function closeHint() {
    let Hint = document.querySelector('.translation_box');
    theTranslation.innerHTML = ``
    theTranslation.style.padding = '';
    document.querySelector('video').play()
}

setInterval(getTime, 500);

document.querySelector('.tryBtn').addEventListener('click', function (){
    let video_wrap = document.querySelector('.video_wrap');
    video_wrap.style.display = "block";
})

let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        let w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
       let t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}


