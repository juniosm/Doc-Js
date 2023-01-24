// FUNÇÃO CONSTRUTORA

function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button("Comprar", "blue");

// CLASS

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton = new Button("Comprar", "blue");

// CLASS X CONSTRUCTOR FUNCTION

class Button {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo1() {}
  metodo2() {}
}

function Button(propriedade) {
  this.propriedade = propriedade;
}
Button.prototype.metodo1 = function () {};
Button.prototype.metodo1 = function () {};

// Metodo no constructor
// Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array.

class Button {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementButton = document.createElement("button");
    elementButton.style.background = background;
    elementButton.innerText = "Clique";
    return elementButton;
  }
}

const blueButton = Button.create("blue");

// Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement("button");
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton;
  }
  static createBlue(text) {
    return new Button(text, "blue");
  }
}

const blueButton = Button.createBlue("Comprar");
