import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/profileStyles"
//import { showToast } from "../toastMessage";
//import useAuth from "../../layout/hooks/useAuth";


//const {handleLogout}=useAuth();

export default (handleAuthChangePassword) => {
    const classes = styles();
    const [showError,setShowError]=useState(false);

    const errorMessage=()=>{
        if(showError){
            return(
                <Typography variant="body1" color="error" className={classes.changePasswordErrorMessage}>change password failed</Typography>
            )
        }
    };
    

   const handleChangePassword=async(values)=>{
    const {oldPassword,newPassword,confirmPassword}=values;
    try{
        const statusCode=await handleAuthChangePassword(oldPassword,newPassword,confirmPassword);
        // if(statusCode=="success")
        //     showToast('success',message);
        //     {handleLogout};
        // else if(statusCode=="error"){
        //     showToast('error',message);}
        setShowError(false);
    } catch(err){
        console.log(err);
        if(err.response && err.response.status===401){
            setShowError(true);
        }else{
            throw err;
        }
    }
   };
   return{
    errorMessage:errorMessage,
    handleChangePassword:handleChangePassword
   };
};
