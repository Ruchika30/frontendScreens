/* eslint-disable camelcase */

import promiseMemoize from 'promise-memoize';
import API_ROUTES from '../helper/network/api-routes';
import axios from 'axios';
import { api } from './api';

const getSectorsMapper = response => {
  const sectors = [];
  response && response.map(item => sectors.push(item));
  return sectors;
};

const getCareerListMapper = response => {
  const careers = [];
  const { career_list } = response;
  career_list && career_list.map(item => careers.push(item));
  return { careers };
};

export const careerSectors = promiseMemoize(async () => {
  const response = await api('GET', `${API_ROUTES.getCareerSectors}`, false);
  return getSectorsMapper(response);
});

export const careerListsById = promiseMemoize(async (id, pageNo) => {
  const response = await api('GET', `${API_ROUTES.getCareerList}/${id}`, false, pageNo);
  return getCareerListMapper(response);
});

const overviewdataMapper = response => {
  const { course_name, overview_text } = response;
  return {
    ...response,
    courseName: course_name,
    overviewText: overview_text

  };
};

export const getOverviewDetails = promiseMemoize(async id => {
  const response = await api('GET', `${API_ROUTES.getOverview}/${id}`, false);
  return overviewdataMapper(response);
});

export const getSkillset = promiseMemoize(async id => {
  const response = await api('GET', `${API_ROUTES.getSkillset}/${id}`, false);
  return response;
});

export const getRolesAndResponsibilities = promiseMemoize(async id => {
  const response = await api('GET', `${API_ROUTES.getRoles}/${id}`, false);
  return response;
});

export const searchCareerSectors = promiseMemoize(async data => {
  const response = await api('POST', `${API_ROUTES.searchSector}`, data, false, 0);
  return response;
});

export const searchCareer = promiseMemoize(async data => {
  const response = await api('POST', `${API_ROUTES.searchCareer}`, data, false, 0);
  return response;
});

export const careerListMenuItems = promiseMemoize(async id => {
  const response = await api('GET', `${API_ROUTES.careerListMenu}/${id}`, false);
  return response;
});
