const api = 'api';
const baseUrl = process.env.REACT_APP_BE_URL || '';

const prefixCareersSector = 'career-sector';
const prefixCareerList = 'career-list';
const prefixBlog = 'blog';

const apiEndpoints = {
  careerSectors: 'career-sector',
  careerList: 'career-list',
  overview: 'overview',
  skillset: 'SkillSets',
  roles: 'Roles',
  search: 'search',
  menu: 'menu',
  salary: 'salary',
  videos: 'videos',
  category: 'category',
  articles: 'articles'

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
  getAvgSalary: `${api}/${apiEndpoints.salary}`,
  getVideos: `${api}/${apiEndpoints.videos}`,
  allBlogsAllcategories: `${api}/${prefixBlog}/${apiEndpoints.category}`,
  getBlogsBycategory: `${api}/${prefixBlog}/${apiEndpoints.category}`,
  getArticle: `${api}/${prefixBlog}/${apiEndpoints.articles}`,
  postBlogdata: `${api}/blog/category/add`

};

export default API_ROUTES;
