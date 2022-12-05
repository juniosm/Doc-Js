// função constutora


function Pessoa(nome, idade) {
  this.andar = function () {
    console.log(nome + " andou");
  };
}

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor);
  this.addClass = function (da) {
    this.elements.forEach((element) => {
      return element.classList.add(da);
    });
  };
  this.removeClass = function (da) {
    this.elements.forEach((element) => {
      return element.classList.remove(da);
    });
  };
}

const lista = new Dom("li");
console.log(lista.elements);
lista.addClass("ativo");
lista.removeClass("ativo");
