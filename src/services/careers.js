
import promiseMemoize from 'promise-memoize';
import API_ROUTES from '../helper/network/api-routes';
import axios from 'axios'
import {api} from './api'


const getSectorsMapper = (response) =>{
    const sectors = []
    response && response.map(item => sectors.push(item))
    return sectors
}

const getCareerListMapper = (response) =>{
    const careers = []
    const { career_list } = response
   career_list && career_list.map(item => careers.push(item))
    return {careers}
}


export const careerSectors = async() =>{
   const response = await api('GET', `${API_ROUTES.getCareerSectors}`, false)
    return  getSectorsMapper(response)
        
}


export const careerListsById = async (id) => {
    const response = await api('GET', `${API_ROUTES.getCareerList}/${id}`, false)
   return getCareerListMapper(response)
   
}



export const overview = async (id) => {
    const response = await api('GET', `${API_ROUTES.getOverview}/${id}`, false)
    return response
}

 

//  export const careerSectors = promiseMemoize(async () =>{
//      const options = {
//          url: `${API_ROUTES.getCareerSectors}`,
//          method: 'GET',
//         //  headers: {
//         //      'Accept': 'application/json',
//         //      'Content-Type': 'application/json;charset=UTF-8'
//         //  },
//      };

//      axios(options)
//          .then(response => {
//              debugger;
//              return response
//          });
//     } 
// );




