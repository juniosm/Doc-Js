// ITERABLE

// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.

const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers)
);

// FOR...OF
// pecorre cada elemento (como um forEach)

const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

for (const fruta of frutas) {
  console.log(fruta);
}

for (const char of frase) {
  console.log(char);
}

// SPREAD E FOR...OF

const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.style.background = "blue";
}

console.log(...buttons);
// O for...of não irá funcionar em um objeto comum que não seja iterável.

// FOR...IN
// Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

const carro = {
  marca: "Honda",
  ano: 2018
};

for (const propriedade in carro) {
  console.log(propriedade);
}

// ARRAY e FOR...IN

const frutas = ["Banana", "Morango", "Uva"];

for (const index in frutas) {
  console.log(index);
}

for (const index in frutas) {
  console.log(frutas[index]);
}

// Obtendo chave e valor pelo FOR...IN (FOR...OF funciona tbm)

const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lista = document.querySelectorAll("li");

for (const elemento of lista) {
  elemento.classList.add("teste");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const key in window) {
  console.log(`${key}: ${prinWindow[key]}`);
}
