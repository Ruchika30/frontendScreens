const api = 'api';
const baseUrl = process.env.REACT_APP_BE_URL || '';

const prefixCareersSector = 'career-sector';
const prefixCareerList = 'career-list';

const apiEndpoints = {
  careerSectors: 'career-sector',
  careerList: 'career-list',
  overview: 'overview',
  skillset: 'SkillSets',
  roles: 'Roles',
  search: 'search',
  menu: 'menu',
  salary: 'salary'
};

const API_ROUTES = {
  getCareerSectors: `${api}/${apiEndpoints.careerSectors}`,
  getCareerList: `${api}/${apiEndpoints.careerList}`,
  getOverview: `${api}/${apiEndpoints.overview}`,
  getSkillset: `${api}/${apiEndpoints.skillset}`,
  getRoles: `${api}/${apiEndpoints.roles}`,
  searchSector: `${api}/${prefixCareersSector}/${apiEndpoints.search}`,
  searchCareer: `${api}/${prefixCareerList}/${apiEndpoints.search}`,
  careerListMenu: `${api}/${apiEndpoints.menu}`,
  getAvgSalary: `${api}/${apiEndpoints.salary}`

};

export default API_ROUTES;
