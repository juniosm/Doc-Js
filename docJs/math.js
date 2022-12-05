// Number e Mach

/*
Number.isNaN(), Number.isInteger();
// Verificar se é um NaN, Verificar se é um Inteiro

Number.isNaN(NaN); // true
Number.isInteger(23.6); // false


Number.parseFloat(), Number.parseInt();
// Transforma String em numero float ou int, sendo que a string deve começar com um número

parseFloat("99.50"); // Mesma função sem o Number
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100


n.toFixed(decimais);
// Retorna o valor com tantas casas decimais de acordo com o parametro

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46


n.toString(radix);
// transforma um numero em string

const preco1 = 2.99;
preco1.toString(10); // '2.99'


n.toLocaleString(lang, options);
// Formata numero de acordo com a linguagem

const preco2 = 59.49;
preco2.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $59.49
preco2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49


Math
// Objeto nativo ligado as operções numericas

Math.PI; //3.14...
Math.abs(-5.5); // 5.5 -retorna o valor absoluto
Math.ceil(4.8334); // 5 -  arredonda para cima
Math.ceil(4.3); // 5 -  arredonda para cima
Math.floor(4.8334); // 4 -  arredonda para baixo
Math.floor(4.3); // 4 -  arredonda para baixo
Math.round(4.8334); // 5 - aredonda para integral mais próxima
Math.round(4.3); // 4 aredonda para integral mais próxima

Math.max(5,3,10,42,2); // 42 - retorna número maximo
Math.min(5,3,10,42,2); // 2 - retorna número  minimo

Math.random(); // 0.XXX - número aleatorio 
Math.floor(Math.random() * 100); // número aleatorio  entre 0 e 100 - 
Math.floor(Math.random() * 500);  // número aleatorio  entre 0 e 500

// Número aleatorio entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
*/

Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
console.log(Math.max(...arrayNumeros));

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

listaPrecos.forEach((item) => {
  const numFormatado = Number(item.slice(3).replace(",", "."));
  const numFinal = Math.ceil(numFormatado);
  console.log(numFinal);
});
