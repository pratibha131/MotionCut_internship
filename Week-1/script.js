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
