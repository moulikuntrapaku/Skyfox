import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert/Alert";
import useAuth from "../../layout/hooks/useAuth";
import IconButton from '@material-ui/core/IconButton';
import { Collapse } from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";
export default (handleAuthChangePassword) => {
    const [open,setOpen]=useState(true);
    const [showError, setShowError] = useState(false);
    const { handleLogout } = useAuth();
    const [message, setMessage] = useState();
    const [showSucces, setShowSuccess] = useState(false);
    const errorMessage = () => {
        if (showError) {
            return (
                <Collapse in={open}>
                    <Alert severity="error"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <Cancel/>
                        </IconButton>
                    }
                    >
                    {message}
                    </Alert>
                </Collapse>
            )
        }
        if (showSucces) {
            return (
                    <Alert severity="success" >
                        {message}
                    </Alert>
            )
        };
    }
    const redirrectionFunction = () => {
            window.location.pathname="/login"
    }
    const handleChangePassword = async (values) => {
        const { oldPassword, newPassword } = values;
        try {
            const statusCode = await handleAuthChangePassword(oldPassword, newPassword);
            setShowError(false);
            setShowSuccess(true);
            setMessage(statusCode);
            handleLogout();
            setTimeout(redirrectionFunction, 2500);
        } catch (err) {
            console.log(err.response.data.message);
            if (err.response && err.response.status === 401) {
                setShowError(true);
            }
            if (err.response && err.response.status !== 200) {
                setShowError(true);
            }
            else {
                throw err;
            }
            setMessage(err.response.data.message);
        }
    };
    return {
        errorMessage: errorMessage,
        handleChangePassword: handleChangePassword
    };
}; 