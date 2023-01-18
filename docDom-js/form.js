// FORMS

document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro

// VALUES

const form = document.getElementById("contato");
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener("keyup", handleKeyUp);

// adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento
// e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

// VALIDAÇÂO
// O método checkValidity verifica se um input com o atributo required, é válido ou não.
// A propriedade validationMessage possui a mensagem padrão de erro do browser.
// É possível modicar com setCustomValidity('')

{
  /* <input type="email" name="email" id="email" required />
<span class="erro"></span> */
}

const form = document.getElementById("contato");
function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("invalido");
  }
}
form.addEventListener("change", handleChange);

// SELECT
{
  /* <select name="cores" id="cores">
  <option value="black">Preto</option>
  <option value="white">Branco</option>
  <option value="blue">Azul</option>
</select>
  <input type="color" > */
}

const form = document.getElementById("contato");
function handleChange(event) {
  document.body.style.backgroundColor = event.target.value;
}
form.addEventListener("change", handleChange);

// DIFERENTES INPUTS

{
  /* <input type="color">
<input type="date">
<input type="number">
<input type="range">
<input type="password"> */
}

//CHECKBOX

{
  /* <label for="identidade">Possui identidade?</label>
<input type="checkbox" value="identidade" id="identidade">
<label for="casado">Casado?</label>
<input type="checkbox" value="casado" id="casado"> */
}

const form = document.getElementById("contato");
function handleChange(event) {
  if (event.target.checked) console.log(event.target.value);
}
form.addEventListener("change", handleChange);

//RADIO

{
  /* <input type="radio" id="guitarra" value="guitarra" name="instrumento" />
  <label for="guitarra">Guitarra</label>

  <input type="radio" id="violao" value="violao" name="instrumento" />
  <label for="violao">Violão</label>

  <input type="radio" id="baixo" value="baixo" name="instrumento" />
  <label for="baixo">Baixo</label> */
}

// PEGANDO TODOS OS VALORES

const form = document.getElementById("contato");
const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
}
form.addEventListener("change", handleChange);
