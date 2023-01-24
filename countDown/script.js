import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2023 23:59:59 GMT-0300");

const tempo = setInterval(() => {
  console.log(tempoParaONatal.total);
}, 1000);
