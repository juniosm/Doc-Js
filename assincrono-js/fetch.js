const doc = fetch("./doc.txt");

doc
  .then(response => {
    return response.text();
  })
  .then(body => {
    console.log(body);
  });

fetch("./arquivo.txt").then(function (response) {
  console.log(response); // Response HTTP (Objeto)
});

// RESPONSE
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.

fetch("./arquivo.txt")
  .then(response => {
    return response.text();
  })
  .then(corpo => {
    console.log(corpo);
  });

// O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.

// FORMATOS

// Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.

fetch("https://viacep.com.br/ws/01001000/json/")
  .then(response => response.json())
  .then(cep => {
    console.log(cep.bairro, cep.logradouro);
  });

// **************************************************
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

const styleElement = document.createElement("style");

fetch("./style.css")
  .then(response => response.text())
  .then(style => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
  });

// Pode se utilizar de HTML e utilizar como um corpo de uma nova tag html de outro arquivo

const div = document.createElement("div");

fetch("./sobre.html")
  .then(response => response.text())
  .then(htmlBody => {
    div.innerHTML = htmlBody;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
  });

// .BLOB()

// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.

const div = document.createElement("div");

fetch("./sobre.html")
  .then(response => response.text())
  .then(htmlBody => {
    div.innerHTML = htmlBody;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
  });

// .CLONE()

// Clona

const div = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json);
  });
  cloneResponse.text().then(text => {
    console.log(text);
  });
});

// .HEADERS

// Acesso ao cabeçalho da requisição

const div = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then(response => {
  response.headers.forEach(console.log);
});

// .STATUS E .OK

// Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso

const div = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then(response => {
  console.log(response.status, response.ok);
  if (response.status === 404) {
    console.log("Página não encontrada");
  }
});

// .URL E .TYPE

// .url retorna o url da requisição. .type retorna o tipo da reposta.

const div = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then(response => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep = document.querySelector("input");
const btn = document.querySelector(".btn");
const local = document.querySelector(' [data-cep="local"] ');

btn.addEventListener("click", handleCep);

function handleCep() {
  const CEP = cep.value;

  const endereco = fetch(`https://viacep.com.br/ws/${CEP}/json/`);

  endereco
    .then(response => response.json())
    .then(nameEndereco => {
      local.innerText = `${nameEndereco.logradouro} 
      Bairro ${nameEndereco.bairro}`;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valor = document.querySelector(".valor");

const carteira = fetch("https://blockchain.info/ticker");

carteira
  .then(r => r.json())
  .then(body => {
    // setInterval(() => {
      valor.innerText = "R$ " + body.BRL.buy;
    }, 30000);
  });

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piada = document.querySelector(".piada");
const bnt = document.querySelector(".proxima");

bnt.addEventListener("click", gerarPiada);

function gerarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(body => {
      piada.innerText = body.value;
    });
}
