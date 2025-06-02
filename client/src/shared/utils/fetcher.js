import { useState } from 'react';

import axios from 'axios';

import { API_BASE_URL, API_CLIENT_TOKEN } from '@constants/env';

// Default configuration for axios
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.ClientToken = API_CLIENT_TOKEN;

export function getAuthHeaders() {
  const userToken = localStorage.getItem('userToken');
  const soarId = localStorage.getItem('soarId');

  return userToken ? { Authorization: userToken, SoarId: soarId } : {};
}

/**
 * Default fetch for "get" methods
 * @param {string} url
 * @returns `Promise`
 */
export async function getFetch(url, params = {}, config = {}) {
  if (!url) {
    return;
  }

  const defaultHeaders = getAuthHeaders();
  const customHeaders = config.headers || {};

  const headers = { ...defaultHeaders, ...customHeaders };

  try {
    return await axios.get(url, { ...config, params, headers }).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
}

/**
 * Default fetch for "post" methods
 * @param {string} url
 * @param {object} data
 * @param {object} config
 * @returns `Promise`
 */
export async function postFetch(url, data = {}, config = {}) {
  if (!url) {
    return;
  }

  const defaultHeaders = getAuthHeaders();
  const customHeaders = config.headers || {};

  // Combine the headers
  const headers = { ...defaultHeaders, ...customHeaders };

  try {
    return await axios.post(url, data, { ...config, headers }).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
}

/**
 * Default fetch for "put" methods
 * @param {string} url
 * @param {object} data
 * @returns `Promise`
 */
export async function putFetch(url, data = {}, params = {}) {
  if (!url) {
    return;
  }

  const headers = getAuthHeaders();

  try {
    return await axios.put(url, data, { headers, params }).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
}

/**
 * Default fetch for "patch" methods
 * @param {string} url
 * @param {object} data
 * @returns `Promise`
 */
export async function patchFetch(url, data = {}) {
  if (!url) {
    return;
  }

  const headers = getAuthHeaders();

  try {
    return await axios.patch(url, data, { headers }).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
}

/**
 * Default fetch for "delete" methods
 * @param {string} url
 * @returns `Promise`
 */
export async function deleteFetch(url, data = {}) {
  if (!url) {
    return;
  }

  const headers = getAuthHeaders();

  try {
    return await axios.delete(url, { headers, data }).then(res => res.data);
  } catch (error) {
    throw error.response || error;
  }
}

/**
 * Hook to handle loading, error, and data from url
 * @params {string} url
 * @params {string} method
 * @params {string} data
 * @returns {{loading: boolean, error: string, data: Object, sendRequest: Function}}
 */
export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [resData, setData] = useState(undefined);

  const loadData = async (method = 'get', data = {}) => {
    setLoading(true);
    setError(undefined);
    switch (method.toLowerCase()) {
      case 'get':
        return await getFetch(url, data);
      case 'post':
        return await postFetch(url, data);
      case 'patch':
        return await patchFetch(url, data);
      case 'delete':
        return await deleteFetch(url);
    }
  };

  const sendRequest = async (method = 'get', data = {}) => {
    try {
      const res = await loadData(method, data);
      setData(res);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data: resData, error, loading, sendRequest };
}
