
var guitarLink = document.getElementById('guitars');
var mainContent = document.getElementById('guitarGrid');
var secondPage = document.getElementById('page2');

var myRequest = new XMLHttpRequest();

var prevButton = document.getElementById('prev-btn');
var nextButton = document.getElementById('next-btn');

var prodAvailable = document.getElementById('prodAvailable');

var guitarImages = document.getElementById('gImages');

var infoButton = document.getElementById('info-btn');

var infoDiv = document.getElementById('infoDiv');
var productDesc = document.getElementById('productDesc');
var priceInfo = document.getElementById('prodPrice');
var quantInfo = document.getElementById('prodQuant');

var shipButton = document.getElementById('ship-btn');
var shipDiv = document.getElementById('shipDiv');
var shipInfo = document.getElementById('shipInfo');


var revButton = document.getElementById('rev-btn');
var revDiv = document.getElementById('revDiv');
var custRev = document.getElementById('custRev');

var buyButton = document.getElementById('buy-it');
var thirdPage = document.getElementById('page-3');


// page 2
var guitarSelectedImage = document.getElementById('selectedGuitarImage');
var guitarSelectedDescription = document.getElementById('selectedGuitarDescription');
var guitarSelectedPrice = document.getElementById('selectedGuitarPrice');


//nav-navigation
guitarLink.addEventListener("click", function () {
    mainContent.style = "display:grid";
    secondPage.style = "display:none";
    thirdPage.style.display = "none";
    mainImg.style.display = "none";
});


//ajax call
myRequest.open("GET", "guitardata.json", true);
myRequest.onload = function () {
    var allGuitarData = JSON.parse(myRequest.responseText);
    var guitarData = allGuitarData.allProducts;
    var count = 0;
    productDesc.textContent = guitarData[0].product_description;
    priceInfo.textContent = guitarData[0].price;
    shipInfo.textContent = "The Shipping Charges are: $" + guitarData[0].shipping_charges;
    quantInfo.textContent = guitarData[0].no_of_items;
    custRev.textContent = guitarData[0].customer_reviews;
    localStorage.setItem("guitarImage",guitarData[0].image_path);
    localStorage.setItem("guitarDesc",guitarData[0].product_description);
    localStorage.setItem("guitarPrice",guitarData[0].price);
    localStorage.setItem("guitarShipping",guitarData[0].shipping_charges);
    //product availability


    //Display Images
    prevButton.addEventListener('click', function () {
        if (count < 1) {
            count = 3;
        } else {
            count--;
            showImage(count);
        }
    });
    nextButton.addEventListener('click', function () {
        if (count > 1) {
            count = -1;
        } else {
            count++;
            showImage(count);
        }
    });
    infoButton.addEventListener('click', function () {
        if (infoDiv.style.display === "none") {
            infoDiv.style.display = "block";
        } else {
            infoDiv.style.display = "none";
        }
    });
    shipButton.addEventListener('click', function () {
        if (shipDiv.style.display === "none") {
            shipDiv.style.display = "block";
        } else {
            shipDiv.style.display = "none";
        }
    });
    revButton.addEventListener('click', function () {
        if (revDiv.style.display === "none") {
            revDiv.style.display = "block";
        } else {
            revDiv.style.display = "none";
        }
    });

    buyButton.addEventListener("click", function(){
        mainContent.style = "display:none";
        secondPage.style = "display:grid";
        thirdPage.style.display = "none";
        page2();
    });
    
    function page2(){
        guitarSelectedImage.src = localStorage.getItem("guitarImage");
        guitarSelectedDescription.textContent = localStorage.getItem("guitarDesc");
        guitarSelectedPrice.textContent = localStorage.getItem("guitarPrice");
    }

    function showImage(count) {
        console.log(count);
        if (count > 2) {
            guitarImages.src = guitarData[0].image_path;
            productDesc.textContent = guitarData[0].product_description;
            priceInfo.textContent = guitarData[0].price;
            shipInfo.textContent = "The Shipping Charges are: $" + guitarData[0].shipping_charges;
            quantInfo.textContent = guitarData[0].no_of_items;
            custRev.textContent = guitarData[0].customer_reviews;
            localStorage.setItem("guitarImage",guitarData[0].image_path);
            localStorage.setItem("guitarDesc",guitarData[0].product_description);
            localStorage.setItem("guitarPrice",guitarData[0].price);
            localStorage.setItem("guitarShipping",guitarData[0].shipping_charges);

        } else if (count < 0) {
            guitarImages.src = guitarData[2].image_path;
            productDesc.textContent = guitarData[2].product_description;
            priceInfo.textContent = guitarData[2].price;
            shipInfo.textContent = "The Shipping Charges are: $" + guitarData[2].shipping_charges;
            quantInfo.textContent = guitarData[2].no_of_items;
            custRev.textContent = guitarData[2].customer_reviews;
            localStorage.setItem("guitarImage",guitarData[2].image_path);
            localStorage.setItem("guitarDesc",guitarData[2].product_description);
            localStorage.setItem("guitarPrice",guitarData[2].price);
            localStorage.setItem("guitarShipping",guitarData[2].shipping_charges);
        } else {
            guitarImages.src = guitarData[count].image_path;
            productDesc.textContent = guitarData[count].product_description;
            shipInfo.textContent = "The Shipping Charges are: $" + guitarData[count].shipping_charges;
            priceInfo.textContent = guitarData[count].price;
            quantInfo.textContent = guitarData[count].no_of_items;
            custRev.textContent = guitarData[count].customer_reviews;
            localStorage.setItem("guitarDesc",guitarData[count].product_description);
            localStorage.setItem("guitarImage",guitarData[count].image_path);
            localStorage.setItem("guitarPrice",guitarData[count].price);
            localStorage.setItem("guitarShipping",guitarData[count].shipping_charges);
            if (guitarData[count].stock_availability == "true" && guitarData[count].no_of_items >= "0") {
                priceInfo.style = "color:green";
                prodQuant.style = "color:green";
                prodAvailable.style = "color:green;";
                prodAvailable.textContent = "Available";
                buyButton.style.display = "block";
            } else {
                priceInfo.style = "color:red;";
                prodQuant.style = "color:grey";
                prodAvailable.style = "color:red;";
                prodAvailable.textContent = "Unavailable. Out of Stock";
                buyButton.style.display = "none";
            }
        }
    }
};
myRequest.send();

