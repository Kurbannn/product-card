const STORAGE_KEY = 'users_data';

const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');
const infoMessage = document.getElementById('info-message');
const usersContainer = document.getElementById('users-container');
const usersList = document.getElementById('users-list');
const getAllBtn = document.getElementById('get-all-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');

let currentUsers = [];

function showLoading() {
  loadingMessage.style.display = 'block';
  errorMessage.style.display = 'none';
  infoMessage.style.display = 'none';
  usersContainer.style.display = 'none';
}

function showError() {
  loadingMessage.style.display = 'none';
  errorMessage.style.display = 'block';
  infoMessage.style.display = 'none';
  usersContainer.style.display = 'none';
}

function showInfo(message, duration = 2000) {
  infoMessage.textContent = message;
  infoMessage.style.display = 'block';
  loadingMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  
  setTimeout(() => {
    infoMessage.style.display = 'none';
  }, duration);
}

function renderUsers(users) {
  loadingMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  usersContainer.style.display = 'block';
  
  if (!users || users.length === 0) {
    usersList.innerHTML = '<div class="empty-message">Нет пользователей для отображения</div>';
    return;
  }
  
  usersList.innerHTML = users.map(user => `
    <div class="user-card">
      <button class="delete-user-btn" data-id="${user.id}">x</button>
      <div class="user-name">${escapeHtml(user.name)} ${escapeHtml(user.surname)}</div>
      <div class="user-telegram">${escapeHtml(user.telegram) || 'telegram не указан'}</div>
      <div class="user-details">
        ${user.age ? `<span>${user.age} лет</span>` : ''}
        ${user.city ? `<span>${escapeHtml(user.city)}</span>` : ''}
        ${user.phone ? `<span>${escapeHtml(user.phone)}</span>` : ''}
      </div>
    </div>
  `).join('');
  

  document.querySelectorAll('.delete-user-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const userId = parseInt(btn.dataset.id);
      deleteUserById(userId);
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


function getUsersFromLocalStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
}

function saveUsersToLocalStorage(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function deleteAllUsersFromLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

async function fetchUsers() {
  const response = await fetch('./users.json');
  
  if (!response.ok) {
    throw new Error(`Ошибка загрузки: ${response.status}`);
  }
  
  const data = await response.json();
  return data.users;
}


async function loadUsers() {
  showLoading();
  
  try {
    const users = await fetchUsers();
    currentUsers = users;
    saveUsersToLocalStorage(currentUsers);
    renderUsers(currentUsers);
    showInfo(`Загружено ${users.length} пользователей`);
  } catch (error) {
    console.error('Ошибка:', error);
    showError();
  }
}

async function getAllUsers() {
  if (currentUsers.length === 0) {
    await loadUsers();
  } else {
    renderUsers(currentUsers);
    showInfo(`Отображено ${currentUsers.length} пользователей`);
  }
}

async function loadData() {
  showLoading();
  
  const savedUsers = getUsersFromLocalStorage();
  
  if (savedUsers && savedUsers.length > 0) {
    currentUsers = savedUsers;
    renderUsers(currentUsers);
    showInfo(`Загружено из кэша ${currentUsers.length} пользователей`);
  } else {
    await loadUsers();
  }
}

function deleteAllUsers() {
  if (currentUsers.length === 0) {
    showInfo('Нет пользователей для удаления');
    return;
  }
  
  currentUsers = [];
  saveUsersToLocalStorage(currentUsers);
  renderUsers(currentUsers);
  showInfo('Все пользователи удалены');
}

function deleteUserById(userId) {
  const deletedUser = currentUsers.find(u => u.id === userId);
  
  if (!deletedUser) {
    showInfo('Пользователь не найден');
    return;
  }
  
  currentUsers = currentUsers.filter(user => user.id !== userId);
  saveUsersToLocalStorage(currentUsers);
  renderUsers(currentUsers);
  showInfo(`Удален пользователь: ${deletedUser.name} ${deletedUser.surname}`);
}

function init() {
  loadData();
  getAllBtn.addEventListener('click', getAllUsers);
  deleteAllBtn.addEventListener('click', deleteAllUsers);
}

init();