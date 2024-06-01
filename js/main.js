// IMAGES CARD
let products = [
    {
        "nombre": "Tarta de Manzana",
        "descripcion": "Deliciosas manzanas frescas, canela aromática, azúcar moreno y una base de masa hojaldrada.",
        "precio": "25.350,00",
        "imagen1": "TartaDeManzana.jpg",
        "imagen2": "TartaDeManzana2.jpg"
    },
    {
        "nombre": "Pastel de chocolate",
        "descripcion": "Super Cacao, harina de alta calidad, azúcar refinada y mantequilla fresca.",
        "precio": "29.420,00",
        "imagen1": "TartaDeChocolate.jpg",
        "imagen2": "TartaDeChocolate2.jpg"
    },
    {
        "nombre": "Tarta de queso",
        "descripcion": "Queso crema suave, azúcar refinada, huevos frescos y una base de galleta crujiente",
        "precio": "32.570.00",
        "imagen1": "TartaDeQueso.jpg",
        "imagen2": "TartaDeQueso2.jpg",
    },
    {
        "nombre": "Muffins",
        "descripcion": "Super esponjosos con huevos frescos, mantequilla cremosa, azúcar refinada y un toque de vainilla natural.",
        "precio": "12.000,00",
        "imagen1": "Muffins.jpg",   
        "imagen2": "Muffins2.jpg"
    },
    {
        "nombre": "Donas",
        "descripcion": "Irresistible combinación de textura esponjosa por dentro y crujiente por fuera, junto con la dulzura tentadora del glaseado que la cubre.",
        "precio": "12.000,00",
        "imagen1": "Donas.jpg",
        "imagen2": "Donas2.jpg"
    },
    {
        "nombre": "Pastel de Fresa",
        "descripcion": "Extraordinaria combinación de suavidad y frescura en cada bocado, junto con el sabor dulce y refrescante de las fresas frescas.",
        "precio": "35.870,00",
        "imagen1": "PastelDeFresa.jpg",
        "imagen2": "PastelDeFresa2.jpg"
    },
    {
        "nombre": "Turron",
        "descripcion": "Deliciosa mezcla de textura suave y crujiente, junto con sus sabores tradicionales.",
        "precio": "7.000,00",
        "imagen1": "turron.jpg",
        "imagen2": "turron2.jpg",
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
