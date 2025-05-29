let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;//URL API

//selectare elemente din DOM pt dropdown(from, to), result(rezultatul conversiei) si input(suma)
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
const amountInput = document.querySelector("#amount");
const result = document.querySelector("#result");


currencies.forEach(currency => {
  const optionFrom = document.createElement("option");
  optionFrom.value = currency[0];
  optionFrom.text = `${currency[0]} (${currency[1]})`; 
  fromDropDown.appendChild(optionFrom);

  const optionTo = document.createElement("option");
  optionTo.value = currency[0];
  optionTo.text = `${currency[0]} (${currency[1]})`; 
  toDropDown.appendChild(optionTo);
});

//valorile initiale 
fromDropDown.value = "EUR";
toDropDown.value = "RON";
amountInput.value = "1";

//functia care se ocupa de conversia valutara
function convertCurrency() {
  const amount = amountInput.value; 
  const fromCurrency = fromDropDown.value; 
  const toCurrency = toDropDown.value; 

  if (amount !== "") { 
    fetch(api)
      .then(response => response.json()) 
      .then(data => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      });
  } else {
    alert("Please fill in the amount");
  }
}

document.querySelector("#buton-conversie").addEventListener("click", convertCurrency);

window.addEventListener("load", convertCurrency);