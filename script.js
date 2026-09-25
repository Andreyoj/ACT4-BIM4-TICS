const API_URL = 'https://dummyjson.com/products?limit=30';

const productsGrid = document.querySelector('#products-grid');
const resultsCount = document.querySelector('#results-count');
const searchInput = document.querySelector('#search-input');
const reloadButton = document.querySelector('#reload-button');
const statusMessage = document.querySelector('#status');

let products = [];

function formatPrice(price) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

function renderProducts(items) {
  productsGrid.innerHTML = items
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${product.thumbnail}" alt="${product.title}" loading="lazy" />
            <span class="product-category">${product.category}</span>
          </div>
          <div class="product-info">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="product-bottom">
              <strong>${formatPrice(product.price)}</strong>
              <span class="rating" aria-label="Valoración ${product.rating} de 5">★ ${product.rating.toFixed(1)}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join('');

  resultsCount.textContent = `${items.length} ${items.length === 1 ? 'producto encontrado' : 'productos encontrados'}`;
}

function filterProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const searchableText = `${product.title} ${product.description} ${product.category}`.toLowerCase();
    return searchableText.includes(query);
  });

  renderProducts(filteredProducts);

  if (filteredProducts.length === 0) {
    statusMessage.textContent = 'No encontramos productos con esa búsqueda.';
    statusMessage.classList.add('is-visible');
  } else {
    statusMessage.classList.remove('is-visible');
  }
}

async function loadProducts() {
  statusMessage.textContent = 'Conectando con la API...';
  statusMessage.classList.add('is-visible');
  reloadButton.disabled = true;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    products = data.products;
    filterProducts();
  } catch {
    productsGrid.innerHTML = '';
    resultsCount.textContent = 'No se pudieron cargar los productos';
    statusMessage.textContent = 'No fue posible conectar con la API. Inténtalo de nuevo.';
    statusMessage.classList.add('is-visible', 'is-error');
  } finally {
    reloadButton.disabled = false;
  }
}

searchInput.addEventListener('input', filterProducts);
reloadButton.addEventListener('click', loadProducts);
loadProducts();
