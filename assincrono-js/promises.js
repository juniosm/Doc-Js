// NEW PROMISE()

// Promise é uma função construtora de promessas. Existem dois resultados possíveis: Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: undefined}

// O poder das Promises está no método then() do seu protótipo.

const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessa.then(function (resolucao) {
  console.log(resolucao); // 'Estou pronto!'
});

// ASSINCRONO

// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.

const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolvida");
  }, 1000);
});

promessa.then(resolucao => {
  console.log(resolucao); // 'Resolvida' após 1s
});

// CATCH()

// O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessa
  .then(resolucao => {
    console.log(resolucao);
  })
  .catch(reject => {
    console.log(reject);
  });

// FINALLY()

// finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessa
  .then(
    resolucao => {
      console.log(resolucao);
    },
    reject => {
      console.log(reject);
    }
  )
  .finally(() => {
    console.log("Acabou"); // 'Acabou'
  });

// PROMISE.ALL()

// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});

.then.catch

const promesse = new Promise((resolve, reject) =>{
  if(true){
    resolve("Pronto")
  }else{
    reject(Error("Error aconteceu"))
  }
})

promessa.then((resposta) => {

}).catch((Error) => console.log(Error))