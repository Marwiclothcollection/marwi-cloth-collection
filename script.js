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

});
}); function selectProduct(name) {
    document.getElementById("product").value = name;

    document.getElementById("orderForm").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("product").focus();
    }
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;

    let message =
`🛍 *NEW ORDER*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Address: ${address}

🛒 Product: ${product}

📦 Quantity: ${quantity}`;

    let whatsapp = "https://wa.me/923025156140?text=" + encodeURIComponent(message);

    window.open(whatsapp, "_blank");
});
