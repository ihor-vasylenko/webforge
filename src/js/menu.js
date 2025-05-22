(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
      menuLinks: document.querySelectorAll(".mobile-nav-link"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

     refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.modal.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    });
  });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
  })();