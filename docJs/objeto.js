// Objeto

/*
Object.create(obj, defineProperties);
// retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro);
honda.init("Honda").acelerar();

Object.assign(alvo, obj1, obj2);
// adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos.

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);


Object.defineProperties(alvo, propriedades);
// adiciona ao alvo novas propriedades mais personalizalvel kkkk

const moto1 = {};
Object.defineProperties(moto1, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

moto1.rodas = 4;
delete moto1.capacete;
moto1;
// {rodas: 2}

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

Object.keys(obj); // retorna uma array com as chaves de todas as propriedades enumeráveis do objeto.
Object.values(obj); //retorna uma array com os valores do objeto.
Object.entries(obj); //retorna uma array com array's contendo a chave e o valor.

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

// Retorna uma array com todas as propriedades diretas do objeto

Object.freeze(); //impede qualquer mudança nas propriedades.
Object.seal(); //previne a adição de novas propriedades e impede que as atuais sejam deletadas.
Object.preventExtensions(); //previne a adição de novas propriedades.

Object.freeze();
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais.

Object.prototype.toString.call(valor);

const frutas = ["Banana", "Uva"];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

*/

function tipoDado(obj) {
  return Object.prototype.toString.call(obj);
}

const frutas = ["Banana", "Uva"];
console.log(tipoDado(frutas));

const figura = {};

Object.defineProperties(figura, {
  lados: {
    value: 4,
    configurable: false,
    writable: false,
  },
});

figura.lados = 2;

console.log(figura);

const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

delete configuracao;

Object.getOwnPropertyNames(Array.prototype);
Object.getOwnPropertyNames(String.prototype);
