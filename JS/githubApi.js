const baseUrl = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
  const response = await fetch(`${baseUrl}/users/${userName}`);

  if (!response.ok) {
    const error = new Error('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
    error.status = response.status;
    throw error;
  }

  return response.json();
}
