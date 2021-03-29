
/* eslint-disable camelcase */

import promiseMemoize from 'promise-memoize';
import API_ROUTES from '../helper/network/api-routes';
import { api } from './api';

export const getAllBlogsAllCategories = promiseMemoize(async () => {
  const response = await api('GET', `${API_ROUTES.allBlogsAllcategories}`, false);
  return response;
});

export const getBlogsByCategories = promiseMemoize(async id => {
  const response = await api('GET', `${API_ROUTES.getBlogsBycategory}/${id}`, false);
  return response;
});

export const getArticle = promiseMemoize(async id => {
  const response = await api('GET', `${API_ROUTES.getArticle}/${id}`, false);
  return response;
});
