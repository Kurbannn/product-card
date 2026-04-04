export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector("#modal-close-button");
    this.handleClose = () => this.close();
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.#addCloseListeners();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.#removeCloseListeners();
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

  #addCloseListeners() {
    this.closeButton.addEventListener("click", this.handleClose);
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.handleClose);
    }
  }

  #removeCloseListeners() {
    this.closeButton.removeEventListener("click", this.handleClose);
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener("click", this.handleClose);
    }
  }
}