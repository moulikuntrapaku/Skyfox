import React, {useEffect, useState} from "react";
import {Form, Formik} from "formik";
import {FormikTextField} from "../formik";
import {Button} from "@material-ui/core";
import styles from "./styles/loginStyles"
import PropTypes from "prop-types";
import useLogin from "./hooks/useLogin";
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {formSchema, initialValues} from "./services/loginFormService";





const Login = ({location, history, isAuthenticated, onLogin}) => {
    const classes = styles();
    const [showPassword,setShowPassword]=useState(false);
    const handleClickShowPassword = ()=>setShowPassword(!showPassword);
    const {from} = location.state || {from: {pathname: "/"}};
    const {errorMessage, handleLogin} = useLogin(onLogin);
    useEffect(() => { //usage?
        if (isAuthenticated) {
            history.replace(from);
        }
    });

    return (
        <div className={classes.loginContainer}>
            <Formik initialValues={initialValues}
                    onSubmit={handleLogin}
                    validationSchema={formSchema}>
                {
                   
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        
                        return (
                            <Form className={classes.loginForm}>
                                <FormikTextField
                                    required
                                    margin="dense"
                                    name="username"
                                    label="Username"
                                />
                                <FormikTextField
                                    required
                                    margin="dense"
                                    name="password"
                                    type={showPassword ? "test":"password"}
                                    label="Password"
                                    InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              onClick={handleClickShowPassword}
                                            >
                                              {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        )
                                      }}
                                />
                                {
                                    errorMessage()
                                }
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!isValid}
                                    color="primary"
                                    className={classes.loginButton}
                                >
                                    Login
                                    </Button>
                                <span className={classes.signUpText}>New to Skyfox?
                                 <a className={classes.signUpLink} onClick={()=>history.push('/Signup')}> Signup here</a>                              
                                </span>

                                
                            </Form>
                        );
                    }
                }
            </Formik>
        </div>
    );
}

Login.propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default Login;
