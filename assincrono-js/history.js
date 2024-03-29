// HISTORY

window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima

// PUSHSTATE()

// A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).
// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title ainda é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.

window.history.pushState(null, null, "sobre.html");

// POPSTATE

window.addEventListener("popstate", () => {
  fetchPage(window.location.pathname);
});

// FETCH E HISTORY

// Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

async function fetchPage(url) {
  const pageReponse = await fetch(url);
  const pageText = await pageReponse.text();
  window.history.pushState(null, null, url);
}
