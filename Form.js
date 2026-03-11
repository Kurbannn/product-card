// Класс для управления формой
class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    // 2 Метод для получения всех значений форм
    getValues() {
        if (!this.form) return null;
        const formData = new FormData(this.form);
        return Object.fromEntries(formData.entries());
    }

    // 2 Метод для проверки валидности форм
    isValid() {
        if (!this.form) return false;
        return this.form.checkValidity();
    }

    // III. Метод для сброса значений форм
    reset() {
        if (!this.form) return;
        this.form.reset();
    }
}

export default Form;