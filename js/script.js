// Array com o caminho das imagens
const images = [
  "images/home/giphy.gif",
  // Adicione mais caminhos de imagens, se necessário
];

let currentImage = null; // Variável para armazenar a imagem atual

// Função para criar e exibir uma imagem em um lugar aleatório da tela
function exibirImagemAleatoria() {
  // Remove a imagem anterior, se existir
  if (currentImage) {
    currentImage.style.opacity = 0;
    currentImage.addEventListener(
      "transitionend",
      function () {
        currentImage.parentNode.removeChild(currentImage);
        mostrarNovaImagem();
      },
      { once: true }
    );
  } else {
    mostrarNovaImagem();
  }
}

// Função para mostrar uma nova imagem
function mostrarNovaImagem() {
  // Seleciona um índice aleatório do array de imagens
  const randomIndex = Math.floor(Math.random() * images.length);

  // Obtém o caminho da imagem aleatória
  const imagePath = images[randomIndex];

  // Cria um novo elemento de imagem
  const imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.classList.add("random-image");

  // Aguarda um pequeno intervalo de tempo antes de exibir a imagem
  setTimeout(function () {
    imgElement.style.opacity = 1;
  }, 1000);

  // Armazena a referência para a imagem atual
  currentImage = imgElement;

  // Adiciona a imagem ao container
  const container = document.getElementById("container");
  container.appendChild(imgElement);

  // Define a posição aleatória de exibição na tela
  function setRandomPosition() {
    const posX = Math.random() * (window.innerWidth - imgElement.width);
    const posY = Math.random() * (window.innerHeight - imgElement.height);

    // Define a posição absoluta da imagem
    imgElement.style.cssText = `position: absolute; left: ${posX}px; top: ${posY}px;`;
  }

  // Chama a função para definir a posição aleatória inicialmente
  setRandomPosition();

  // Atualiza a posição da imagem ao redimensionar a janela
  window.addEventListener("resize", setRandomPosition);
}

// Chama a função para exibir uma imagem aleatória inicialmente
exibirImagemAleatoria();

// Define um intervalo para exibir uma nova imagem a cada 4 segundos
setInterval(exibirImagemAleatoria, 4000);
