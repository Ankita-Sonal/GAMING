alert("Hello,let us enjoy some TIC-TAC-TOE!!!!")
let symbols=['0','X'];

let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let v=[0,0];
let turn0=true;
boxes.forEach(box=>{
    box.setAttribute("onclick","insertSymbol(this)");
});
function insertSymbol(box){
    box.innerText=symbols[0];
    document.getElementById("turn").innerText=symbols[1];
    symbols.reverse();
};
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=() =>{
    let reset=confirm("Current game will reset.");
    if(reset){
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    symbols.reverse();
}

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    if(winner=="0"){
        v[0]++;
        score0.innerText=v[0];
    }
    else{
        v[1]++;
        scoreX.innerText=v[0];
    }

};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val );
           
                showWinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);