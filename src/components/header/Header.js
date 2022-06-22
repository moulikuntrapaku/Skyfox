import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import MovieIcon from '@material-ui/icons/Movie';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ProfileIcon from '@material-ui/icons/Person';
import styles from "./styles/headerStyles";
import PropTypes from "prop-types";
import myProfile from "../myProfile/myProfile";

const Header = ({onLogout, isAuthenticated}) => {
    const classes = styles();

    const logoutSection = () => {
        if (isAuthenticated) {
            return (
                <div onClick={onLogout} className={classes.logoutLink}>
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
                <div onClick={onLogout} className={classes.logoutLink}>
                   <Typography className={classes.headerLogo} variant="body1">
                       Welcome, Admin!
                    </Typography> 
                    <ProfileIcon/>
                </div>
            );
        }
    };
  

    return (
        <AppBar position={"sticky"}>
            <Toolbar className={classes.toolbar}>
                <a href="/" className={classes.headerLink}>
                    <MovieIcon className={classes.cinemaLogoIcon}/>
                    <Typography className={classes.headerLogo} variant="h5">
                        SkyFox Cinema
                    </Typography>
                </a>
                {profileSection()}
                {logoutSection()}
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    onLogout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
