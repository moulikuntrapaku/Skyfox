import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/profileStyles";
import Alert from "@material-ui/lab/Alert/Alert";
//import { showToast } from "../toastMessage";
// import useAuth from "../../layout/hooks/useAuth";
// const {handleLogout} = useAuth();

export default (handleAuthChangePassword) => {
    const classes = styles();
    const [showError,setShowError]=useState(false);
    const [message, setMessage] = useState();
    const [showSucces, setShowSuccess] = useState(false);
    const errorMessage=()=>{
        if(showError){
            return(
                //<Typography variant="body1" color="error" className={classes.changePasswordErrorMessage}>Change password failed</Typography>
                <Alert severity="error" icon={false} variant="filled">
                {message}
                </Alert>

            )
        }
        if (showSucces) {
            return (
                <div>
                <Alert severity="success" icon={false} variant="filled">
                {message}
                </Alert>
                </div>
            )
    };
    }
    const handleChangePassword=async(values)=>{
    const {oldPassword,newPassword}=values;
    try{
        const statusCode=await handleAuthChangePassword(oldPassword,newPassword);
        //if(statusCode=="success")
        //     showToast('success',message);
        //     {handleLogout};
        // else if(statusCode=="error"){
        //     showToast('error',message);}
        setShowError(false);
        setShowSuccess(true);
        setMessage(statusCode);
        //setTimeout(handleLogout, 2000);
        // console.log(statusCode + "" + showSucces);
    } catch(err){
        console.log(err.response.data.message);
        if(err.response && err.response.status===401){
            setShowError(true);
        }
        if(err.response && err.response.status!=200){
            setShowError(true);
        }
        else{
            throw err;
        }
        setMessage(err.response.data.message);
            
    }
   };
   return{
    errorMessage:errorMessage,
    handleChangePassword:handleChangePassword
   };
};