const api = 'api';
const baseUrl = process.env.REACT_APP_BE_URL || '';

const apiEndpoints = {
  careerSectors: 'career-sector',
  careerList: 'career-list',
  overview: 'overview',
  skillset: 'SkillSets'
};

const API_ROUTES = {
  getCareerSectors: `${api}/${apiEndpoints.careerSectors}`,
  getCareerList: `${api}/${apiEndpoints.careerList}`,
  getOverview: `${api}/${apiEndpoints.overview}`,
  getSkillset: `${api}/${apiEndpoints.skillset}`

};

export default API_ROUTES;
