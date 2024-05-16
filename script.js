
// IMAGES CARD
let arrayImage = ["/assets/product.jpg", "/assets/product-2.jpg"];
let productCards = document.querySelectorAll(".product-card");

productCards.forEach(function(productCard) {
    let imageCard = productCard.querySelector(".product-card-image");
    let imageRoute = arrayImage[0];

    imageCard.addEventListener("mouseenter", function(event) {
        imageRoute = arrayImage[1];
        imageCard.style.transition = "background-image 0.5s ease";
        imageCard.style.backgroundImage = "url(" + imageRoute + ")";
    });

    imageCard.addEventListener("mouseleave", function(event) {
        imageRoute = arrayImage[0];
        imageCard.style.transition = "background-image 0.5s ease";
        imageCard.style.backgroundImage = "url(" + imageRoute + ")";
    });
});

// PRODUCT PREVIEW
const productViewBackground = document.getElementById("product-view-background");
const productView = document.getElementById("product-view");
const buttonsProductView = document.querySelectorAll(".button-product-view");
const closeProductView = document.getElementById("close-i");

buttonsProductView.forEach(function(buttonProductView) {
    buttonProductView.addEventListener("click", function(event){
        productView.classList.add('active');
        productViewBackground.classList.add('active');
        closeProductView.addEventListener('click', function(event){
            productView.classList.remove('active');
            productViewBackground.classList.remove('active');
        });
        productViewBackground.addEventListener('click', function(event){
            productView.classList.remove('active');
            productViewBackground.classList.remove('active');
        });
    });

});
