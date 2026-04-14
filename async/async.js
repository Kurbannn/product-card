const STORAGE_KEY = 'users_data';
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');
const infoMessage = document.getElementById('info-message');
const usersContainer = document.getElementById('users-container');
const usersList = document.getElementById('users-list');
const getAllBtn = document.getElementById('get-all-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const userTemplate = document.getElementById('user-card-template');
let currentUsers = [];
let totalUsersCount = 0;


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

// Низам вот твой template
function createUserCard(user) {
  const cardFragment = userTemplate.content.cloneNode(true);
  
  const deleteBtn = cardFragment.querySelector('.delete-user-btn');
  deleteBtn.dataset.id = user.id;
  
  const userName = cardFragment.querySelector('.user-name');
  userName.textContent = `${escapeHtml(user.name)} ${escapeHtml(user.surname)}`;
  
  const userTelegram = cardFragment.querySelector('.user-telegram');
  userTelegram.textContent = user.telegram ? escapeHtml(user.telegram) : 'telegram не указан';
  
  const userDetails = cardFragment.querySelector('.user-details');
  
  if (user.age) {
    const ageSpan = document.createElement('span');
    ageSpan.textContent = `${user.age} лет`;
    userDetails.appendChild(ageSpan);
  }
  
  if (user.city) {
    const citySpan = document.createElement('span');
    citySpan.textContent = escapeHtml(user.city);
    userDetails.appendChild(citySpan);
  }
  
  if (user.phone) {
    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = escapeHtml(user.phone);
    userDetails.appendChild(phoneSpan);
  }
  
  return cardFragment;
}

function renderUsers(users) {
  loadingMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  usersContainer.style.display = 'block';
  
  usersList.innerHTML = '';
  
  if (!users || users.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = 'Нет пользователей для отображения';
    usersList.appendChild(emptyMessage);
    return;
  }
  
  users.forEach(user => {
    const userCard = createUserCard(user);
    usersList.appendChild(userCard);
  });
  
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
    totalUsersCount = users.length;
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
  const isAllDisplayed = currentUsers.length === totalUsersCount;
  if (!isAllDisplayed) {
    showInfo('Загружаем всех пользователей...');
    await loadUsers();
  } else {
    showInfo('Все пользователи уже отображены');
  }
}

async function loadData() {
  showLoading();
  const savedUsers = getUsersFromLocalStorage();
  
  if (savedUsers && savedUsers.length > 0) {
    currentUsers = savedUsers;
    totalUsersCount = savedUsers.length;
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