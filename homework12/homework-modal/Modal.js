export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector("#modal-close-button");
    this.handleClose = () => this.close();
    this.handleOverlayClick = (e) => {
     //тут я не уверен в написании но пусть будет
      if (this.shouldCloseOnOverlay && e.target === this.overlay) {
        this.close();
      }
    };
    
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.#initClose();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.#destroyClose();
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => this.open());
    }
  }

  #initClose() {
    this.closeButton.addEventListener("click", this.handleClose);
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.handleOverlayClick);
    }
  }

  #destroyClose() {
    this.closeButton.removeEventListener("click", this.handleClose);
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener("click", this.handleOverlayClick);
    }
  }
}