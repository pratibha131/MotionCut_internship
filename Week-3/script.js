const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
  });
  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
  });
  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
  });
  ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 3500,
  });
  ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 4000,
  });


const headings = document.querySelectorAll('.container h5');

headings.forEach((heading, index) => {
  setTimeout(() => {
    heading.style.opacity = '1';
  }, index * 200);
});


let cartItemsCount = 0;

    function updateCartCount(count) {
      const cartCountElement = document.getElementById('cartCount');
      cartCountElement.textContent = count;
    }

    function toggleCart() {
      
    }


    function addItemToCart() {
      cartItemsCount++;
      updateCartCount(cartItemsCount);
    }

    function removeItemFromCart() {
      if (cartItemsCount > 0) {
        cartItemsCount--;
        updateCartCount(cartItemsCount);
      }
    }