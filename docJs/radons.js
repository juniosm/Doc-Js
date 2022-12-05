/*var nome = "Junio ",
  idade = 21;

var comidaFavorita;

comidaFavorita = "Pastel Fogaza";

var texto, genero, data, preco, escritor;

var gols = 1000;
var frase = `O zico fez ${gols} gols`;

var sobrenome = "Sousa";
var frase = "It's Time";
console.log(frase);
function valorVerdadeiro(valor) {
    return !!valor;
}

function perimetro(lado) {
  return lado * 4;
}

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

function numeroPar(numero) {
  const par = numero % 2;
  if (par === 0) {
    return "Número Par";
  } else {
    return "Número Impar";
  }
}

function tipo(argumento) {
  return typeof argumento;
}

addEventListener("scroll", function () {
  console.log(nomeCompleto("Junio", "Sousa"));
});


let dados = {
  nome: "Junio",
  sobrenome: "Sousa",
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

let cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir() {
    return "Latindo";
  },
};

const nt = document.querySelector(".lst");

nt.addEventListener("click", function () {
  console.log("evento");
});

var copaBrasil = [1959, 1962, 1970, 1994, 2002, 2022];

for (let i = 0; i < copaBrasil.length; i++) {
  console.log(`O brasil foi campeão em ${copaBrasil[i]}`);
}

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let j = 0; j < frutas.length; j++) {
  console.log(frutas[j]);
  if (frutas[j] === "Pera") {
    break;
  }
}

var ultFruta = frutas[frutas.length - 1];
console.log(ultFruta);
console.log(frutas);

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa ? true : false;

function myFunction(a, b) {
  return a.hasOwnProperty(b);
}

function myFunction2(a, b) {
  return b in a;
}

function myFunction(obj) {
  return obj.country;
}
function myFunction(a, n) {
  return a[n - 1];
}

function myFunction(a) {
  for (; a.length > 3; ) {
    a.pop();
  }
  return a;
}

function myFunction(a) {
  return a.slice(0, 3);
}
function myFunction(a) {
  return { key: a };
}

function myFunctionT(a) {
  return a.replace(a.slice(-3), "");
}

function myFunctionS(a) {
  return a.slice(0, -3);
}
function myFunction(a, b) {
  // return a[b] ? true : false;
  return a.slice(3);
}
  
  function myFunction(obj, key) {
    return obj[key];
}
// function myFunction(a) {
//   return a.toString().split("").map(Number);
// }

// function myFunction(a, b) {
//   // a.splice(a.indexOf(b), 1);
//   return a.filter((item) => item !== b);
// }

// function myFunction(arr) {
//   let media = arr.reduce((acumulador, valor) => acumulador + valor, 0);
//   return media / arr.length;
// }

// function myFunction(arr) {
//   let media = arr.reduce(
//     (prev, curr) => (prev.length > curr.length ? prev : curr),
//     ""
//   );
//   return media;
// }

function myFunction(...arrays) {
  return arrays.flat());
}*/


/*const imagensSite = document.querySelectorAll("img");

imagensSite.forEach(function (imagem) {
  console.log(imagem);
});

const imagensAnimais = document.querySelectorAll("img[src^='./img/imagem']");
console.log(imagensAnimais);

const linksInterno = document.querySelectorAll("[href^='#']");
linksInterno.forE

const paragrafo = document.quach(function (item) {
  console.log(item);
});

const tituloDescr = document.querySelector(".infos h3");

console.log(tituloDescr);erySelectorAll("p");

console.log(paragrafo[paragrafo.length - 1]);

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  console.log(item);
});

const textoParagrafo = document.querySelectorAll("p");

textoParagrafo.forEach((item) => {
  console.log(item.innerHTML);
});
const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach((item) => {
  item.classList.add("ativo");
  item.classList.remove("ativo");
});

menuItens[0].classList.add("ativo");

console.log(
  menuItens[menuItens.length - 1].setAttribute(
    "href",
    "https://www.google.com/"
  )
);

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  // console.log(img.attributes["alt"]);
  console.log(img.hasAttribute("alt"));
});

const img = document.querySelector("img");

console.log(img.offsetTop);

const imgs = document.querySelectorAll("img");

window.onload = function () {
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
    console.log(soma);
  });
};

const links = document.querySelectorAll("a");

links.forEach((link) => {
  console.log(link.getBoundingClientRect());
});

const menor = window.matchMedia("(max-width:700px)").matches;

const menu = document.querySelector(".menu");

if (menor) {
  menu.classList.add("menu-mobile");
}


const links = document.querySelectorAll("a[href^='#']");

function ativar(event) {
  event.preventDefault();
  console.log(event.target.classList.toggle("ativo"));
}

links.forEach((link) => {
  link.addEventListener("click", ativar);
});



const corpo = document.body;

function encontrarClik(e) {
  console.log(e.currentarget);
}

corpo.addEventListener("click", encontrarClik);

const corpo = document.body;

function encontrarClik(e) {
  e.target.remove();
}

corpo.addEventListene,
r("click", encontrarClik);
*/

const menu = document.querySelector(".menu");
const foter = document.querySelector(".footer");

const menuClone = menu.cloneNode(true);
foter.appendChild(menuClone);

const faq = document.querySelector(".faq");
const primDt = faq.querySelector("dt");

console.log(primDt.nextElementSibling);

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
