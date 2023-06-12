const convertButton = document.querySelector(".button-convert");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // VALOR EM REAIS
  const currencyValueConvert = document.querySelector(".currency-value"); // OUTRAS MOEDAS

  const dolarToday = 5.2;
  const convertedValue = inputCurrencyValue / dolarToday;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
}
convertButton.addEventListener("click", convertValues);
