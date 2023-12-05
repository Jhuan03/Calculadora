const imcText = document.getElementById("imc");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  imcText.textContent = 0;
  descText.textContent = "N/A";
}

function onFormSubmit(e) {
  e.preventDefault();

  const peso = parseFloat(form.peso.value);
  const altura = parseFloat(form.altura.value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 ) {
    alert("Por favor coloque peso e altura válidos ");
    return;
  }

  const alturaemmetros = altura / 100; 
  const imc = peso / Math.pow(alturaemmetros, 2);
  const desc = classificarIMC(imc);

  imcText.textContent = imc.toFixed(2);
  imcText.className = desc;
  descText.innerHTML = `Você está <strong>${desc}</strong>`;
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "abaixo do peso";
  } else if (imc < 25) {
    return "saúdavel";
  } else if (imc< 30) {
    return "acima do peso";
  } else {
    return "obeso";
  }
}
