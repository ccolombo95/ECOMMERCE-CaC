
// IMAGES CARD
let products =[
    {
        "nombre": "Pastel de chocolate",
        "descripcion": "Delicioso pastel de chocolate con cobertura de ganache.",
        "precio": 20.99,
        "imagen1": "product.jpg",
        "imagen2": "product.jpg",
        "imagen3": "pastel_chocolate3.jpg"
    },
    {
        "nombre": "Pastel de chocolate",
        "descripcion": "Delicioso pastel de chocolate con cobertura de ganache.",
        "precio": 20.99,
        "imagen1": "pastel_chocolate1.jpg",
        "imagen2": "pastel_chocolate2.jpg",
        "imagen3": "pastel_chocolate3.jpg"
    },
    {
        "nombre": "Tarta de queso",
        "descripcion": "Tarta de queso cremosa con base de galleta y mermelada de frutos rojos.",
        "precio": 18.50,
        "imagen1": "tarta_queso1.jpg",
        "imagen2": "tarta_queso2.jpg",
        "imagen3": "tarta_queso3.jpg"
    },
    {
        "nombre": "Croissants",
        "descripcion": "Croissants de mantequilla, recién horneados y crujientes.",
        "precio": 12.00,
        "imagen1": "croissants1.jpg",
        "imagen2": "croissants2.jpg",
        "imagen3": "croissants3.jpg"
    },
    {
        "nombre": "Macarons",
        "descripcion": "Macarons franceses en una variedad de sabores y colores.",
        "precio": 15.99,
        "imagen1": "macarons1.jpg",
        "imagen2": "macarons2.jpg",
        "imagen3": "macarons3.jpg"
    },
    {
        "nombre": "Tarta de limón",
        "descripcion": "Tarta de limón con merengue italiano y base de masa quebrada.",
        "precio": 19.50,
        "imagen1": "tarta_limon1.jpg",
        "imagen2": "tarta_limon2.jpg",
        "imagen3": "tarta_limon3.jpg"
    }
]

let arrayImage = ["./../assets/product.jpg", "./../assets/product-2.jpg"];
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
//Cambio de imagenes
const bgElement = document.querySelector('.product-card-image.bg');
const smElements = document.querySelectorAll('.product-card-image.sm');

smElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        bgElement.style.backgroundImage = element.style.backgroundImage;
        bgElement.style.transition = 'background-image .5s ';

    });
});

//ASide menu
function toggleMenu() {
    const menu = document.getElementById('Links');
    menu.classList.toggle('show');
    document.querySelector('.Line1Menu').classList.toggle('active');
    document.querySelector('.Line2Menu').classList.toggle('active');
    document.querySelector('.Line3Menu').classList.toggle('active');
  }

  function toggleMenuUser() {
    const menuUser = document.getElementById('NavBarAdminList');
    menuUser.classList.toggle('show');
    document.querySelector('.flecha').classList.toggle('active');
  }

  //Carrito de compras
  const bags = document.querySelectorAll(".bag-shopping-sm");
  const numberBag = document.getElementById("number-bag");

  bags.forEach((bag) => {
      bag.addEventListener("click", function(){
          numberBag.classList.toggle("active");

      })
  })

  const iconCart = document.getElementById("icon-cart");
  const closeX = document.getElementById("close-x");
  const iconCartBag = document.getElementById("icon-cart-bag");
  const cartBar = document.getElementById("shopping-cart-bar");

  iconCart.addEventListener("click", function(){
          cartBar.classList.toggle("active");
          closeX.classList.toggle("active");
          iconCartBag.classList.toggle("desactive");

  })
