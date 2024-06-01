document.addEventListener("DOMContentLoaded", () => {
    let productsContainer = document.getElementById('products-container');
    let filterLinks = document.querySelectorAll(".filter-link");
    let orderLinks = document.querySelectorAll(".order-link");
    let offerLink = document.querySelector(".offer-link");
    let products = [
        {
            "id": 1,
            "nombre": "Tarta de Manzana",
            "descripcion": "Deliciosas manzanas frescas, canela aromática, azúcar moreno y una base de masa hojaldrada.",
            "precio": "25.350,00",
            "imagen1": "TartaDeManzana.jpg",
            "imagen2": "TartaDeManzana2.jpg",
            "categoria": "Tortas y tartas",
            "oferta": ""
        },
        {
            "id": 2,
            "nombre": "Pastel de chocolate",
            "descripcion": "Super Cacao, harina de alta calidad, azúcar refinada y mantequilla fresca.",
            "precio": "29.420,00",
            "imagen1": "TartaDeChocolate.jpg",
            "imagen2": "TartaDeChocolate2.jpg",
            "categoria": "Tortas y tartas",
            "oferta": "-20%"
        },
        {
            "id": 3,
            "nombre": "Tarta de queso",
            "descripcion": "Queso crema suave, azúcar refinada, huevos frescos y una base de galleta crujiente",
            "precio": "32.570.00",
            "imagen1": "TartaDeQueso.jpg",
            "imagen2": "TartaDeQueso2.jpg",
            "categoria": "Tortas y tartas",
            "oferta": "-20%"
        },
        {
            "id": 4,
            "nombre": "Muffins",
            "descripcion": "Super esponjosos con huevos frescos, mantequilla cremosa, azúcar refinada y un toque de vainilla natural.",
            "precio": "12.000,00",
            "imagen1": "Muffins.jpg",
            "imagen2": "Muffins2.jpg",
            "categoria": "Cookies y cupcakes",
            "oferta": ""
        },
        {
            "id": 5,
            "nombre": "Donas",
            "descripcion": "Irresistible combinación de textura esponjosa por dentro y crujiente por fuera, junto con la dulzura tentadora del glaseado que la cubre.",
            "precio": "12.000,00",
            "imagen1": "Donas.jpg",
            "imagen2": "Donas2.jpg",
            "categoria": "Cookies y cupcakes",
            "oferta": ""
        },
        {
            "id": 6,
            "nombre": "Pastel de Fresa",
            "descripcion": "Extraordinaria combinación de suavidad y frescura en cada bocado, junto con el sabor dulce y refrescante de las fresas frescas.",
            "precio": "35.870,00",
            "imagen1": "PastelDeFresa.jpg",
            "imagen2": "PastelDeFresa2.jpg",
            "categoria": "Tortas y tartas",
            "oferta": ""
        },
        {
            "id": 7,
            "nombre": "Turron",
            "descripcion": "Deliciosa mezcla de textura suave y crujiente, junto con sus sabores tradicionales.",
            "precio": "7.000,00",
            "imagen1": "turron.jpg",
            "imagen2": "turron2.jpg",
            "categoria": "Alfajores y macarrones",
            "oferta": ""
        },
        {
            "id": 8,
            "nombre": "Tarta Pavlova",
            "descripcion": "Exquisito contraste de texturas, una capa exterior crujiente y delicada que envuelve un interior suave y esponjoso,una mezcla equilibrada de sabores dulces y frescos.",
            "precio": "29.580,00",
            "imagen1": "Pavlova.jpg",
            "imagen2": "Pavlova2.jpg",
            "categoria": "Tortas y tartas",
            "oferta": ""
        }
    ];

    function displayProducts(products) {
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
                    <a href="#" class="button-product-view" data-product-id="${product.id}">
                        <div class="product-card-text-tittle">
                            <h5>${product.nombre}</h5>
                            <h5>
                            $${product.precio} <br>
                            <span style="font-size:16px; color:red;margin-left:2rem;">${product.oferta} </span> 
                            </h5>
                        </div>
                        <p>${product.descripcion}</p>
                    </a>
                </div>
            `;

            productsContainer.appendChild(productCard);

            // Efecto hover
            let imageCard = productCard.querySelector(".product-card-image");

            imageCard.addEventListener("mouseenter", function(event) {
                imageCard.style.transition = "background-image 0.5s ease";
                imageCard.style.backgroundImage = `url(${imagePath}${product.imagen2})`;
            });

            imageCard.addEventListener("mouseleave", function(event) {
                imageCard.style.transition = "background-image 0.5s ease";
                imageCard.style.backgroundImage = `url(${imagePath}${product.imagen1})`;
            });
        });

        // Añadir eventos a los botones de vista previa después de generar los productos
        addProductViewEvents();
    }

    function addProductViewEvents() {
        const productViewBackground = document.getElementById("product-view-background");
        const productView = document.getElementById("product-view");
        const closeProductView = document.getElementById("close-i");
        const buttonsProductView = document.querySelectorAll(".button-product-view");

        buttonsProductView.forEach(buttonProductView => {
            buttonProductView.addEventListener("click", function(event) {
                event.preventDefault();
                const productId = parseInt(this.dataset.productId, 10); // Asegúrate de que el ID es un número
                const product = products.find(p => p.id === productId);
                if (product) {
                    showProductDetails(product);
                }
                productView.classList.add('active');
                productViewBackground.classList.add('active');
            });
        });

        // Event listeners para cerrar la vista del producto
        closeProductView.addEventListener('click', closeView);
        productViewBackground.addEventListener('click', closeView);

        function closeView() {
            productView.classList.remove('active');
            productViewBackground.classList.remove('active');
        }

        function showProductDetails(product) {
            const productImageBg = document.querySelector("#product-view .product-card-image.bg");
            const productImageFirst = document.querySelector("#product-view .product-card-image.sm.first");
            const productImageSecond = document.querySelector("#product-view .product-card-image.sm.second");
            const productName = document.querySelector("#product-view .info-product h2");
            const productOFF = document.querySelector("#product-view .info-product #off");
            const productPrice = document.querySelector("#product-view .info-product h3");
            const productDescription = document.querySelector("#product-view .info-product p");

            // Ruta para las imágenes
            let imagePath = window.location.pathname.includes('pages') ? './../assets/' : './assets/';

            productImageBg.style.backgroundImage = `url(${imagePath}${product.imagen1})`;
            productImageFirst.style.backgroundImage = `url(${imagePath}${product.imagen1})`;
            productImageSecond.style.backgroundImage = `url(${imagePath}${product.imagen2})`;
            productName.textContent = product.nombre;
            productOFF.textContent = product.oferta;
            productPrice.textContent = `$${product.precio}`;
            productDescription.textContent = product.descripcion;
        }
    }

    function sortProducts(products, order) {
        return products.sort((a, b) => {
            let priceA = parseFloat(a.precio.replace(/\./g, '').replace(/,/g, '.'));
            let priceB = parseFloat(b.precio.replace(/\./g, '').replace(/,/g, '.'));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
    }

    function filterProducts(category, offer = false) {
        let filteredProducts = products;

        if (category !== 'Todos' && category !== 'OFERTAS') {
            filteredProducts = filteredProducts.filter(product => product.categoria.trim() === category.trim());
        }

        if (category === 'OFERTAS' || offer) {
            filteredProducts = filteredProducts.filter(product => product.oferta.trim() !== "");
        }

        return filteredProducts;
    }

    orderLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const order = this.innerText.includes('bajos') ? 'asc' : 'desc';
            displayProducts(sortProducts(products, order));
        });
    });

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.innerText.split(' ').slice(1).join(' ').trim();
            displayProducts(filterProducts(category));
        });
    });

    if (offerLink) {
        offerLink.addEventListener('click', function(event) {
            event.preventDefault();
            displayProducts(filterProducts('OFERTAS', true));
        });
    }

    // Detectar el parámetro en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');

    if (filterParam === 'offers') {
        displayProducts(filterProducts('OFERTAS', true));
    } else {
        displayProducts(products);
    }
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
