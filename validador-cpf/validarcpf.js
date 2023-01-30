export default class validarCpf {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }
  criar(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  formatar(cpf) {
    const limparcpf = this.limpar(cpf);
    return this.criar(limparcpf);
  }
  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[.-\s]?){3}\d{2}/g);
    return matchCpf && matchCpf[0] === cpf;
  }
  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.classList.remove("error");
      cpfElement.value = this.formatar(cpfElement.value);
    } else {
      cpfElement.classList.add("error");
    }
  }
  addEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMudanca(this.element);
    });
  }
  iniciar() {
    this.addEvento();
    return this;
  }
}
