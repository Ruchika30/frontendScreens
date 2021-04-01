
import axios from 'axios';
// import { Config } from '../Config'
// import AsyncStorage from '@react-native-community/async-storage'
// import NavigationService from '../Services/NavigationService'

export async function api(type, requestURL, data, isSecure = false, pageNo) {
  // const token = await AsyncStorage.getItem('authToken')

  const headers = {
    Accept: '*/*',
    'Content-Type': 'application/json',
    pageno: pageNo || null,
    pagesize: 8
  };

  if (type === 'GET' || type === 'DELETE') {
    return axios({
      method: type,
      baseURL: process.env.REACT_APP_BE_URL,
      url: requestURL,
      responseType: 'json',
      headers
    })
      .then(response => response.data)
      .catch(async error => {
        console.log('error--', error);
        return error.response.data;
      });
  }

  return axios({
    method: type,
    baseURL: process.env.REACT_APP_BE_URL,
    url: requestURL,
    data,
    responseType: 'json',
    headers
  })
    .then(response => {
      debugger;
      return console.log('resp---', response);
    })
    .catch(async error => {
      console.log('error--', error);
      return error.response.data;
    });
}

