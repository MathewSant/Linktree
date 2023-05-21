// Array com o caminho das imagens
const images = [
  "images/home/giphy.gif",
  // Adicione mais caminhos de imagens, se necessário
];

let currentImage = null;

function exibirImagemAleatoria() {
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

function mostrarNovaImagem() {
  const randomIndex = Math.floor(Math.random() * images.length);

  const imagePath = images[randomIndex];

  const imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.classList.add("random-image");

  setTimeout(function () {
    imgElement.style.opacity = 1;
  }, 1000);

  currentImage = imgElement;

  const container = document.getElementById("container");
  container.appendChild(imgElement);

  function setRandomPosition() {
    const posX = Math.random() * (window.innerWidth - imgElement.width);
    const posY = Math.random() * (window.innerHeight - imgElement.height);

    imgElement.style.cssText = `position: absolute; left: ${posX}px; top: ${posY}px;`;
  }

  setRandomPosition();

  window.addEventListener("resize", setRandomPosition);
}

exibirImagemAleatoria();

setInterval(exibirImagemAleatoria, 4000);

const linkIcon = document.querySelector(".link-icon");
linkIcon.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "./index.html";
});
