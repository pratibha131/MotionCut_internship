document.addEventListener("DOMContentLoaded", () => {
    const sidebarImages = document.querySelectorAll(".sidebar img");
    const mainImage = document.getElementById("mainImage");

    sidebarImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            mainImage.src = img.src;
        });
    });
});

document.getElementById('currencySelect').addEventListener('change', function () {
    var currency = this.value;
    var priceElement = document.getElementById('mrp');
    
    var priceInUSD = 16995.00;
    
    var conversionRates = {
        'USD': 83.5,
        'EUR': 0.85,
        'GBP': 0.75,
        'IND': 1
    };
    
    var symbol = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'IND' : '₹'
    };
    
    var convertedPrice = (priceInUSD * conversionRates[currency]).toFixed(2);  
    priceElement.textContent = 'M.R.P: ' + symbol[currency] + convertedPrice;
});

document.addEventListener("DOMContentLoaded", () => {
    const sizeButtons = document.querySelectorAll(".group1 button, .group2 button");

    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            sizeButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});

function updateCurrency() {
    const currencySelect = document.getElementById('currencySelect');
    const mrp = document.getElementById('mrp');

    switch (currencySelect.value) {
        case 'USD':
            mrp.innerHTML = 'MRP : $ 200.00';
            break;
        case 'EUR':
            mrp.innerHTML = 'MRP : € 180.00';
            break;
        case 'GBP':
            mrp.innerHTML = 'MRP : £ 150.00';
            break;
        case 'IND':
            mrp.innerHTML = 'MRP : ₹ 16,995.00';
            break;
        default:
            mrp.innerHTML = 'MRP : ₹ 16,995.00';
    }
}

function updatePrices() {
    const currency = document.getElementById('currency').value;
    const basicPrice = document.getElementById('basic-price');
    const standardPrice = document.getElementById('standard-price');
    const premiumPrice = document.getElementById('premium-price');

    switch (currency) {
        case 'USD':
            basicPrice.innerHTML = '$50';
            standardPrice.innerHTML = '$70';
            premiumPrice.innerHTML = '$100';
            break;
        case 'EUR':
            basicPrice.innerHTML = '€45';
            standardPrice.innerHTML = '€63';
            premiumPrice.innerHTML = '€90';
            break;
        case 'GBP':
            basicPrice.innerHTML = '£40';
            standardPrice.innerHTML = '£56';
            premiumPrice.innerHTML = '£80';
            break;

        case 'IND':
            basicPrice.innerHTML = '₹ 16,995.00';
            standardPrice.innerHTML = '₹ 20,995.00';
            premiumPrice.innerHTML = '₹ 25,995.00';
            break;
    }
}

