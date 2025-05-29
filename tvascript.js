document.addEventListener('DOMContentLoaded', function() {
   var vatRateSelect = document.getElementById('vat-rate');
   for (var i = 1; i <= 30; i++) {
       var option = document.createElement('option');
       option.value = i;
       option.textContent = i + '%';
       vatRateSelect.appendChild(option);
   }

   var form = document.getElementById('vat-calculator-form');
   
   form.addEventListener('submit', function(event) {
       event.preventDefault();

       var vatRate = parseFloat(document.getElementById('vat-rate').value);
       var amountInput = document.getElementById('amount').value;

       var amount = parseFloat(amountInput.replace(',', '.'));

       var tva = (vatRate / 100) * amount;
       var total = amount + tva;

       document.getElementById('tva').textContent = tva.toFixed(2);
       document.getElementById('total').textContent = total.toFixed(2);
       document.getElementById('results').style.display = 'block';
   });
});
