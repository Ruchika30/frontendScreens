

import axios from 'axios'
// import { Config } from '../Config'
// import AsyncStorage from '@react-native-community/async-storage'
// import NavigationService from '../Services/NavigationService'


export async function api(type, requestURL, data, isSecure = false) {
    // const token = await AsyncStorage.getItem('authToken')


    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    if (type === 'GET' || type === 'DELETE') {
        return axios({
            method: type,
            baseURL: process.env.REACT_APP_BE_URL,
            url: requestURL,
            responseType: 'json',
            headers: headers,
        })
            .then((response) => response.data)
            .catch(async (error) => {
                console.log("error--", error)
                return error.response.data
            })
    } else {
        return axios({
            method: type,
            // baseURL: process.env.REACT_APP_BE_URL,
            url: requestURL,
            data: data,
            responseType: 'json',
            headers: headers,
        })
            .then((response) => response.data)
            .catch(async (error) => {
               
                return error.response.data
            })
    }
}

