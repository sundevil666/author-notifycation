import axios from '../plugins/axios';

/**
 * function login. Make login request to API
 * @param email
 * @param password
 * @return {Promise<void>}
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      '/auth/login',
      JSON.stringify({ email, password }),
    );
    console.log(response);
    return response.data
  } catch (err) {

    return Promise.reject(err)
  }
}
