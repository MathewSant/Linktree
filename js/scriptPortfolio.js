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

  // Define a posição aleatória de exibição na tela
  const posX = Math.random() * (window.innerWidth - imgElement.width);
  const posY = Math.random() * (window.innerHeight - imgElement.height);

  // Define a posição absoluta da imagem
  imgElement.style.position = "absolute";
  imgElement.style.left = posX + "px";
  imgElement.style.top = posY + "px";

  // Adiciona a imagem ao container
  const container = document.getElementById("container");
  container.appendChild(imgElement);

  // Aguarda um pequeno intervalo de tempo antes de exibir a imagem
  setTimeout(function () {
    imgElement.style.opacity = 1;
  }, 300);

  // Armazena a referência para a imagem atual
  currentImage = imgElement;
}

// Chama a função para exibir uma imagem aleatória inicialmente
exibirImagemAleatoria();

// Define um intervalo para exibir uma nova imagem a cada 2 segundos
setInterval(exibirImagemAleatoria, 2000);
