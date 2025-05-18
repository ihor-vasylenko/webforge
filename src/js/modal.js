(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal1-open]"),
      closeModalBtn: document.querySelector("[data-modal1-close]"),
      modal: document.querySelector("[data-modal1]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (event) => {
        if (event.target === refs.modal) {
          toggleModal();
        }
      });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
})();
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal2-open]"),
      closeModalBtn: document.querySelector("[data-modal2-close]"),
      modal: document.querySelector("[data-modal2]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (event) => {
        if (event.target === refs.modal) {
          toggleModal();
        }
      });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
})();
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal3-open]"),
      closeModalBtn: document.querySelector("[data-modal3-close]"),
      modal: document.querySelector("[data-modal3]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (event) => {
        if (event.target === refs.modal) {
          toggleModal();
        }
      });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
  })();