// Function to format date as YYYY-MM-DD
// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// // Automatically set data-date for all product cards without a date
// document.querySelectorAll('.product-card').forEach(function(card) {
//     if (!card.hasAttribute('data-date')) {
//         const currentDate = new Date();
//         card.setAttribute('data-date', formatDate(currentDate));
//     }
// });

// // Example function to add a new product dynamically
// function addProduct(productDetails) {
//     const productGrid = document.getElementById('productGrid');
//     const newProduct = document.createElement('div');
    
//     newProduct.classList.add('product-card');
//     newProduct.setAttribute('data-price', productDetails.price);
//     newProduct.setAttribute('data-popularity', productDetails.popularity);
//     newProduct.setAttribute('data-date', formatDate(new Date()));
    
//     newProduct.innerHTML = `
//         <img src="${productDetails.image}" alt="${productDetails.name}">
//         <h3>${productDetails.name}</h3>
//         <p class="price">$${productDetails.price}</p>
//         <a href="#" class="btn">Buy Now</a>
//     `;
    
//     productGrid.appendChild(newProduct);
// }

// Product Filter Section
document.getElementById('priceFilterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
    const sortOrder = document.getElementById('sortOrder').value;

    let productCards = Array.from(document.querySelectorAll('.product-card'));

    // Filter products based on price range
    productCards.forEach(function(card) {
        const productPrice = parseInt(card.getAttribute('data-price'));

        if (productPrice >= minPrice && productPrice <= maxPrice) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Sort products based on the selected sort order
    productCards = productCards.filter(card => card.style.display === 'block');

    if (sortOrder === 'low-to-high') {
        productCards.sort((a, b) => {
            return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
        });
    } else if (sortOrder === 'high-to-low') {
        productCards.sort((a, b) => {
            return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
        });
    } else if (sortOrder === 'latest') {
        productCards.sort((a, b) => {
            return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
        });
    } else if (sortOrder === 'most-popular') {
        productCards.sort((a, b) => {
            return parseInt(b.getAttribute('data-popularity')) - parseInt(a.getAttribute('data-popularity'));
        });
    }

    // Update the product grid with sorted products
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    productCards.forEach(function(card) {
        productGrid.appendChild(card);
    });
});

