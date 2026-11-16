const normalizeStorefrontText = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("es-AR")
  .trim();

const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

document.querySelectorAll("[data-storefront]").forEach((storefront) => {
  const products = Array.from(storefront.querySelectorAll("[data-product]"));
  const filterButtons = Array.from(storefront.querySelectorAll("[data-filter-value]"));
  const searchInput = storefront.querySelector("[data-product-search]");
  const searchForm = storefront.querySelector("[data-product-search-form]");
  const resultStatus = storefront.querySelector("[data-filter-status]");
  const emptyState = storefront.querySelector("[data-product-empty]");
  const cartAnnouncement = storefront.querySelector("[data-cart-announcement]");
  const quantities = new Map(products.map((product) => [product, 0]));
  let activeCategory = filterButtons.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.filterValue || "all";
  let searchTerm = "";

  products.forEach((product) => {
    product.dataset.searchContent = normalizeStorefrontText([
      product.dataset.productName,
      product.dataset.productCategory,
      product.textContent,
    ].join(" "));
  });

  const applyFilters = () => {
    let visibleProducts = 0;

    products.forEach((product) => {
      const categories = product.dataset.productCategory.split(/\s+/);
      const matchesCategory = activeCategory === "all" || categories.includes(activeCategory);
      const matchesSearch = !searchTerm || product.dataset.searchContent.includes(searchTerm);
      const isVisible = matchesCategory && matchesSearch;

      product.hidden = !isVisible;
      if (isVisible) {
        visibleProducts += 1;
        product.classList.remove("product-filter-reveal");
        void product.offsetWidth;
        product.classList.add("product-filter-reveal");
      }
    });

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filterValue === activeCategory));
    });

    if (resultStatus) {
      const productLabel = visibleProducts === 1 ? "producto" : "productos";
      resultStatus.textContent = `${visibleProducts} ${productLabel} disponibles`;
    }

    if (emptyState) {
      emptyState.hidden = visibleProducts !== 0;
    }
  };

  const updateProductControls = (product) => {
    const quantity = quantities.get(product) || 0;
    const productName = product.dataset.productName;
    const addButton = product.querySelector("[data-add-to-cart]");
    const quantityControl = product.querySelector("[data-quantity-control]");
    const output = product.querySelector("[data-product-quantity]");
    const decreaseButton = product.querySelector('[data-quantity-change="-1"]');
    const increaseButton = product.querySelector('[data-quantity-change="1"]');

    if (addButton) {
      addButton.hidden = quantity > 0;
      addButton.setAttribute("aria-label", `Agregar ${productName} al carrito`);
    }

    if (quantityControl) {
      quantityControl.hidden = quantity === 0;
    }

    if (output) {
      output.value = String(quantity);
      output.textContent = String(quantity);
      output.setAttribute("aria-label", `${quantity} unidades de ${productName}`);
    }

    decreaseButton?.setAttribute("aria-label", `Restar una unidad de ${productName}`);
    increaseButton?.setAttribute("aria-label", `Sumar una unidad de ${productName}`);
  };

  const updateCartSummary = (changedProduct) => {
    let totalItems = 0;
    let totalPrice = 0;

    products.forEach((product) => {
      const quantity = quantities.get(product) || 0;
      totalItems += quantity;
      totalPrice += quantity * Number(product.dataset.productPrice || 0);
    });

    storefront.querySelectorAll("[data-cart-count]").forEach((element) => {
      element.textContent = String(totalItems);
    });

    storefront.querySelectorAll("[data-cart-total]").forEach((element) => {
      element.textContent = currencyFormatter.format(totalPrice);
    });

    if (cartAnnouncement && changedProduct) {
      const quantity = quantities.get(changedProduct) || 0;
      cartAnnouncement.textContent = `${changedProduct.dataset.productName}: ${quantity} ${quantity === 1 ? "unidad" : "unidades"}. Carrito: ${totalItems} ${totalItems === 1 ? "producto" : "productos"}.`;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.filterValue;
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", () => {
    searchTerm = normalizeStorefrontText(searchInput.value);
    applyFilters();
  });

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  storefront.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-cart]");
    const quantityButton = event.target.closest("[data-quantity-change]");
    const actionButton = addButton || quantityButton;

    if (!actionButton || !storefront.contains(actionButton)) {
      return;
    }

    const product = actionButton.closest("[data-product]");
    if (!product) {
      return;
    }

    const currentQuantity = quantities.get(product) || 0;
    const change = addButton ? 1 : Number(quantityButton.dataset.quantityChange);
    quantities.set(product, Math.min(99, Math.max(0, currentQuantity + change)));
    updateProductControls(product);
    updateCartSummary(product);
  });

  products.forEach(updateProductControls);
  updateCartSummary();
  applyFilters();
});
