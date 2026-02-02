(() => {
  document.addEventListener("click", (e) => {
    // Додати атрибут data-modal-open="modal-1" на кнопку відкриття
    const openBtn = e.target.closest("[data-modal-open]");
    // Додати атрибут data-modal-close на кнопку закриття
    const closeBtn = e.target.closest("[data-modal-close]");

    if (openBtn) {
      const modalId = openBtn.dataset.modalOpen;
      // Додати атрибут data-modal="modal-1" на бекдроп модалки
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      modal?.classList.add("is-open");
    }

    if (closeBtn) {
      const modal = closeBtn.closest("[data-modal]");
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      modal?.classList.remove("is-open");
    }
  });
})();
