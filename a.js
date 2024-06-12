let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".container");
let resetBtn=document.querySelector("#reset");
let newgameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let heading=document.querySelector(".heading");
// set player o turn
let turn0=true;
// win-patterns
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
// reset Game Function
const resetGame = () =>{
    turn0=true;
   enableboxes();
    msgContainer.classList.add("hide");
    container.classList.remove("hide");
    heading.classList.remove("hide");
    resetBtn.classList.remove("hide");
};
// add eventlistener to all boxes and check winner function
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText="o";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
     box.disabled=true;
        checkWinner();
    });
});
//disableboxes function
const disableboxes = () =>{
    for(let box of boxes){
        box.Disabled=true;
    }
};
// enableboxes function
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
// show winner function
const showWinner=(winner)=>{
    msg.innerText=`congratulations!!! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
    heading.classList.add("hide");
    resetBtn.classList.add("hide");
    disableboxes();
};
// check winner function
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
};
newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);