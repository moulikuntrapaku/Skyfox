import axios from "axios";
import {urls} from "../config/env-config";

const tokenKey = 'skyfox_token';

export const authHeader = () => {
    return {
        headers: {
            Authorization: 'Basic ' + localStorage.getItem(tokenKey)
        }
    };
}

export const login = async (username, password) => {
    const token = authBasic(username, password);
    const config = {
        headers: {
            Authorization: 'Basic ' + token
        }
    };
    const response = await axios.get(`${urls.service}/login`, config);
    const userDetails = response.data;
    localStorage.setItem(tokenKey, token)
    return userDetails;
}

export const profile = async (username, password) => {
    const token = authBasic(username, password);
    const config = {
        headers: {
            Authorization: 'Basic ' + token
        }
    };
    const response = await axios.get(`${urls.service}/profile`, config);
    const userDetails = response.data;
    localStorage.setItem(tokenKey, token)
    return userDetails;
}

export const signup = async (name,username,email,mobileNumber,password) => {
    const config = {
        headers: {
            
       'Content-Type':'application/json',
        }
    };
    const payload = {'name':name,
    'phoneNumber':mobileNumber,
    'email':email,
    'user':{
        'username' : username,
         'password':password
    }}
    
    const response = await axios.post(`${urls.service}/customer/add`,payload,config);
    const status = response.data;
    return status;
}

export const isLoggedIn = () => {
    return localStorage.getItem(tokenKey) !== null;
}

export const getUsername=() =>{
    return window.atob(localStorage.getItem(tokenKey)).split(":")[0];
}

export const getUserRole= async () =>{
    const token=localStorage.getItem(tokenKey);
    console.log("token"+token);
    const config = {
        headers: {
            Authorization: 'Basic ' + token, 
            'Content-Type':'application/json'
        }
    }; 
    const response = await axios.get(`${urls.service}/user`, config);
   
    return response.data["role"]==="ADMIN";
}

export const changePassword=async(oldPassword,newPassword) =>{
    const token=localStorage.getItem(tokenKey);
    console.log("token"+token);
    const config = {
        headers: {
            Authorization: 'Basic ' + token, 
            'Content-Type':'application/json'
        }
    }; 

    const payload={
        "userName":getUsername(),
        "oldPassword":oldPassword,
        "newPassword":newPassword
    }
    const response =await axios.put(`${urls.service}/user/password`,payload,config);
    const statusCode = response.data;
    return statusCode;
}

export const customer = async ()=>{
    const username = getUsername();
    const token=localStorage.getItem(tokenKey);
    const config = {
        headers: {
            Authorization: 'Basic ' + token, 
            'Content-Type':'application/json',
        },
        params: { username:username },
    }; 
   
   return await axios.get(`${urls.service}/customer`,config);}


export const logout = () => {
    localStorage.removeItem(tokenKey);
};

const authBasic = (username, password) => {
    return window.btoa(username + ':' + password);
}


