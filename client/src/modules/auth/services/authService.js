import { postFetch } from '@utils/fetcher';

const authBaseUrl = '/user';

export async function login(email, password) {
  try {
    const data = await postFetch(`${authBaseUrl}/login`, { email, password });

    return data;
  } catch (error) {
    return { error: { code: error.data?.code || error.data?.message || error.message } };
  }
}

export async function forgotPassword(email) {
  try {
    const data = await postFetch(`${authBaseUrl}/forgot-password`, { email });

    return data;
  } catch (error) {
    return { error: { code: error.data || error.message } };
  }
}

export default { login, forgotPassword };
