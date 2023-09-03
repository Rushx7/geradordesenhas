
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizeWord = document.querySelector("#valor");
let wordElement = document.querySelector("#word");

let containerWord = document.querySelector("#container-word");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaPalavra = "";

sizeWord.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizeWord.innerHTML = this.value;
}

function generateWord() {
  let generatedWord = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    generatedWord += charset.charAt(Math.floor(Math.random() * n));
  }

  containerWord.classList.remove("hide");
  wordElement.innerHTML = generatedWord;
  novaPalavra = generatedWord;
}

function copyPassWord() {
  alert("PALAVRA COPIADA COM SUCESSO");
  navigator.clipboard.writeText(novaPalavra);
}

containerWord.onclick = copyPassWord;

