import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
         profileContainer: {
             justifyContent: "left",
            padding: "20px 40px"
        },
        changePasswordContainer:{
            display: "flex",
            position:"center",
            justifyContent: "center",
            padding: "5px 5px",
            width:"500px"

        },
        changePasswordForm: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5px 5px",
            width: "100%"
        },
        changePasswordErrorMessage: {
            marginTop: "8px",
            display:"inline"
        },
        popupCloseButton:{
            justifyContent: "right",
        },
        submitChangePasswordButton: {
            justifyContent: "left",
            margin: "5px 5px 10px 5px",
            width: "200px"
        },
        line: {
            width: "100%"
        },
        toastMessage: {
            width: "40%"
        },
        errorMeaasge:{
            color:"red"
        },
    })
);


