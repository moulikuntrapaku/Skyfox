// noinspection ES6CheckImport
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Shows from "../shows/Shows";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BlockIcon from '@material-ui/icons/Block';
import {Error} from "../common";
import {Login, ProtectedRoute} from "../login";
import PropTypes from "prop-types";
import moment from "moment";
import Profile from "../Profile/Profile.js";
import Signup from "../signup/Signup.js"

<<<<<<< HEAD


const RootRouter = ({isAuthenticated, onLogin}) => {
=======
const RootRouter = ({isAuthenticated, onLogin,onSignUp}) => {
>>>>>>> 7b5175270d22a7aba83b1d0b85d580d5aeaaf6f0
    const todayDate = moment().format("YYYY-MM-DD");

    return (
        <Router>
            <Switch>
                <Redirect path="/" exact to={`/shows?date=${todayDate}`}/>
                <ProtectedRoute exact path="/shows" component={Shows} isAuthenticated={isAuthenticated}/>

                <Route exact path="/login"
                       component={(props) => <Login isAuthenticated={isAuthenticated} onLogin={onLogin} {...props}/>}/>
                
<<<<<<< HEAD
=======
                <Route exact path="/signup" component={(props)=><Signup isAuthenticated={isAuthenticated} onSignUp={onSignUp} {...props}/>}/>

>>>>>>> 7b5175270d22a7aba83b1d0b85d580d5aeaaf6f0
                <Route exact path="/error" component={
                    () => <Error errorIcon={ErrorOutlineIcon} errorMessage={"Oops..Something went wrong"}/>
                }
                />
                <Route exact path="/Profile" component={() => <Profile/>}/>
                      

                <Route component={
                    () => <Error errorIcon={BlockIcon} errorMessage={"Not Found"}/>
                }/>

            </Switch>
        </Router>
    );
};

RootRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default RootRouter;
