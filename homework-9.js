import Form from './Form.js';
import { Modal } from './Modal.js';  // ИСПРАВЛЕНО: с фигурными скобками, потому что это именованный экспорт

export let user = null;

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function getFormData(formElement) {
    const formData = new FormData(formElement);
    return Object.fromEntries(formData.entries());
}

// №4. Форма подписки
const emailForm = document.querySelector('.subscription-form');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email) {
        console.log('Ошибка: email не заполнен');
        return;
    }

    if (!validateEmail(email)) {
        console.log('Ошибка: некорректный формат email');
        return;
    }

    const formData = getFormData(form);
    console.log(formData);
    emailForm.reset();
});

// №5. Модальное окно
const registrationModal = new Modal('registrationModal');
registrationModal.setOpenButton('registration-btn');

// №6. Форма регистрации
const registrationForm = new Form('registrationForm');

registrationForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
        registrationForm.form.reportValidity();
        alert('Регистрация отклонена: заполните форму корректно.');
        return;
    }

    const formValue = registrationForm.getValues();

    if (formValue.password !== formValue.confirmPassword) {
        alert('Регистрация отклонена: пароли не совпадают.');
        return;
    }
    
    user = {
        ...formValue,
        createdOn: new Date().toISOString()
    };
    
    delete user.confirmPassword;

    console.log('Регистрация успешна!');
    console.log('Данные пользователя:', user);

    registrationForm.reset();
    
    registrationForm.form.querySelectorAll('input').forEach((input) => {
        input.classList.remove('error', 'valid');
    });
    
    registrationModal.close();
});