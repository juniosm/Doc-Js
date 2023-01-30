import validarCpf from "./validarcpf.js";

const cpf = document.getElementById("cpf");
const cpfvalido = new validarCpf(cpf).iniciar();
