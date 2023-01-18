// SETTIMEOUT

function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, "Depois de 1s");

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

// this agora é btn.
function handleClick(event) {
  setTimeout(() => {
    this.classList.add("active");
  }, 1000);
}

// SETINTERVAL

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, "Passou 1s");

// loop a cada segundo
let j = 0;
setInterval(() => {
  console.log(j++);
}, 1000);

// clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}

// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const corpo = document.body;

const testeArray = ["red", "blue"];

let x = 0;
const changeCor = setInterval(() => {
  corpo.style.background = testeArray[x];
  x++;
  if (x > 1) {
    x = 0;
  }
}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const num = document.querySelector(" [data-num] ");
const bntPlay = document.querySelector(" [data-play] ");
const bntPause = document.querySelector(" [data-pause] ");

bntPlay.addEventListener("click", initTime);
bntPause.addEventListener("click", pauseTime);
bntPause.addEventListener("dblclick", resetTime);

let y = 0;
let time;

function initTime(e) {
  time = setInterval(() => {
    num.innerText = y++;
  }, 1000);
  bntPlay.setAttribute("disabled", "");
}

function pauseTime() {
  clearInterval(time);
  bntPlay.removeAttribute("disabled");
}

function resetTime() {
  num.innerText = 0;
  y = 0;
}
