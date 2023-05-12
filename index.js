console.log("Welcome to Tic Tac Toe");
let music = new Audio("1 Second Tone.mp3");
let audioturn = new Audio("1 Second Tone.mp3");
let gameover = new Audio("gamecomp.wav");

let turn = "X";
let gmovr=false;

//function to change turn
const changeturn = () => {
    return turn === "X" ? "O" : "X"
}
const checkwin = () => {
    let boxtexts=document.getElementsByClassName('boxtext');
   let wins=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
   ]
   wins.forEach(e=>{
      if( (boxtexts[e[0]].innerText===boxtexts[e[1]].innerText ) && 
          ( boxtexts[e[2]].innerText===boxtexts[e[1]].innerText ) &&
          boxtexts[e[0]].innerText!=="" ){
               
               document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won";
               gmovr=true;
               gameover.play();
               //document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
              }
   })
}

//game logic
let boxes = document.getElementsByClassName("box");


Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn =changeturn();
            audioturn.play();
            checkwin();
            
            if(!gmovr)  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})
// //add onclick listenr to reset button
// reset.addEventListener('click',()=>{
//     let boxtexts=document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element=>{
//         element.innerText="";
//     )};
//     turn="X";
//     isgameover=false;
//     document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
// })