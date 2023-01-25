// Parâmetro Padrão
// atribuir valor ao argumento possibilita que o arg tenha um valor reserva caso na chamda da função não seja passado

function perimetroForma(lado, totalLados = 4) {
  return lado * totalLados;
}

perimetroForma(10, 5); // 50
perimetroForma(10); // 40

// Arguments
// Esse objeto contém os valores dos argumentos.

function perimetroForma(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}

perimetroForma(10);
perimetroForma(10, 4, 20);

// Parâmetro Rest
// É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + " ganhou.");
  });
}

anunciarGanhadores("Pedro", "Marta", "Maria");

// Só é possível ter um único parâmetro rest e ele deve ser o último.

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + " ganhou um " + premio);
  });
}

anunciarGanhadores("Carro", "Pedro", "Marta", "Maria");

// Rest vs Arguments

function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores); //Array dos argumentos restante apos oq foi definido ['Pedro', 'Marta', 'Maria']
  console.log(arguments); // Objeto de todos argumento
}

anunciarGanhadores("Carro", "Pedro", "Marta", "Maria");

// Operador Spread
// Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

const comidas = [...frutas, "Pizza", ...legumes];

// Spread Argument

const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);

// Transformar em Array

const btns = document.querySelectorAll("button");
const btnsArray = [...btns];

const frase = "Isso é JavaScript";
const fraseArray = [...frase];

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || "blue";
  if (color === undefined) {
    color = "red";
  }
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  return buttonElement;
}

const redButton = createButton();

// resposta::::::
function createButton(background = "blue", color = "red") {
  background = background;
  color = color;
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Clique";
  buttonElement.style.background = background;
  return buttonElement;
}

const redButton = createButton("yellow", "black");

document.body.appendChild(redButton);



// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];

comidas.push(...frutas);

console.log(comidas);

