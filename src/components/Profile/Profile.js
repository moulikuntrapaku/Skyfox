import React, {useState} from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import styles from "./styles/profileStyles";
import PropTypes from "prop-types";
import Cancel from '@material-ui/icons/Cancel';
import { Formik,Form } from "formik";
import {FormikTextField} from "../formik";
import { getUsername } from "../../helpers/authService";
import { formSchema, initialValues } from "./services/passwordChangeFormService";
import { isValidPassword, isPasswordAndConfirmPasswordMatching } from "../signup/services/signupFormService";

const Profile = () => {
  const classes = styles();
  const username=getUsername();
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [newPassword, setNewPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenPasswordchangePopup = () => {
    setOpen(true);
  };

  const handleClosePasswordChangePopup = () => {
    setOpen(false);
  };

  return (

    <div className={classes.profileContainer}>
      <Typography variant="h5">User Profile</Typography>
      <br/>
      <Typography variant="body1"> name: Admin</Typography>
      <Typography variant="body1"> username: {username}</Typography>
      <br/>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenPasswordchangePopup}>
        Change Password
      </Button> 
    
      <Dialog open={open} onClose={handleClosePasswordChangePopup}>
        <Button className={classes.popupCloseButton}
          onClick={handleClosePasswordChangePopup}><Cancel /></Button>
        <DialogTitle >Change Password</DialogTitle>
        <DialogContent>
          <div className={classes.changePasswordContainer}>
                <Formik initialValues={initialValues}
                      //  onSubmit={handleChangePassword}
                        validationSchema={formSchema}>
                    {
                        (props) => {
                            return (
                                <Form className={classes.changePasswordForm}>

                                  <FormikTextField
                                        required
                                        value={password}
                                        margin="dense"
                                        name="oldPassword"
                                        label="Old password"
                                        type="password"
                                        onChange={(e)=>{
                                          setPassword(e.target.value);
                                      }}  
                                           
                                    />
                                  <FormikTextField
                                        required
                                        value={newPassword}
                                        margin="dense"
                                        type="password"
                                        name="newPassword"
                                        label="New Password"
                                        onChange={(e)=>{
                                            setNewPassword(e.target.value);
                                        }}   
                                    />
                                      
                                    {isValidPassword(newPassword) && <p className={classes.errorMessage}>{isValidPassword(newPassword)}</p>}
                                     <FormikTextField
                                        required
                                        value={confirmPassword}
                                        type="password"
                                        margin="dense"
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        onChange={(e)=>{
                                            setConfirmPassword(e.target.value);
                                        }}
                                    /> 
                                    {isPasswordAndConfirmPasswordMatching(newPassword,confirmPassword) && <p className={classes.errorMessage}>{isPasswordAndConfirmPasswordMatching(newPassword,confirmPassword)}</p>}
                                    </Form>
                            );
                          }
                        }
                  </Formik>
              </div>
        </DialogContent>
        <DialogActions className={classes.submitChangePasswordButton}>
          <Button
            type="submit"
            //disabled={!isValid}
            variant="contained"
            color="primary"
            onClick={handleClosePasswordChangePopup}>Change Password</Button>
        </DialogActions>
      </Dialog>

    </div>

  );
}

Profile.propTypes = {

  onProfile: PropTypes.func.isRequired
};


export default Profile;