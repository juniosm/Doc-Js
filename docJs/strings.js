// String

let str = "ababa";

str.length;
//  calcular tamanho da string

const comida = "Pizza";
const frase = "A melhor comida é Pizza";

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a

str.charAt(n);
// Retorna index(n) do Caracter

comida.charAt(0); // P

str.concat(str1, str2, "...");
// Contatena Strings

comida.concat(frase, "Podendo adicionar mais após a virgula");

str.includes(search, position);
// Pode encontrar caracter ou conjunto de caracter em uma string

console.log(frase.includes(comida));

str.startsWith(search), str.endsWith(search);
// Pode encontrar string exata dentro de outra string
frase.startsWith("a"), frase.endsWith("a");

str.slice(star, end);
// Pode corta a string a partir do valor inicial até o valor final

const test1 = "O teste de slice";
const test2 = "Segundo teste de slice";

test1.slice(1, 4); // tes
test1.slice(10); // slice

test2.slice(-4); // lice

str.substring(star, end);
// Mesmo funcionamento do slice menos o parametro em negativo

test1.substring(2, 6); //este

str.indexOf(search);
// Retorna o index da string onde acha seu valor(começo ou final) de igualdade

comida.indexOf("z");
comida.lastIndexOf("z");

str.padEnd(valor, string), str.padStart(valor, string);
// Inflar String de acordo com valor(quantidade que aumenta) e string(elemento que se repete)

comida.padStart(5, "-");

str.repeat(n);
// Repete a string n vezes

str.replace();
// Troca uma parte da string por outra.

comida.replace("Pizza", "Pastel");

str.split(padrao);
// Divide a String de acordo com o padrao e retorna um array

const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" "); //['Camisa', "Bonés", "Calças", "Bermudas" ...]

str.tolowercase(), str.touppercase();
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários

str.trim(), str.trimstart(), str.trimend();
// Remove espaços no inicio e no final da string

const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let soma = 0;

transacoes.forEach((item) => {
  const rmvCifrao = Number(item.valor.replace("R$", ""));
  soma += rmvCifrao;
});
console.log(soma);

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransporte = transportes.split(";");

console.log(arrayTransporte);

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const rmvSpan = html.split("span");
const arrayInString = rmvSpan.join("a");

const frase2 = "Melhor do ano!";

const ultimoCaracter = frase2[frase2.length - 1];

frase.slice(-1);

console.log(ultimoCaracter);

const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let cont = 0;
transacoes2.forEach((item) => {
  const itemUpperCase = item.toUpperCase();
  const encontrarTaxa = itemUpperCase.includes("TAXA");
  if (encontrarTaxa) {
    cont += 1;
  }
});
console.log(cont);
