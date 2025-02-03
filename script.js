"use strict";

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let turnO = true;

const disabledBtn = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableBtn = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
};

const showWinner = (winner) => {
  msg.innerHTML = `Player ${winner}, Wins 🎊`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enableBtn();

  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO) {
      box.innerHTML = "X";
      turnO = !turnO;
    } else {
      box.innerHTML = "O";
      turnO = !turnO;
    }
    box.disabled = true;
    checkWinner();
  });
});
function checkWinner() {
  for (let pattern of winPatterns) {
    // console.log(pattern);
    let val1 = boxes[pattern[0]].innerHTML;
    let val2 = boxes[pattern[1]].innerHTML;
    let val3 = boxes[pattern[2]].innerHTML;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        // console.log("winner");
        showWinner(val1);
      } else {
        // console.log("no winner");
      }
    }
  }
}

resetBtn.addEventListener("click", resetGame);
document.querySelector(".playAgain").addEventListener("click", resetGame);
