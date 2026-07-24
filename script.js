const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

let filter = searchBox.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(function(product){

let title = product.querySelector("h3").innerText.toLowerCase();

if(title.includes(filter)){
product.style.display="block";
}
else{
product.style.display="none";
}

});document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("checkoutForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let product = document.getElementById("product").value;

      let message =
`🛍️ *New Order*

👤 Name: ${name}
📞 Phone: ${phone}
📍 Address: ${address}
🛒 Product: ${product}`;

      let whatsapp =

});
