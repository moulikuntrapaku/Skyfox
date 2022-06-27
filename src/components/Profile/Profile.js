import React from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import styles from "./styles/profileStyles";
import PropTypes from "prop-types";
import Cancel from '@material-ui/icons/Cancel';
import 'reactjs-popup/dist/index.css';

const Profile = () => {
  const classes = styles();

  const [open, setOpen] = React.useState(false);

  const handleOpenPasswordchange = () => {
    setOpen(true);
  };

  const handleClosePasswordChange = () => {
    setOpen(false);
  };

  // const isValid = () =>{
  //     if(validateNewPassword() && validateConfirmPassword())
  //         return true;
  // }

  return (

    <div className={classes.profileContainer}>
      <Typography variant="h5">User Profile</Typography>
      <Typography variant="body1"> name: Random</Typography>
      <Typography variant="body1"> username: Something</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenPasswordchange}>
        Change Password
      </Button>

      <Dialog open={open} onClose={handleClosePasswordChange}>
        <Button className={classes.popupCloseButton}
          onClick={handleClosePasswordChange}><Cancel /></Button>
        <DialogTitle >Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="old password"
            label="Old password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="new password"
            label="New password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="confirm new password"
            label="Confirm new password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions className={classes.submitChangePasswordButton}>
          <Button
            type="submit"
            //disabled={!isValid}
            variant="contained"
            color="primary"
            onClick={handleClosePasswordChange}>Change Password</Button>
        </DialogActions>
      </Dialog>

    </div>

  );
}

Profile.propTypes = {

  onProfile: PropTypes.func.isRequired
};


export default Profile;