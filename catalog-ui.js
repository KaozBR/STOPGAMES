(function () {
  const config = window.catalogConfig;
  if (!config) return;

  const pageSize = 16;
  const search = document.querySelector("[data-catalog-search]");
  const filters = document.querySelector("[data-catalog-filters]");
  const grid = document.querySelector("[data-catalog-grid]");
  const counter = document.querySelector("[data-catalog-counter]");
  const pageInfo = document.querySelector("[data-catalog-page-info]");
  const pagination = document.querySelector("[data-catalog-pagination]");
  const empty = document.querySelector("[data-catalog-empty]");
  let activeCategory = "Todos";
  let currentPage = 1;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function filteredItems() {
    const term = search.value.trim().toLocaleLowerCase("pt-BR");
    return config.items.filter(function (item) {
      const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
      const matchesTerm = !term || (item.title + " " + item.category).toLocaleLowerCase("pt-BR").includes(term);
      return matchesCategory && matchesTerm;
    });
  }

  function whatsappItemLink(item) {
    const message = "Olá! Vim pelo catálogo da StopGames e gostaria de consultar o valor de " + item.title + ".";
    return "https://wa.me/5551999360384?text=" + encodeURIComponent(message);
  }

  function cardTemplate(item) {
    const title = escapeHtml(item.title);
    const category = escapeHtml(item.category);
    const platform = escapeHtml(config.platform);
    const imageAlt = config.kind === "game"
      ? "Capa original de " + platform + " para " + title
      : "Imagem de referência de " + title;
    const media = item.image
      ? '<div class="inventory-media">' +
          '<img loading="lazy" src="' + escapeHtml(item.image) + '" alt="' + imageAlt + '">' +
          '<span class="inventory-fallback">' + title + '</span>' +
        '</div>'
      : '<div class="inventory-media show-fallback inventory-media-text" role="img" aria-label="Sem capa original disponível: ' + title + '">' +
          '<span class="inventory-fallback">' + title + '</span>' +
        '</div>';
    const notice = item.notice ? '<p class="inventory-notice">' + escapeHtml(item.notice) + '</p>' : '';
    const action = config.contactForPrice
      ? '<a class="catalog-whatsapp-cta" href="' + escapeHtml(whatsappItemLink(item)) + '" target="_blank" rel="noopener noreferrer">Consultar valor no WhatsApp <span aria-hidden="true">↗</span></a>'
      : config.showItemPrice === false
        ? ''
        : '<div class="price-slot"><span>PREÇO</span><strong>R$ —</strong></div>';
    return '<article class="inventory-card' + (config.kind === "game" ? ' is-game' : '') + (item.notice ? ' has-notice' : '') + '">' +
      media +
      '<div class="inventory-card-body">' +
        '<p class="inventory-category">' + category + '</p>' +
        '<h2>' + title + '</h2>' +
        notice +
        action +
        '<p class="inventory-platform">' + platform + '</p>' +
      '</div>' +
    '</article>';
  }

  function renderFilters() {
    const categories = ["Todos"].concat(Array.from(new Set(config.items.map(function (item) { return item.category; }))));
    filters.innerHTML = categories.map(function (category) {
      const active = category === activeCategory;
      return '<button class="filter' + (active ? ' is-active' : '') + '" type="button" data-category="' + escapeHtml(category) + '"' + (active ? ' aria-pressed="true"' : ' aria-pressed="false"') + '>' + escapeHtml(category) + '</button>';
    }).join("");
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      pagination.hidden = true;
      pagination.innerHTML = "";
      return;
    }

    const buttons = Array.from({ length: totalPages }, function (_, index) {
      const page = index + 1;
      const current = page === currentPage;
      return '<button class="page-number' + (current ? ' is-current' : '') + '" type="button" data-page="' + page + '"' + (current ? ' aria-current="page"' : '') + ' aria-label="Página ' + page + '">' + page + '</button>';
    }).join("");

    pagination.hidden = false;
    pagination.innerHTML = '<button class="page-nav" type="button" data-page="' + (currentPage - 1) + '"' + (currentPage === 1 ? ' disabled' : '') + '>← Anterior</button>' +
      '<div class="page-numbers">' + buttons + '</div>' +
      '<button class="page-nav" type="button" data-page="' + (currentPage + 1) + '"' + (currentPage === totalPages ? ' disabled' : '') + '>Próxima →</button>';
  }

  function bindFallbacks() {
    grid.querySelectorAll("img").forEach(function (image) {
      image.addEventListener("error", function () {
        image.classList.add("is-fallback");
        image.parentElement.classList.add("show-fallback");
      });
    });
  }

  function render() {
    const items = filteredItems();
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;
    const pageItems = items.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    counter.textContent = items.length + (items.length === 1 ? " item" : " itens");
    pageInfo.textContent = items.length ? "Página " + currentPage + " de " + totalPages + " · 16 por página" : "";
    grid.innerHTML = pageItems.map(cardTemplate).join("");
    empty.hidden = items.length !== 0;
    renderFilters();
    renderPagination(totalPages);
    bindFallbacks();
  }

  search.addEventListener("input", function () {
    currentPage = 1;
    render();
  });

  filters.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    currentPage = 1;
    render();
  });

  pagination.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-page]");
    const page = Number(button && button.dataset.page);
    if (!button || button.disabled || !Number.isInteger(page) || page < 1) return;
    currentPage = page;
    render();
    document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  render();
}());
