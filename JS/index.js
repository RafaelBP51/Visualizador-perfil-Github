const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const baseUrl = 'https://api.github.com';

async function getUserProfile() {

    const userName = inputSearch.value.trim();

    if (userName.length === 0) {

        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

    try {

        const response = await fetch(`${baseUrl}/users/${userName}`);

        if (!response.ok) {
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
            profileResults.innerHTML = "";
            return;
        }

        const userData = await response.json();
        
        console.log(userData);

         profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </div>`;

    } catch (error) {
        console.error('Erro na busca:', error);
        alert('Não foi possível encontrar o usuário. Verifique o nome digitado.');
        profileResults.innerHTML = "";
    }
}

btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        getUserProfile();
    }
});

