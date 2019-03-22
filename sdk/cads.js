import { xhr } from './net';

const servicePath = '/cards';

/**
 * Get Card by Id
 * @returns {Promise}
 */
export async function get(id) {
  const options = {
    uri: `${servicePath}`,
    query: id,
  };

  return xhr(options);
}