import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
         profileContainer: {
             justifyContent: "left",
            padding: "20px 40px"
        },
        changePasswordContainer:{
            position:"center",
            justifyContent: "center",
            padding: "5px 5px",

        },
        changePasswordForm: {
            flexDirection: "column",
            justifyContent: "center",
            padding: "5px 5px",
        },
        changePasswordErrorMessage: {
            marginTop: "8px"
        },
        popupCloseButton:{
            justifyContent: "right",
        },
        submitChangePasswordButton: {
            justifyContent: "left",
            margin: "5px 5px 10px 5px"
        },
    })
);


