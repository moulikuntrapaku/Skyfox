import React, {useState,useEffect} from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import styles from "./styles/profileStyles";
import { Formik,Form } from "formik";
import {FormikTextField} from "../formik";
import { getUsername } from "../../helpers/authService";
import { formSchema, initialValues} from "./services/passwordChangeFormService";
import useChangePassword from "./hooks/useChangePassword";
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useAuth from "../layout/hooks/useAuth";
import CloseIcon from '@material-ui/icons/Close';
import useProfile from "./hooks/useProfile";

  const Profile = () => {
  const classes = styles();
  const username=getUsername();
  const { profile, profileLoading } = useProfile();
  const {handleAuthChangePassword}=useAuth();
  const [open, setOpen] = useState(false);
  const {errorMessage,handleChangePassword}=useChangePassword(handleAuthChangePassword);
  const [showOldPassword,setShowOldPassword]=useState(false);
  const [showNewPassword,setShowNewPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const handleClickShowOldPassword = ()=>setShowOldPassword(!showOldPassword);
  const handleClickShowNewPassword = ()=>setShowNewPassword(!showNewPassword);
  const handleClickShowConfirmPassword = ()=>setShowConfirmPassword(!showConfirmPassword);
  const handleOpenChangePasswordPopup = () => {setOpen(true)};
  const handleCloseChangePasswordPopup = () => {setOpen(false)};
  const [data,setData]=useState({});


   return (
  <>
    <div className={classes.profileContainer}>
       <div>
      {profile.Role === "ADMIN" ? (
            <>
              {" "}
              <Typography variant="h5" className={classes.userHeading}>
                Admin Profile
                <br></br>
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Username: {profile.username}
              </Typography>
            </>
          ) : (
            <>
              {" "}
              <Typography variant="h5" className={classes.userHeading}>
                User Profile
                <br></br>
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Name: {profile.name}
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Username: {profile.username}
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Email: {profile.email}
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Phone Number: {profile.phone_number}
              </Typography>
               
            </>
          )}
      </div>

      
      <br/>
      <br/>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenChangePasswordPopup}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleCloseChangePasswordPopup}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h5" style={{fontWeight: 'bold', flexGrow: 1}} component="div" >
                        Change Password
                    </Typography>
                    <DialogActions
                        color="secondary"
                        onClick={handleCloseChangePasswordPopup}>
                        <CloseIcon style={{ cursor: 'pointer' }}/>
                    </DialogActions>
                </div>
            </DialogTitle>
        <DialogContent>
          <div className={classes.changePasswordContainer}>
                <Formik initialValues={initialValues}
                        onSubmit={handleChangePassword}
                        validationSchema={formSchema}>{
                        (props) => {
                            const {
                                isValid,
                            } = props;
                            return (
                                <Form className={classes.changePasswordForm}>
                                  <FormikTextField
                                        required
                                        className = {classes.line}
                                        label="Old password"
                                        type={showOldPassword ? "test":"password"}
                                        margin="dense"
                                        name="oldPassword"
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              <IconButton
                                                onClick={handleClickShowOldPassword}
                                              >
                                                {showOldPassword ? <Visibility /> : <VisibilityOff />}
                                              </IconButton>
                                            </InputAdornment>
                                          )
                                        }}
                                    />
                                   <FormikTextField
                                        required
                                        label="New password"
                                        className = {classes.line}
                                        type={showNewPassword ? "test":"password"}
                                        margin="dense"
                                        name="newPassword"
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              <IconButton
                                                onClick={handleClickShowNewPassword}
                                              >
                                                {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                              </IconButton>
                                            </InputAdornment>
                                          )
                                        }}
                                    />
                                    <FormikTextField
                                        required
                                        label="Confirm password"
                                        className = {classes.line}
                                        type={showConfirmPassword ? "test":"password"}
                                        margin="dense"
                                        name="confirmPassword"
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              <IconButton
                                                onClick={handleClickShowConfirmPassword}
                                              >
                                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                              </IconButton>
                                            </InputAdornment>
                                          )
                                        }}
                                    />

                                     <br/>
                                     <Button
                                     type="submit"
                                     disabled={!isValid}
                                     variant="contained"
                                     color="primary"
                                     className={classes.submitChangePasswordButton}>
                                     Change Password</Button>
                                    </Form>
                            );
                          }
                        }
                  </Formik>
              </div>
              <br/>
              <div className={classes.toastMessage} >
                {
                    errorMessage()
                  }
                </div>
        </DialogContent>
      </Dialog>
      
    </div>
                                    
                                   
    </>
   );
 }
Profile.propTypes = {
  //onProfile: PropTypes.func.isRequired
};
 export default Profile;