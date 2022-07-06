import React, {useState} from "react";
import Alert from "@material-ui/lab/Alert/Alert";
import styles from "../styles/signupStyles"
import { Redirect } from "react-router-dom";

export default (onSignUp) => {
    const classes = styles(); 
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState();
    const [showSucces, setShowSuccess] = useState(false);

    const errorMessage = () => {
        if (showError) {
            return (
                            
                <Alert severity="error">
                 {message}
                </Alert>
            )
        }
        if (showSucces) {
            return (
                <Alert severity="success">
                    {message}
                    {/* <Redirect to = '/login' /> */}
                </Alert>
            ) 
        }
    };
    const redirrectionFunction = () => {
        window.location.pathname="/login"
    }

    const handleSignUp = async (values) => {
        const {name,username,email,mobileNumber, password,confirmPassword} = values;
        try {
           const status = await onSignUp(name,username,email,mobileNumber, password,confirmPassword);
            setShowError(false);
            setShowSuccess(true);
            setMessage(status);
            setTimeout(redirrectionFunction, 2500);
            
        } catch (err) {
            console.log(err.response.data.message);
            if (err.response && err.response.status === 500) {
                setShowError(true);
            } else {
                throw err;
            }
            setShowError(true);
            
            setMessage(err.response.data.message);
        }
    };

    return {
        errorMessage: errorMessage,
        handleSignUp: handleSignUp
    };
};
