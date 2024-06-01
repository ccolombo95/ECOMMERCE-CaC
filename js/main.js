// IMAGES CARD
let products = [
    {
        "nombre": "Pastel de chocolate",
        "descripcion": "Delicioso pastel de chocolate con cobertura de ganache.",
        "precio": 350,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg",
        "off": "20%"
    },
    {
        "nombre": "Pastel de chocolate",
        "descripcion": "Delicioso pastel de chocolate con cobertura de ganache.",
        "precio": 350,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    },
    {
        "nombre": "Tarta de queso",
        "descripcion": "Tarta de queso cremosa con base de galleta y mermelada de frutos rojos.",
        "precio": 300,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    },
    {
        "nombre": "Croissants",
        "descripcion": "Croissants de mantequilla, recién horneados y crujientes.",
        "precio": 200,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    },
    {
        "nombre": "Macarons",
        "descripcion": "Macarons franceses en una variedad de sabores y colores.",
        "precio": 250,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    },
    {
        "nombre": "Tarta de limón",
        "descripcion": "Tarta de limón con merengue italiano y base de masa quebrada.",
        "precio": 300,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    },
    {
        "nombre": "Macarons",
        "descripcion": "Macarons franceses en una variedad de sabores y colores.",
        "precio": 250,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    },
    {
        "nombre": "Tarta de limón",
        "descripcion": "Tarta de limón con merengue italiano y base de masa quebrada.",
        "precio": 300,
        "imagen1": "product.jpg",
        "imagen2": "product-2.jpg",
        "imagen3": "pastel_chocolate-2.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    let productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Ruta para las imágenes
        let imagePath = window.location.pathname.includes('pages') ? './../assets/' : './assets/';

        productCard.innerHTML = `
            <div class="product-card-image" style="background-image: url(${imagePath}${product.imagen1});">
                <span class="bag-shopping-sm"><i class="fa-solid fa-bag-shopping"></i></span>
            </div>
            <div class="product-card-text">
                <a href="#" class="button-product-view">
                    <div class="product-card-text-tittle">
                        <h5>${product.nombre}</h5>
                        <h5>$${product.precio}</h5>
                    </div>
                    <p>${product.descripcion}</p>
                </a>
            </div>
        `;

        productsContainer.appendChild(productCard);

        //  efecto hover
        let imageCard = productCard.querySelector(".product-card-image");

        imageCard.addEventListener("mouseenter", function(event) {
            imageCard.style.transition = "background-image 0.5s ease";
            imageCard.style.backgroundImage = `url(${imagePath}${product.imagen2})`;
        });

        imageCard.addEventListener("mouseleave", function(event) {
            imageCard.style.transition = "background-image 0.5s ease";
            imageCard.style.backgroundImage = `url(${imagePath}${product.imagen1})`;
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
