let productList = [
    {
        "id": 1,
        "barcode": '7891962056500',
        "category": "Doces",
        "image": "cookieschocolate.svg",
        "price": 5.49,
        "productName": "Biscoito e Chocolate ao Leite 80g",
        "quantity": 30,
        "supplier": "-"
    },
    {
        "id": 2,
        "barcode": '7891098000163',
        "category": "Bebidas",
        "image": "chamomiletea.svg",
        "price": 2.49,
        "productName": "Chá de Camomila 10g",
        "quantity": 15,
        "supplier": "-"
    },
    {
        "id": 3,
        "barcode": '7896051115038',
        "category": "Confeitaria",
        "image": "condensedmilk.svg",
        "price": 5.39,
        "productName": "Leite Condensado Integral 395g",
        "quantity": 25,
        "supplier": "-"
    },
    {
        "id": 4,
        "barcode": '7894000050027',
        "category": "Gelados",
        "productName": "Maionese 250g",
        "price": 8.99,
        "quantity": 15,
        "supplier": "-",
        "image": "mayonnaise.svg"
    },
    {
        "id": 5,
        "barcode": '7896102500608',
        "category": "Enlatados",
        "productName": "Milho Verde 280g",
        "price": 1.99,
        "quantity": 50,
        "supplier": "Enlatados S/A",
        "image": "greencorn.svg"
    },
    {
        "id": 6,
        "barcode": '7896102500608',
        "category": "Confeitaria",
        "productName": "Alimento Achocolatado 280g",
        "price": 12.49,
        "quantity": 30,
        "supplier": "-",
        "image": "chocolatemilk.svg"
    },
    {
        "id": 7,
        "barcode": '7896102500608',
        "category": "Confeitaria",
        "productName": "Fermento Biológico Seco Instantâneo 10g",
        "price": 1.29,
        "quantity": 49,
        "supplier": "-",
        "image": "instantdryyeast.svg"
    },
    {
        "id": 8,
        "barcode": '7891080000119',
        "category": "Confeitaria",
        "productName": "Farinha de Trigo Tradicional 1kg Tipo 1",
        "price": 4.99,
        "quantity": 53,
        "supplier": "-",
        "image": "wheatflour.svg"
    },
    {
        "id": 9,
        "barcode": '7891000502303',
        "category": "Outros",
        "productName": "Amaciante de Carne 120g",
        "price": 6.99,
        "quantity": 53,
        "supplier": "-",
        "image": "meatsoftener.svg"
    },
    {
        "id": 10,
        "barcode": '7891080000119',
        "category": "Bebidas",
        "productName": "Refrigerante de Cola 2L",
        "price": 5.79,
        "quantity": 150,
        "supplier": "Bebidas Brasil S/A",
        "image": "coke.svg"
    },
    {
        "id": 11,
        "barcode": '7896085053269',
        "category": "Salgados",
        "productName": "Biscoito Salgado Água e Sal 200g",
        "price": 3.39,
        "quantity": 32,
        "supplier": "-",
        "image": "creamcracker.svg"
    },
    {
        "id": 12,
        "barcode": '7896009301131',
        "category": "Enlatados",
        "productName": "Atum Ralado em Oléo Comestível com Caldo Vegetal 170g",
        "price": 7.29,
        "quantity": 32,
        "supplier": "Enlatados S/A",
        "image": "tuna.svg"
    },
    {
        "id": 13,
        "barcode": '5601252231287',
        "category": "Enlatados",
        "productName": "Azeite de Oliva 500mL Tipo Único",
        "price": 21.29,
        "quantity": 25,
        "supplier": "Enlatados S/A",
        "image": "oliveoil.svg"
    },
    {
        "id": 14,
        "barcode": '3700123300014',
        "category": "Bebidas",
        "image": "waterbottle.svg",
        "price": 1.49,
        "productName": "Água Sem Gás 1.5L",
        "quantity": 65,
        "supplier": "Bebidas Brasil S/A",
        "sales": [
            {
                "month": 1,
                "amountSales": 50,
            },
            {
                "month": 1,
                "amountSales": 50,
            },
            {
                "month": 1,
                "amountSales": 50,
            },
            {
                "month": 1,
                "amountSales": 50,
            },
        ]
    },
];

$(document).ready(() => {
    $("#productListSearch").on("keyup", () => {
        handleFilterProduct($("#productListSearch").val())
    });
});


/*Sorting - Alphabetical Order*/
const sortProducts = (first, others) => first.productName.toLowerCase().localeCompare(others.productName.toLowerCase())

/*Getting brazilian currency*/
let currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }),
    getRadioBak = document.getElementById('bakery-food'),
    getRadioCan = document.getElementById('canned-food'),
    getRadioDes = document.getElementById('dessert-food'),
    getRadioDri = document.getElementById('drink-food'),
    getRadioOth = document.getElementById('other-food'),
    modal = document.querySelector('.modal-box'),
    handleResults = document.getElementById('filterBtn'),
    getRadioLessTwenty = document.getElementById('ltTwenty-amount'),
    getRadioTwOneForty = document.getElementById('twentyone-forty-amount'),
    getRadioMoreForty = document.getElementById('gtForty-amount'),
    /*Setting filter by amount values*/
    getLessThanTwenty = (value) => { return value.quantity <= 20; },
    getTwOneForty = (value) => { return value.quantity >= 21 && value.quantity <= 40; },
    getMoreForty = (value) => { return value.quantity >= 41 },
    getProductId = (value) => { return value.id == location.pathname.substring(9, 11); },
    getProductById = () => { return productList.filter(getProductId); };


function handleFilterProduct(filterValue) {
    filterValue = filterValue.toLowerCase();
    let productFiltered = productList
        .sort(sortProducts)
        .map((products) => {
            if (!filterValue || products.productName.toLowerCase().indexOf(filterValue) !== -1 ||
                products.category.toLowerCase().indexOf(filterValue) !== -1 ||
                products.barcode.indexOf(filterValue) !== -1) {
                return setFilteredContent(products);
            }
        })
    setContentIntoHTML(productFiltered)
}


/*Filtering by category */
function handleCategory() {
    if (getRadioDri.checked) {
        handleFilterProduct('Bebidas')
    }
    else if (getRadioDes.checked) {
        handleFilterProduct('Doces')
    }
    else if (getRadioBak.checked) {
        handleFilterProduct('Confeitaria');
    }
    else if (getRadioCan.checked) {
        handleFilterProduct('Enlatados');
    }
    else if (getRadioOth.checked) {
        handleFilterProduct('Outros')
    }
}

function handleResultsBasedOnCriteria() {
    if (getRadioDri.checked || getRadioDes.checked || getRadioBak.checked || getRadioCan.checked || getRadioOth.checked) {
        handleCategory();
    }
    else if (getRadioLessTwenty.checked || getRadioMoreForty.checked || getRadioTwOneForty.checked) {
        handleAmount();
    } else {
        handleFilterProduct('')
    }
    handleModal();
}

/*Handling results based on multiple filters*/
handleResults.addEventListener("click", handleResultsBasedOnCriteria);

/*Filtering by amount*/
function handleAmount() {
    if (getRadioLessTwenty.checked) {
        let productFilteredbyAmount = productList.filter(getLessThanTwenty),
            productAmountItems = productFilteredbyAmount
                .sort(sortProducts)
                .map((products) => {
                    return setFilteredContent(products);
                })
        setContentIntoHTML(productAmountItems)
    }
    else if (getRadioTwOneForty.checked) {
        let productFilteredbyAmount = productList.filter(getTwOneForty),
            productAmountItems = productFilteredbyAmount
                .sort(sortProducts)
                .map((products) => {
                    return setFilteredContent(products);
                })
        setContentIntoHTML(productAmountItems)
    }
    else {
        let productFilteredbyAmount = productList.filter(getMoreForty),
            productAmountItems = productFilteredbyAmount
                .sort(sortProducts)
                .map((products) => {
                    return setFilteredContent(products);
                })
        setContentIntoHTML(productAmountItems)
    }
}

function setContentIntoHTML(result) {
    $('.container').find('.content-card').html(result);

    let resultList = document.querySelector('.content-card').childElementCount,
        resultAmount = `<span>A busca retornou ${resultList}`,
        handleResults = (resultList > 1) ? `${resultAmount} resultados</span>` : `${resultAmount} resultado</span>`;

    $('.results-items-amount').find('.results-item-amount-description').html(handleResults);
}

function setFilteredContent(products) {
    return `
            <div class="product" onclick="handleProductRedirect(this)" data-product="${products.id}">
                <small class="product-category">${products.category}</small>
                <h4 class="product-product">${products.productName}</h4>
                <p class="product-price">${currency.format(products.price)}</p>
                <small class="product-amount">Quantidade disponível: <b>${products.quantity}</b></small>
                
                </div>
                `
}

function handleProductRedirect(animal) {
    let animalType = animal.getAttribute("data-product");
    location.assign(`/product/${animalType}`);
}

function setProductIntoHTML(result) {
    $('body').find('.product-section').html(result);
}

function setProductContent(productContent) {
    return `
    <div class="product-description">
        <img src="../assets/${productContent.image}">
    </div>
    <div class="product-box">
        <div class="product">
            <small class="product-category">${productContent.category}</small>
            <h2 class="product-product">${productContent.productName}</h2>
            <p class="product-price">${currency.format(productContent.price)}</p>
            <small class="product-amount">Quantidade disponível: <b>${productContent.quantity}</b></small>
            <span><small class="product-barcode">${productContent.barcode}</small></span>
        </div>
        <div class="other-info-product">
            <div class="supplier">
                <h3>Fornecedor</h3>
                <small>${productContent.supplier}</small>
            </div>
        </div>
    </div>
    `;
}

getProductById()

function setProduct() {
    let getProductFilteredbyId = productList.filter(getProductId),
        handleProductFilteredbyId = getProductFilteredbyId
            .sort(sortProducts)
            .map((products) => {
                return setProductContent(products);
            })
    setProductIntoHTML(handleProductFilteredbyId)
}
setProduct()


const maxQuantity = Math.max.apply(Math,
    productList.map((o) => {
        return o.quantity;
    }))


const minQuantity = Math.min.apply(Math,
    productList.map((a) => {
        return a.quantity;
    }))
const minQuantityProduct = productList.filter((o) => {
    const product = o.quantity == minQuantity ? o.productName : false
    return product;
})
const maxQuantityProduct = productList.filter((o) => {
    const product = o.quantity == maxQuantity ? o.productName : false
    return product;
})

function setDashboardItemsContent(quantityProduct) {
    return `
    <div class="dashboard-card">
        <h4>${quantityProduct.productName}</h4>
        <small class="product-quantity">${quantityProduct.quantity} unidades</small>
    </div>
`;
}

function setDashboardItems() {
    let setDashboardItemMinimum = minQuantityProduct,
        handleMinimumDashboard = setDashboardItemMinimum
            .map((products) => {
                return setDashboardItemsContent(products);
            })
            console.log(handleMinimumDashboard)
    let setDashboardItemMax = maxQuantityProduct,
        handleMaxItemDashboard = setDashboardItemMax
            .map((products) => {
                return setDashboardItemsContent(products);
            })

    const content = `
            <div class="content-dashboard-item-min">
            <h3>Produtos com estoque baixo</h3>
            <div class="content-dashboard-item-min-group">
            <p>${handleMinimumDashboard}</p>
            </div>
            </div>
            <div class="content-dashboard-item-max">
                <h3>Produtos em maior quantidade</h3>
                <div class="content-dashboard-item-max-group">
                    <p>${handleMaxItemDashboard}</p>
                </div>
            </div>
    `  ;

    setDashboardItemstIntoHTML(content)
}
setDashboardItems()

function setDashboardItemstIntoHTML(result) {
    $('.container').find('.content-dashboard-card').html(result);
}