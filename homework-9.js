let user = null;

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

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getFormData(formElement) {
    const formData = new FormData(formElement);
    return Object.fromEntries(formData.entries());
}

// №5. Модальное окно
const modal = document.getElementById('registrationModal');
const openBtn = document.getElementById('registration-btn');
const closeBtn = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');
const body = document.body;

function openModal() {
    modal.classList.add('modal-showed');
    body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.remove('modal-showed');
    body.classList.remove('modal-open');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
        closeModal();
    }
});

// №6. Форма регистрации
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        alert('Регистрация отклонена: заполните форму корректно.');
        return;
    }

    const formData = new FormData(registrationForm);
    const formValue = Object.fromEntries(formData.entries());

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
    closeModal();

    registrationForm.querySelectorAll('input').forEach((input) => {
        input.classList.remove('error', 'valid');
    });
});