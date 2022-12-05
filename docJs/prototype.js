// Prototype

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const junio = new Pessoa("Junio", "Sousa", 21);

Pessoa.prototype.nomeCompleto = function () {
  console.log(this.nome + " " + this.sobrenome);
};

const li = document.querySelector("li");
  