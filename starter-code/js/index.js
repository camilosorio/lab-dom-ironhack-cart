var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector("h2 > span");

function updateSubtot($product) {
  total = 0;

  //Get the sub total of each product
  var $subResult = $product.querySelector('.subtot > span')

  // Get the price of each product
  const $priceUnit = Number($product.querySelector('.pu > span').innerHTML);

  //Get the value of each product qty
  const qtyInput = $product.querySelector('input[name="qty"]');
  const $qty = qtyInput.value;

  total = Number($priceUnit * $qty);

  $subResult.textContent = total;
  return $subResult;
}

function calcAll() {
  var x = document.querySelectorAll(".subtot > span")
  var $totalFinal = 0;

  document.querySelectorAll(".product").forEach(tr => {
    updateSubtot(tr);
  })

  x.forEach(sub => {
    $totalFinal += Number(sub.textContent);
  })

  $total.textContent = $totalFinal;
}

$calc.onclick = calcAll;