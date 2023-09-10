console.log("Welvome to tic tac toe")
//let music = new Audio("")
//let turnmusic = new Audio("")
//let gameoveraudio = new Audio("")
let turn = "X"
let gameover = false
let tie = 9;
let wontext = document.querySelector('.info')

//function to change the turn
const changeturn = () => {
    return turn === "X" ? "O" : "X"
}

//function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText != '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WIN! ";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width = '20vw'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
           wontext.classList.add('wontie');
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', () => {

        if (boxtext.innerText === '' && !gameover) {
            tie--;
            boxtext.innerText = turn;
            turn = changeturn();
            //turnmusic.play();
            checkwin();
            if (!gameover) {
                if (tie != 0) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
                else {
                    document.getElementsByClassName("info")[0].innerText = "Tie! ";
                    wontext.classList.add('wontie');

                }
            }

        }


    })
})


//Reset
reset.addEventListener('click', (e) => {
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = '';
    })
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = '0vw'
    wontext.classList.remove('wontie');

    tie = 9;

})

