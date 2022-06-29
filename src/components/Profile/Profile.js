import React, {useState} from "react";
import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import styles from "./styles/profileStyles";
import Cancel from '@material-ui/icons/Cancel';
import { Formik,Form } from "formik";
import {FormikTextField} from "../formik";
import { getUsername } from "../../helpers/authService";
import { formSchema, initialValues, validateConfirmPassword} from "./services/passwordChangeFormService";
import useChangePassword from "./hooks/useChangePassword";
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useAuth from "../layout/hooks/useAuth";

const Profile = () => {
  const classes = styles();
  const username=getUsername();
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
        onClick={handleOpenChangePasswordPopup}>
        Change Password
      </Button> 
    
      <Dialog open={open} onClose={handleCloseChangePasswordPopup}>
        <Button className={classes.popupCloseButton}
          onClick={handleCloseChangePasswordPopup}><Cancel /></Button>
        <DialogTitle >Change Password</DialogTitle>
        <DialogContent>
          <div className={classes.changePasswordContainer}>
                <Formik initialValues={initialValues}
                        onSubmit={handleChangePassword}
                        validationSchema={formSchema}>
                    {
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
                                    {validateConfirmPassword(props.values) && <p className={classes.errorMeaasge}>{validateConfirmPassword(props.values)}</p>}
                                    {
                                    errorMessage()
                                    }
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
        </DialogContent>
      </Dialog>
    </div>
   );
 }



Profile.propTypes = {

  //onProfile: PropTypes.func.isRequired
};


 export default Profile;