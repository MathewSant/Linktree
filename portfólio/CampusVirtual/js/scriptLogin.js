// função para atualizar a imagem de acordo com a largura da tela
function updateLogo() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    document.getElementById("logoNoJS").src = "../img/logoPortal.png";
  } else {
    document.getElementById("logoNoJS").src = "../img/logoPortalWhite.png";
  }
}
function handleFormSubmit(event) {
  event.preventDefault();
}
// atualiza a imagem na primeira carga da página
updateLogo();

// adiciona o evento de redimensionamento para atualizar a imagem
window.addEventListener("resize", updateLogo);
// adiciona o evento de clique ao formulário
const form = document.getElementById("form"); // substitua "seuFormulario" pelo ID do seu formulário
form.addEventListener("submit", handleFormSubmit);
