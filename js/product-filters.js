document.querySelectorAll("[data-product-filter]").forEach((filterGroup) => {
  const targetSelector = filterGroup.dataset.filterTarget;
  const productContainer = targetSelector ? document.querySelector(targetSelector) : filterGroup.parentElement;

  if (!productContainer) {
    return;
  }

  const buttons = Array.from(filterGroup.querySelectorAll("[data-filter-value]"));
  const products = Array.from(productContainer.querySelectorAll("[data-product-category]"));
  const status = filterGroup.querySelector("[data-filter-status]");

  if (!buttons.length || !products.length) {
    return;
  }

  const applyFilter = (category) => {
    let visibleProducts = 0;
    productContainer.classList.toggle("product-filter-active", category !== "all");
    productContainer.dataset.activeFilter = category;

    products.forEach((product) => {
      const categories = product.dataset.productCategory.split(" ");
      const isVisible = category === "all" || categories.includes(category);
      product.hidden = !isVisible;

      if (isVisible) {
        visibleProducts += 1;

        if (category !== "all" && product.matches("details")) {
          product.open = true;
        }

        product.classList.remove("product-filter-reveal");
        void product.offsetWidth;
        product.classList.add("product-filter-reveal");
      }
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filterValue === category));
    });

    if (status) {
      status.textContent = `${visibleProducts} ${visibleProducts === 1 ? "producto" : "productos"}`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filterValue));
  });

  const initiallySelected = buttons.find((button) => button.getAttribute("aria-pressed") === "true") || buttons[0];
  applyFilter(initiallySelected.dataset.filterValue);
});
