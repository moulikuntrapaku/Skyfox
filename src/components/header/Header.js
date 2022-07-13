import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MovieIcon from '@material-ui/icons/Movie';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ProfileIcon from '@material-ui/icons/Person';
import styles from "./styles/headerStyles";
import PropTypes from "prop-types";
import profile from "../Profile/hooks/useProfile";
import { getUsername } from "../../helpers/authService";
 
const Header = ({ onLogout, isAuthenticated}) => {
   const classes = styles();
   const username=getUsername();
   const logoutSection = () => {
       if (isAuthenticated) {
           return (
               <div id ="logoutSection" onClick={onLogout} className={classes.profilediv}>
                   <ExitToAppIcon/>
                   <Typography className={classes.headerLogo} variant="body1">
                       Logout
                   </Typography>
               </div>
           );
       }
   };
 
   const profileSection = () => {
       if (isAuthenticated) {
           return (
               <div id="profileSection" className={classes.logoutLink}>
 
                  <Typography className={classes.headerLogo} variant="body1">
                   <div className={classes.profilediv}>
                   {profile.Role === "ADMIN" ? (
                        <div>Welcome, Admin!</div>
                     ):
                     (
                       <div>Welcome, {username}!</div>
                     )
                   }
                     <a href="/Profile"> <ProfileIcon style={{color:"white"}}/></a>
                     </div>
                   </Typography>
               </div>
           );
       }
   };
 
 
   return (
       <AppBar position={"sticky"}>
           <Toolbar className={classes.toolbar}>
               <a href="/" className={classes.headerLink}>
                  <MovieIcon className={classes.cinemaLogoIcon}/>
                  &nbsp;
                  &nbsp;
                   <Typography className={classes.headerLogo} variant="h5">
                       SkyFox Cinema
                   </Typography>
                   <div className={classes.commonDiv}>
                       <logoutSection className={classes.logoutLink}/>
                       <profileSection className={classes.logoutLink}/>
                   </div>
                      
               </a>
               <div className={classes.headerActions}>
                {profileSection()} &nbsp; &nbsp;
                {logoutSection()}
               </div>
              
           </Toolbar>
       </AppBar>
   );
};
 
Header.propTypes = {
   onLogout: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool.isRequired
};
 
export default Header;
 
 
 
 
 
 
 
 

