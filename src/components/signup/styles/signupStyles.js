import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        signUpContainer: {
            display: "flex",
            justifyContent: "center",
            padding: "20px 40px",
        },
        signUpForm: {
            display: "flex",
            flexDirection: "column",
            minWidth: "400 px",
            maxWidth: "600 px",
            
            
        },
        signUpButton: {
            marginTop: "10%",
            width:"30%",
            marginLeft:"40%"
        
        },
        signUpErrorMessage: {
            marginTop: "8px",
            display:"inline"
        },
        errorMessage:{
            color:"red"
        }
    })
);
