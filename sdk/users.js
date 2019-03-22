import { xhr } from './net';

const servicePath = '/users';

/**
 * Login User
 * @param {Object} User
 * @returns {Promise}
 */
export async function login(user) {
  const options = {
    uri: `${servicePath}/login`,
    method: 'POST',
    data: user,
  };

  return xhr(options);
}

/**
 * Logout User
 * @returns {Promise}
 */
export async function logout() {
  const options = {
    uri: `${servicePath}/logout`,
    method: 'POST',
  };

  return xhr(options);
}

/**
 * Get User Card 
 * @returns {Promise}
 */
export async function getUserCadrs() {
  const options = {
    uri: `${servicePath}/cards/`,
  };
}