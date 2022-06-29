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

export const signup = async (username, name,email,mobileNumber,password,confirmpassword) => {
    const token = authBasicSignup(username,name,email,mobileNumber,password,confirmpassword);
    const config = {
        headers: {
            Authorization: 'Basic ' + token
        }
    };
    const response = await axios.post(`${urls.service}/customer/add`, config);
    const userDetails = response.data;
    localStorage.setItem(tokenKey, token)
    return userDetails;
}

export const isLoggedIn = () => {
    return localStorage.getItem(tokenKey) !== null;
}

export const getUsername=() =>{
    return window.atob(localStorage.getItem(tokenKey)).split(":").at(0);
}

export const getUserPassword=(username)=>{
    
}

export const changePassword=async(oldPassword,newPassword,confirmPassword) =>{
    const token=authBasicChangePassword(oldPassword,newPassword,confirmPassword);
    const config ={
        headers: {
            Authorization: "Basic" + token
        }
    };
    const responce =await axios.put(`${urls.service}/users/changePassword`,config);
    const statusCode=responce.data;
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
const authBasicChangePassword = (oldPassword,newPassword,confirmPassword) => {
    return window.btoa(oldPassword + ':' + newPassword + ':' + confirmPassword);
}

