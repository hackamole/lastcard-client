import { stringify } from 'query-string';
import { api } from '../config';

class NetworkError extends Error {
  constructor(message, response, json) {
    super(message);
    this.response = response;
    this.data = json;
  }
}

/**
 *
 * @param {Object} opt
 * @returns {Promise}
 */
export async function xhr(opt) {
  const {
    uri,
    method = 'GET',
    data,
    query,
    headers = {
      Accept: 'application/json',
      'Accept-Language': 'pt',
      'Content-Type': 'application/json',
    },
  } = opt;

  const options = {
    method,
    // mode: 'cors',
    headers: typeof Headers === 'undefined' ? headers : new Headers(headers),
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  let url = `${api.baseURL}${uri}`;
  if (query) {
    url += `?${stringify(query)}`;
  }
  console.log('DEBUG URL', );
  
  // start request
  return fetch(url, options).then((res) => {
    if (res.status === 204) {
      return null;
    }

    if (res.status >= 400) {
      try {
        return res.json().then((errorResp) => {
          throw new NetworkError(res.status, res, errorResp);
        }).catch((e) => {
          throw new NetworkError(res.status, res, e.data);
        });
      } catch (e) {
        throw new NetworkError(res.status, res);
      }
    }

    if (res.ok) {
      return res.json();
    }
    return null;
  });
}

export { xhr as default };
