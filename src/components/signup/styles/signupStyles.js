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
            minWidth:"30%"
            
            
        },
        signUpButton: {
            marginTop: "10%",
            width:"100%",
        
        
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
