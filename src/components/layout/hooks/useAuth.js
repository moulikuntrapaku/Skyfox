import {useEffect, useState} from "react";
import {isLoggedIn, login, logout} from "../../../helpers/authService";
import Signup from "../../signup/Signup";

export default () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        setIsAuthenticated(isLoggedIn());
    }, []);

    const handleLogin = async (username, password) => {
        const userDetails = await login(username, password);
        setIsAuthenticated(true);
        return userDetails;
    };

    const handleSignUp=async(name,username,email,mobileNumber, password,confirmPassword)=>{
        const customerDetails=await Signup(name,username,email,mobileNumber, password,confirmPassword);
        setIsAuthenticated(true);
        return customerDetails;
    }

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    // const handleChangePassword=async(username,oldPassword,newPassword)=>{
    //     const userDetails= await passwordChange(username,oldPassword,newPassword);
    //     setIsAuthenticated(true);
    //     return userDetails;
    // }
    
    return {
        isAuthenticated: isAuthenticated,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        handleSignUp:handleSignUp,
       // handleChangePassword:handleChangePassword,
    };
}
