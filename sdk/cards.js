import { xhr } from './net';

const servicePath = '/cards';

/**
 * Get Card by Id
 * @returns {Promise}
 */
export async function get() {
  const options = {
    uri: `${servicePath}/`,
  };

  return xhr(options);
}