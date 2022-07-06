import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
    
        profileContainer: {
            justifyContent: "center",
            padding: "20px 40px"
       },
       formTitle:{
            justifyContent: "left",
            padding: "20px 20px"
       },

        pageContainer: {
            display: "flex",
            justifyContent: "left-left",
       },
        changePasswordContainer:{
            display: "flex",
            position:"center",
            justifyContent: "center",
            width:"500px"

        },
        changePasswordForm: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
        },
        changePasswordErrorMessage: {
            marginTop: "8px",
            display:"inline"
        },
        popupCloseButton:{
            justifyContent: "right",
            justifyContent: "space-between",
            padding: "10px"
        },
        submitChangePasswordButton: {
            justifyContent: "left",
            margin: "5px 5px 10px 0px",
            width: "37%"
        },
        line: {
            width: "80%"
        },
        toastMessage: {
            width: "100%"

        },
        errorMeaasge:{
            color:"red"
        },
    })
);


