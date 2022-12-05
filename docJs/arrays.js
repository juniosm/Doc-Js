// Array

Array.from();
// Array.from() é um método utilizado para transformar array-like objects, em uma array

let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carros = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4, // precisa possui o length para o objeto corro ser modificado com o metodo from()
};

const carrosArray = Array.from(carros);

[].length;
// Retorna tamnho do array

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3

[].sort();
// Organizar por ordem alfanumerico(por caracter) o array

const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

[].unshift(), [].push();
// adiciona no array pelo inicio e pelo final

const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Honda", "Kia"); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push("Ferrari"); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

[].shift(), [].pop();
// remove no array pelo inicio e pelo final

const carros3 = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];

[].reverse();
//  inverte os itens da array e retorna a nova array.

[].splice(index, remover, item1, item2);
// adiciona a partir do index e remove a quantidade passa no segundo argumento

const carros4 = ["Ford", "Fiat", "VW", "Honda"];
carros4.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
carros4; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

[A].copyWithin(alvo, inicio, final);
//  a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia.

["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

[A].fill(valor, inicio, final);
// preenche a array com o valor, do início até o fim.

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

[].concat();
// irá concatenar a array com o valor passado.

const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

[].includes(), [].indexOf(), [].lastIndexOf();

const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true - verificar valor no array
linguagens.includes("ruby"); // false - verificar valor no array
linguagens.indexOf("python"); // 4 - Verificar valor e retornar index
linguagens.indexOf("js"); // 2 - Verificar valor e retornar index
linguagens.lastIndexOf("js"); // 5 - Verificar valor final e retornar index

[].join(argumento);
// Um array em uma String juntando cada elemento com um argumento entre eles

const linguagens1 = ["html", "css", "js", "php", "python"];
linguagens1.join(); // 'html,css,js,php,python'
linguagens1.join(" "); // 'html css js php python'

[].slice(inicio, final);
// retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens2 = ["html", "css", "js", "php", "python"];
linguagens2.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens2 = linguagens2.slice();

// Exercicios

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

const comidaSelecionada = comidas.shift();
const comidaSelecionada1 = comidas.pop();
comidas.push("Arroz");
comidas.splice(0, 0, "Peixe", "Batata");

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
estudantes.sort();
estudantes.reverse();
estudantes.includes("Joana");
estudantes.includes("Juliane");

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

html = html.split("section").join("ul").split("div").join("li");

const carros5 = ["Ford", "Fiat", "VW", "Honda"];
const carrosClone = carros5.slice();
carros5.pop();
