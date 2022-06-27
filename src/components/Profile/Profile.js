import React from "react";
import {Button} from "@material-ui/core";
import styles from "./styles/profileStyles";
import PropTypes from "prop-types";
import {TextField} from "@material-ui/core";
import {Dialog} from "@material-ui/core";
import {DialogActions} from '@material-ui/core';
import {DialogContent} from '@material-ui/core';
import {DialogTitle} from '@material-ui/core';
//import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import {Form, Formik} from "formik";
// import {FormikTextField} from "../formik";



const Profile = () => {
	const classes = styles();

    const [open,setOpen]=React.useState(false);

    const handleOpenPasswordchange=()=>{
        setOpen(true);
    };

    const handleClosePasswordChange = () => {
        setOpen(false);
      };

return(

      <div className={classes.profileContainer}>
         <h2>User Profile</h2>
         <h3> name: Random</h3>
        <h3> username: Something</h3>
        <Button variant="contained" onClick={handleOpenPasswordchange}>
        Change Password
        </Button>
        <Dialog open={open} onClose={handleClosePasswordChange}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="old password"
            label="Old password"
            type="password"
            fullWidth
            variant="password"
          />
          <TextField
            autoFocus
            margin="dense"
            id="New password"
            label="New assword"
            type="password"
            fullWidth
            variant="password"
          />
          <TextField
            autoFocus
            margin="dense"
            id=" Confirm new password"
            label="Confirm new password"
            type="password"
            fullWidth
            variant="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePasswordChange}>Cancel</Button>
          <Button onClick={handleClosePasswordChange}>Change Password</Button>
        </DialogActions>
      </Dialog>

        </div>

);



// return (
//     <div className={classes.profileContainer}>
//         <h2>User Profile</h2>
//         <h3> name: Random</h3>
//         <h3> username: Something</h3>
//         <Popup trigger={<Button variant="contained" color="primary">Change Password</Button>}
//         position="center">
//         <div className={classes.changePasswordContainer}>
//                      <Formik >
//                      {
//                     (props) => {
//                         const {
//                             isValid,
//                         } = props;
//                         return (
//                             <Form className={classes.changePasswordForm}>
//                                 <FormikTextField
//                                     type="password"
//                                     margin="dense"
//                                     name="old password"
//                                     label="old password"
//                                 />
//                                 <FormikTextField
//                                     type="password"
//                                     margin="dense"
//                                     name="new password"
//                                     label="new Password"
//                                 />
//                                 <FormikTextField
//                                     type="password"
//                                     margin="dense"
//                                     name="confirm new password"
//                                     label="confirm new Password"
//                                 />
                    
//                                 <Button
//                                     variant="contained"
//                                     type="submit"
//                                     // disabled={!isValid}
//                                     color="primary"
//                                     className={classes.changePasswordButton}
//                                 >
//                                     Change Password
//                                 </Button>
//                             </Form>
//                         );}}
//             </Formik>
//         </div>
//         </Popup>
//     </div>
// );
 }

Profile.propTypes = {

    onProfile: PropTypes.func.isRequired
};


export default Profile;