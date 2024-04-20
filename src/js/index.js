let PLAYERPOINT = document.getElementById("player-guss");
let CPUPOINT = document.getElementById("computer-guss");
let SCESSIOR = document.getElementById("scessior");
let PAPER = document.getElementById("paper");
let ROCK = document.getElementById("rock");
let IS_TEN = true;
let playerPoint = 0;
let cpuPoint = 0;
const selectors = [
  {
    name: "rock",
    emoji: "✌️",
    emoji_2: "✊",

    beat: "scessior",
  },
  {
    name: "scessior",
    emoji: "✋",
    emoji_2: "✌️",

    beat: "paper",
  },
  {
    name: "paper",
    emoji: "✊",
    emoji_2: "✋",

    beat: "rock",
  },
];
const selector = document.querySelectorAll("[data-selection]");
const question = document.getElementById("questionMark");
const cpu = Math.trunc(Math.random() * selectors.length);
const computer = selectors[cpu].name;

function caller(selector) {
  const choice = selector.target.id;

  selector.target.setAttribute("disabled", "");

  selector.target.setAttribute("disabled", "");

  let answer = selectors.filter((element) => {
    return element.beat === choice;
  });

  if (computer === answer[0].name) {
    alert("draw");
  } else if (computer === answer[0].beat) {
    alert("player win");
    playerPoint++;
  } else {
    alert("cpu win");
    cpuPoint++;
  }
  refreshe()

  if (playerPoint == 10) {
    alert(`you won with ${playerPoint} point and cpu lost with ${cpuPoint}point`);
    playerPoint = 0;
    cpuPoint = 0;
    PLAYERPOINT.innerHTML = " ";
    CPUPOINT.innerText = " ";
  }
  if (cpuPoint == 10) {
    alert(`you lose with ${playerPoint} point and cpu win with ${cpuPoint} point`);
    playerPoint = 0;
    cpuPoint = 0;
    PLAYERPOINT.innerHTML = 0;
    CPUPOINT.innerText = 0;
  }

  if (choice === selectors[0].name) {
    SCESSIOR.classList.add("absolute", "hidden");
    PAPER.classList.add("absolute", "hidden");
  }

  if (choice === selectors[2].name) {
    ROCK.classList.add("absolute", "hidden");
    SCESSIOR.classList.add("absolute", "hidden");
  }
  if (choice === selectors[1].name) {
    PAPER.classList.add("absolute", "hidden");
    ROCK.classList.add("absolute", "hidden");
  }
  PLAYERPOINT.innerHTML = playerPoint;
}

function eventRemove() {
  PAPER.classList.remove("absolute", "hidden");
  ROCK.classList.remove("absolute", "hidden");
  SCESSIOR.classList.remove("absolute", "hidden");
  document.getElementById("questionMark").innerText = "?";
}
function refreshe(){
  setTimeout(() => {
    document.getElementById("questionMark").innerText = selectors[cpu].emoji_2;
    CPUPOINT.innerText = `${cpuPoint}`;
  }, 1000);
  setTimeout(() => {
    document.getElementById("questionMark").innerText = selectors[cpu].emoji;
    CPUPOINT.innerText = `${cpuPoint}`;
  }, 1000);
  setTimeout(() => {
    eventRemove();
    selector.target.removeAttribute("disabled");
  }, 1750);
}