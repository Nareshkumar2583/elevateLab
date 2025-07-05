const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = 'Loading...';

  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      displayUsers(users);
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

function displayUsers(users) {
  userContainer.innerHTML = '';
  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(div);
  });
}

reloadBtn.addEventListener('click', fetchUserData);

// Load on first visit
fetchUserData();
