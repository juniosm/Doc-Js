// Iteração Array


[].forEach();
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Callback sendo uma Arrow Function

const carros = ["Ford", "Fiat", "Honda"];
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

[].map();
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach()

const carros1 = ["Ford", "Fiat", "Honda"];
const newCarros = carros1.map((item) => {
  return "Carro " + item;
});

// A diferença entre o forEach e o map é que o map seu retorno resulta em um array.
// Se o objetivo for modificar os valores da array atual, sempre utilize o map

newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

// Map com objetos
const aulas0 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas0.map((aula) => aula.min);
// [15, 10, 20, 25];

const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas0.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

[].reduce(callback(acumulador, valorAtual, index, array), valorInicial);
// A reduce possui o parametro especial -> acumulador
//  O acumulador é na verdade apenas o retorno da iteração anterior.
// O valorInicial geralmete 0 pode ser omitido.

const aulas1 = [10, 25, 30];
const total1 = aulas1.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

// O reduce pode ser usado para encontrar o numero maior ou alguma interação com numero anterior e atual

const numeros0 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros0.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60

// Reduce de um objeto
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

[].reduceRight();
// existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda

[].some();
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas = ["Banana", "Pêra", "Uva"];
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
}); // true

[].every();
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true.

const numeros1 = [6, 43, 22, 88, 101, 29];
let maiorQue3 = numeros1.every((x) => x > 3); // true
maiorQue3 = numeros1.every((x) => x > 7); // false

[].find(), [].findIndex();
// Retorna o valor da primeira Interação truthy
// Retorna o index da primeira Interação truthy

const frutas1 = ["Banana", "Pêra", "Uva", "Maçã"];
const buscaUva = frutas1.findIndex((fruta) => fruta === "Uva"); // 2

const numeros2 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros2.find((x) => x > 45); // 88

[].filter();
// Retorna um array com os valores de interação truthy

const frutas2 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayLimpa = frutas2.filter((fruta) => fruta); // ['Banana', 'Uva', 'Maçã']

const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaiorq45 = numeros3.filter((x) => x > 45); // [88, 101]


const cursos = document.querySelectorAll(".curso");
// pode ser usado map covertendo em array -> Array.from(cursos)

let arrayObjCursos = [];
const cursosArray = cursos.forEach((item) => {
  const objCurso = {
    nome: item.querySelector("h1").innerHTML,
    descricao: item.querySelector("p").innerHTML,
    aulas: item.querySelector(".aulas").innerHTML,
    horas: item.querySelector(".horas").innerHTML,
  };
  arrayObjCursos.push(objCurso);
});

const numeros = [3, 44, 333, 23, 122, 322, 33];
const numMaiores100 = numeros.filter((i) => i > 100);

const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixo = instrumentos.some((instrumento) => instrumento === "Baixo");

console.log(baixo);

const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorFinal = compras.reduce((acu, item) => {
  const precoFormatado = +item.preco.replace("R$", "").replace(",", ".");

  return acu + precoFormatado;
}, 0);

console.log(valorFinal);

// const preco = compras.map((item) => item.preco);

// let soma = 0;
// const precoFormatado = preco.map((item) => {
//   const numPreco = +item.replace("R$", "").replace(",", ".");
//   soma += numPreco;
// });

// console.log(soma);
