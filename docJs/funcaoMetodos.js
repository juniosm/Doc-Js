// Função


nameFunction.call();
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

const carros = ["Ford", "Fiat", "VW"];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ["Banana", "Pêra", "Uva"];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta

// O Objeto deve ser parecido
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Podendo ativar seus metodos de prototipo atraves do call

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains("ativo");
});

filtro; // Retorna os itens que possuem ativo


namefunction.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar

nomefunction.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

const li1 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li1, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();

// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função

const paragrafo = document.querySelectorAll("p");

const numCaracter = Array.prototype.reduce.call(
  paragrafo,
  (acu, item) => {
    const numParagrafo = item.innerText.length;
    return acu + numParagrafo;
  },
  0
);

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
}

const tituloH1 = criarElemento.bind(null, h1, titulo);
