const cpfsList = document.querySelectorAll("li");

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
};

const limparCpf = cpf => {
  return cpf.replace(/\D/g, "");
};

const construirCpf = cpf => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCpf = cpf => {
  return cpf.map(limparCpf).map(construirCpf);
};

const substituirCpf = element => {
  const cpfs = elementsInnerText(element);
  const cpfsFormatados = formatarCpf(cpfs);

  element.forEach((e, index) => {
    e.innerText = cpfsFormatados[index];
  });
};

substituirCpf(cpfsList);
