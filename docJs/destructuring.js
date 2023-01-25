// debugger;
// let item1 = 1;

// function funcao1() {
//   let item2 = 2;
//   function funcao2() {
//     let item3 = 3;
//     console.log(item1);
//     console.log(item2);
//     console.log(item3);
//   }
//   funcao2();
// }

// funcao1();

// DESTRUCTURING

const carro = {
  modelo: "Fiat",
  ano: 2018
};

const { modelo, ano } = carro;

console.log(modelo, ano);

// DESTRUCTURING OBJECTS

const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"]
    },
    fisicas: {
      cadernos: ["Caderno 1"]
    }
  }
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const { livros, videos } = cliente.compras.digitais;

console.log(livros);
console.log(videos);

// Aninhar destructuring

const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"]
    },
    fisicas: {
      cadernos: ["Caderno 1"]
    }
  }
};

const {
  fisicas,
  digitais,
  digitais: { livros, videos }
} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);

// DEFINIR VALOR INICIAL

const cliente = {
  nome: "Andre",
  compras: 10
};

const { nome, compras, email = "email@gmail.com", cpf } = cliente;
console.log(email); // email@gmail.com
console.log(cpf); // undefined

// DESTRUCTURING ARRAYS

const frutas = ["Banana", "Uva", "Morango"];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;

// A desestruturação pode servir para declararmos uma sequência de variáveis.

const primeiro = "Item 1";
const segundo = "Item 2";
const terceiro = "Item 3";
// ou
const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];

// ARGUMENTO DESESTRUTURADO
// O argumento da função pode passar como uma Destructuring

function handleKeyboard(event) {
  console.log(event.key);
}
// Com Destructuring
function handleKeyboard({ key }) {
  console.log(key);
}

document.addEventListener("keyup", handleKeyboard);

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;

console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = ["React", "Css"];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo"
};

const { cor: BobCor } = cachorro;
