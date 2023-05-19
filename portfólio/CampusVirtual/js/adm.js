function exibirSelect() {
  var selectWrapper = document.querySelector(".select-wrapper");
  if (selectWrapper.style.display === "none") {
    let selectElement = document.createElement("select");
    let option1 = document.createElement("option");
    option1.value = "opcao1";
    option1.text = "Opção 1";
    option1.className = "select";
    let option2 = document.createElement("option");
    option2.value = "opcao2";
    option2.text = "Opção 2";
    option2.className = "select";

    let option3 = document.createElement("option");
    option3.value = "opcao3";
    option3.text = "Opção 3";
    option3.className = "select";

    selectElement.appendChild(option1);
    selectElement.appendChild(option2);
    selectElement.appendChild(option3);

    selectWrapper.appendChild(selectElement);
    selectWrapper.style.display = "block";
  } else {
    selectWrapper.innerHTML = "";
    selectWrapper.style.display = "none";
  }
}
