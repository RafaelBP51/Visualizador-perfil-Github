import { fetchGitHubUser } from './githubApi.js';
import { dom, renderLoading, renderError, renderProfile, clearProfileResults } from './profileRenderer.js';

const { inputSearch, btnSearch } = dom;

function getSearchTerm() {
  return inputSearch.value.trim();
}

function isValidSearch(userName) {
  return userName.length > 0;
}

async function handleSearch() {
  const userName = getSearchTerm();

  if (!isValidSearch(userName)) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  renderLoading();

  try {
    const userData = await fetchGitHubUser(userName);
    renderProfile(userData);
  } catch (error) {
    renderError(error.message || 'Não foi possível encontrar o usuário. Verifique o nome digitado.');
    console.error('Erro na busca:', error);
    alert(error.message || 'Ocorreu um erro ao buscar o perfil.');
  }
}

btnSearch.addEventListener('click', handleSearch);

inputSearch.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

