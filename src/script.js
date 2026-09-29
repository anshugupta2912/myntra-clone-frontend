import "./style.css";

// ================= DATA =================

// Helper to build an Unsplash image URL from its photo id
function img(id) {
  return `https://images.unsplash.com/photo-${id}?w=500&q=80`;
}

// Categories shown in the "Shop by Category" section
const categories = [
  { id: "men", name: "Men", offer: "Up to 60% off", image: img("1503341504253-dff4815485f1") },
  { id: "women", name: "Women", offer: "Up to 70% off", image: img("1515886657613-9f3515b0c78f") },
  { id: "kids", name: "Kids", offer: "Up to 50% off", image: img("1519238263530-99bdd11df2ea") },
  { id: "home", name: "Home & Living", offer: "Up to 55% off", image: img("1586023492125-27b2c045efd7") },
  { id: "beauty", name: "Beauty", offer: "Up to 40% off", image: img("1522335789203-aabd1fc54bc9") },
];

// All products. price = selling price, mrp = original price (both in ₹)
const products = [
  // Men
  { id: 1, brand: "Urban Thread", title: "Men Graphic Print T-shirt", category: "men", price: 499, mrp: 1299, rating: 4.3, ratingCount: 2400, image: img("1503341504253-dff4815485f1") },
  { id: 2, brand: "Basics Co.", title: "Men Pure Cotton Crew Neck T-shirt", category: "men", price: 399, mrp: 799, rating: 4.1, ratingCount: 5100, image: img("1521572163474-6864f9cf17ab") },
  { id: 3, brand: "Oxford Lane", title: "Men Slim Fit Formal Shirt", category: "men", price: 899, mrp: 1999, rating: 4.2, ratingCount: 1200, image: img("1602810318383-e386cc2a3ccf") },
  { id: 4, brand: "Northpeak", title: "Men Solid Bomber Jacket", category: "men", price: 1799, mrp: 3999, rating: 4.4, ratingCount: 860, image: img("1591047139829-d91aecb6caea") },
  { id: 5, brand: "Stride", title: "Men Running Shoes", category: "men", price: 2499, mrp: 4999, rating: 4.5, ratingCount: 3300, image: img("1542291026-7eec264c27ff") },
  { id: 6, brand: "Stride", title: "Unisex Colourblocked Sneakers", category: "men", price: 1999, mrp: 3499, rating: 4.0, ratingCount: 740, image: img("1560769629-975ec94e6a86") },
  { id: 7, brand: "Urban Thread", title: "Men Printed Oversized T-shirt", category: "men", price: 599, mrp: 1199, rating: 3.9, ratingCount: 410, image: img("1618354691373-d851c5c3a990") },
  { id: 8, brand: "Timecraft", title: "Men Analogue Leather Strap Watch", category: "men", price: 1299, mrp: 2999, rating: 4.2, ratingCount: 950, image: img("1524592094714-0f0654e20314") },

  // Women
  { id: 9, brand: "Bloom", title: "Women Floral Fit & Flare Dress", category: "women", price: 1199, mrp: 2799, rating: 4.4, ratingCount: 1800, image: img("1572804013309-59a88b7e92f1") },
  { id: 10, brand: "Aurelia", title: "Women Maxi Gown", category: "women", price: 2299, mrp: 5499, rating: 4.6, ratingCount: 620, image: img("1595777457583-95e059d581b8") },
  { id: 11, brand: "Knit & Co.", title: "Women Crochet Poncho Top", category: "women", price: 849, mrp: 1699, rating: 4.1, ratingCount: 330, image: img("1434389677669-e08b4cac3105") },
  { id: 12, brand: "Move", title: "Women Hooded Tracksuit", category: "women", price: 1499, mrp: 2999, rating: 4.3, ratingCount: 1100, image: img("1515886657613-9f3515b0c78f") },
  { id: 13, brand: "Denim Lab", title: "Women Mom Fit Distressed Jeans", category: "women", price: 1099, mrp: 2499, rating: 4.0, ratingCount: 2700, image: img("1541099649105-f69ad21f3246") },
  { id: 14, brand: "Bloom", title: "Women Cargo Joggers", category: "women", price: 999, mrp: 1999, rating: 4.2, ratingCount: 540, image: img("1594633312681-425c7b97ccd1") },

  // Kids
  { id: 15, brand: "Little Star", title: "Boys Cardigan & Shorts Set", category: "kids", price: 899, mrp: 1799, rating: 4.5, ratingCount: 280, image: img("1519238263530-99bdd11df2ea") },
  { id: 16, brand: "Tiny Tots", title: "Kids Pure Cotton T-shirt", category: "kids", price: 299, mrp: 599, rating: 4.3, ratingCount: 900, image: img("1622290291468-a28f7a7dc6a8") },
  { id: 17, brand: "Little Star", title: "Boys Printed Casual Shirt", category: "kids", price: 549, mrp: 1099, rating: 4.1, ratingCount: 190, image: img("1596755094514-f87e34085b2c") },

  // Home & Living
  { id: 18, brand: "Casa Nova", title: "3 Seater Leatherette Sofa", category: "home", price: 18999, mrp: 32999, rating: 4.4, ratingCount: 120, image: img("1540574163026-643ea20ade25") },
  { id: 19, brand: "Casa Nova", title: "Velvet 3 Seater Sofa", category: "home", price: 21499, mrp: 38999, rating: 4.5, ratingCount: 85, image: img("1555041469-a586c61ea9bc") },
  { id: 20, brand: "Nest", title: "Fabric Accent Armchair", category: "home", price: 7999, mrp: 13999, rating: 4.2, ratingCount: 210, image: img("1586023492125-27b2c045efd7") },

  // Beauty
  { id: 21, brand: "Glow Lab", title: "Makeup Essentials Kit", category: "beauty", price: 1499, mrp: 2499, rating: 4.3, ratingCount: 1600, image: img("1522335789203-aabd1fc54bc9") },
  { id: 22, brand: "Pure Skin", title: "Daily Skincare Routine Set", category: "beauty", price: 1199, mrp: 1799, rating: 4.4, ratingCount: 720, image: img("1571781926291-c477ebfd024b") },
  { id: 23, brand: "Pure Skin", title: "Hydrating Face Moisturiser", category: "beauty", price: 449, mrp: 699, rating: 4.1, ratingCount: 2100, image: img("1556228578-8c89e6adf883") },
  { id: 24, brand: "Botanica", title: "Shampoo & Conditioner Combo", category: "beauty", price: 649, mrp: 999, rating: 4.0, ratingCount: 980, image: img("1631729371254-42c2892f0e6e") },
];

// ================= HELPERS =================

// Discount percentage, e.g. price 499, mrp 999 -> 50
function getDiscount(product) {
  return Math.round(((product.mrp - product.price) / product.mrp) * 100);
}

// Format numbers in Indian style, e.g. 18999 -> "18,999"
function formatPrice(amount) {
  return amount.toLocaleString("en-IN");
}

// Short rating count, e.g. 2400 -> "2.4k"
function formatCount(count) {
  return count >= 1000 ? (count / 1000).toFixed(1) + "k" : count;
}

// ================= RENDERING =================

function renderCategories() {
  const grid = document.getElementById("categoryGrid");

  grid.innerHTML = categories
    .map(
      (category) => `
      <a href="#products" class="category-card" data-category="${category.id}">
        <img src="${category.image}" alt="${category.name}" loading="lazy">
        <div class="category-name">
          ${category.name}
          <span class="category-offer">${category.offer}</span>
        </div>
      </a>
    `
    )
    .join("");
}

function createProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="product-rating">
          ${product.rating.toFixed(1)} <span class="star">★</span>
          <span class="count">| ${formatCount(product.ratingCount)}</span>
        </span>
      </div>
      <div class="product-info">
        <h3 class="product-brand">${product.brand}</h3>
        <p class="product-title">${product.title}</p>
        <div class="product-price">
          <span class="price-current">Rs. ${formatPrice(product.price)}</span>
          <span class="price-original">Rs. ${formatPrice(product.mrp)}</span>
          <span class="price-discount">(${getDiscount(product)}% OFF)</span>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = list.map(createProductCard).join("");
}

// ================= MOBILE MENU =================

function setupMenuToggle() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close the menu after a link is tapped
  nav.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
      nav.classList.remove("open");
    }
  });
}

// ================= START =================

renderCategories();
renderProducts(products);
setupMenuToggle();
