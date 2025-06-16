const inputs = document.querySelector(".input"),
reset = document.querySelector(".reset-btn"),
Hint = document.querySelector(".hint span"),
guessleft = document.querySelector(".guess-left span"),
Wrongletters = document.querySelector(".wrong-letters span"),

TypeText = document.querySelector(".typing-input");

let word, maxGuesses, corrects = [] ,incorrects = []

function RandomObj() {
    let Obj = wordList[Math.floor(Math.random() * wordList.length)];
    maxGuesses = 8; corrects = []; incorrects = [];
    word = Obj.word;
    console.log(word);

    Hint.innerText = Obj.hint;
    guessleft.innerText = maxGuesses;
    Wrongletters.innerText = incorrects

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
        
    }
    inputs.innerHTML = html;

}
RandomObj()

function initGame(e) {
    let key = e.target.value;
    if (key.match(/^[A-Z,a-z]+$/) && !incorrects.includes(`${key}`)
        && !corrects.includes(`${key}`)){
        console.log(key);
        if(word.includes(key)){
            // console.log{"Letter Found"}
            for (let i = 0; i < word.length; i++) {
                if(word[i] === key) {
                    corrects.push(key)
                    inputs.querySelectorAll("input")[i].value = key;
                }
                
            }
        } else{
            maxGuesses--;
            incorrects.push( ` ${key}`);
        }
        guessleft.innerText = maxGuesses;
        Wrongletters.innerText = incorrects;

    }
    TypeText.value = "";

    setTimeout(() => {
        if (corrects.length === word.length) {
            alert(`Congrats,You Found the Correct Word`);
            RandomObj();
        }else if (maxGuesses < 1) {
            alert("Game Over! You don't have remaining guesses");
            maxGuesses=1;
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
        
    }, 1000);
}


reset.addEventListener('click', RandomObj);
TypeText.addEventListener("input",initGame);
document.addEventListener('keydown', () => TypeText.focus());