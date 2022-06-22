import React, {useEffect} from "react";
import {Form, Formik} from "formik";
import {FormikTextField} from "../formik";
import {Button} from "@material-ui/core";
import styles from "./styles/profileStyles"
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";


const Profile = ({onProfile}) => {
	const classes = styles();
	

return (
    <div className={classes.loginContainer}>
        <h2>User Profile</h2>

        <h3> name: Random</h3>
        <h3> username: Something</h3>
        <Button>Change Password</Button>
    </div>
    

);
}

Profile.propTypes = {

    onProfile: PropTypes.func.isRequired
};

export default Profile;