import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import styles from "./styles/profileStyles"
import PropTypes from "prop-types";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Form, Formik} from "formik";
import {FormikTextField} from "../formik";



const Profile = ({}) => {
	const classes = styles();

return (
    <div className={classes.profileContainer}>
        <h2>User Profile</h2>
        <h3> name: Random</h3>
        <h3> username: Something</h3>
        <Popup trigger={<Button variant="contained" color="primary">Change Password</Button>}
        position="center">
        <div className={classes.changePasswordContainer}>
                     <Formik >
                            <Form className={classes.changePasswordForm}>
                                <FormikTextField
                                    type="password"
                                    margin="dense"
                                    name="old password"
                                    label="old password"
                                />
                                <FormikTextField
                                    type="password"
                                    margin="dense"
                                    name="new password"
                                    label="new Password"
                                />
                                <FormikTextField
                                    type="password"
                                    margin="dense"
                                    name="confirm new password"
                                    label="confirm new Password"
                                />
                    
                                <Button
                                    variant="contained"
                                    type="submit"
                                    // disabled={!isValid}
                                    color="primary"
                                    className={classes.changePasswordButton}
                                >
                                    Change Password
                                </Button>
                            </Form>
            </Formik>
        </div>
        </Popup>
    </div>
);
}

Profile.propTypes = {

    onProfile: PropTypes.func.isRequired
};


export default Profile;