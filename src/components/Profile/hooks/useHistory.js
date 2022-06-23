import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/ProfileStyles"
import { useNavigate } from "react-router-dom";

export default (oProfile) => {
    const classes = styles();
    const history = useHistory();
    

   
    const handleProfile = async (values) => {
        const {username, password} = values;
        try {
            await onProfile(name, username);
            setShowError(false);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setShowError(true);
            } else {
                throw err;
            }
        }
    };

    return {
        
         handleProfile: handleProfile
    
    };
};
