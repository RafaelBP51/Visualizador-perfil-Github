const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

export const dom = {
  inputSearch,
  btnSearch,
  profileResults,
};

export function renderLoading() {
  profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function renderError(message) {
  profileResults.innerHTML = `<p class="error">${message}</p>`;
}

export function clearProfileResults() {
  profileResults.innerHTML = '';
}

export function renderProfile(userData) {
  const displayName = userData.name || userData.login;

  profileResults.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${displayName}" class="profile-avatar">

      <div class="profile-info">
        <h2>${displayName}</h2>
        <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${userData.followers}</span>
      </div>

      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}
