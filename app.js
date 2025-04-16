let gameSeq=[];
let usereSeq=[];

let btns=["yellow","red","purple","green"];

let stared=false;
let level=0;

let  h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(stared==false){
    console.log("Game is Started");
    stared=true;

    levelUp();
   }
});

  function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
  }
  function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
  }

function levelUp(){
    level++
    h2.innerText=`Level ${level}`;

    //random  btn choose
   let randIdx = Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   let randbtn = document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randbtn);
      gameSeq.push(randColor);
      console.log(gameSeq);

    gameFlash(randbtn);

}

 function checkAns(){
    // console.log("curr level :",level);
    let idx = level-1;
    if(usereSeq[idx]===gameSeq[idx]){
        setTimeout(levelUp,1000)
    }else{
        h2.innerText=`Game Over! ${level}`;
    }
    reset();
 }

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    usereSeq.push(userColor);

    checkAns();
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
  stared==false;
  gameSeq=[];
  usereSeq=[];
  level=0;
}
