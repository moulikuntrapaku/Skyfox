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
    return window.atob(localStorage.getItem(tokenKey)).split(":").at(0);
}

export const getUserPassword=(username)=>{
    
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
    console.log(response);
    const statusCode = response.data;
    return statusCode;
}


export const logout = () => {
    localStorage.removeItem(tokenKey);
};

const authBasic = (username, password) => {
    return window.btoa(username + ':' + password);
}
const authBasicSignup = (username, name,email,mobileNumber,password,confirmpassword) => {
    return window.btoa(username + ':' + name+ ':' + email+ ':' + mobileNumber+ ':' + password+ ':' + confirmpassword);
}

