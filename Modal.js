export class Modal {
    constructor(modalId, openButtonId = null) {
        this.modal = document.getElementById(modalId);
        this.addEventListeners();
        
        if (openButtonId) {
            this.setOpenButton(openButtonId);
        }
    }

    open() {
        if (this.modal) {
            this.modal.classList.add('modal-showed');
            document.body.classList.add('modal-open');
        }
    }

    close() {
        if (this.modal) {
            this.modal.classList.remove('modal-showed');
            document.body.classList.remove('modal-open');
        }
    }

    isOpen() {
        return this.modal && this.modal.classList.contains('modal-showed');
    }

    addEventListeners() {
        if (!this.modal) return;

        const closeBtn = this.modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        const overlay = this.modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.close());
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }

    setOpenButton(buttonId) {
        const openBtn = document.getElementById(buttonId);
        if (openBtn) {
            openBtn.addEventListener('click', () => this.open());
        }
    }
}