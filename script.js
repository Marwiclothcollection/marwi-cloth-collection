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

});
