const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert",
  ) //Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

  
  const dolarToday = 5.2
  const euroToday = 6.2
  

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
  }
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday)
  }

  

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  convertValues()
  
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

/*const convertButton = document.querySelector(".button-convert");
const selectMainTo = document.querySelector(".select-main-to");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // VALOR EM REAIS
  const currencyValueConvert = document.querySelector(".currency-value"); // OUTRAS MOEDAS

  const selectMain = document.querySelector(".select-main");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 6.12;

  if (selectMainTo.value == "Dolar") {
    //Se o select estiver  selecionado o valor dolar, entra aqui
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday); // função para formatar valores em en-US
  }
  if (selectMainTo.value == "Euro") {
    //Se o select estiver  selecionado o valor euro, entra aqui
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday); // função para formatar valores em de-DE
  }
  if (selectMainTo.value == "Libra") {
    //Se o select estiver  selecionado o valor libra, entra aqui
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday); // função para formatar valores em de-DE
  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue); // função para formatar valores em pt-br
}

function changeSelectMainTo() {
  const selectMainTo = document.getElementsByClassName(".currency-name");

  if (selectMainTo.value == "Dolar") {
    currencyName.innerHTML = "Dólar americano";
  }
  if (selectMainTo.value == "Euro") {
    currencyName.innerHTML = "Euro";
  }
  if (selectMainTo.value == "Libra") {
    currencyName.innerHTML = "Libra";
  }

  convertValues();
}

selectMainTo.addEventListener("change", changeSelectMainTo); //Função para saber quando a moeda for trocada no select
convertButton.addEventListener("click", convertValues); //Função para saber quando o button de converter foi clicado */
