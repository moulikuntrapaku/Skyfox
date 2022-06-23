import React, { useEffect,useState} from 'react';
import {Button} from "@material-ui/core";
import {Form, Formik} from "formik";
import {FormikTextField} from "../formik";
import styles from "./styles/signupStyles";
import PropTypes from "prop-types";
import { formSchema ,initialValues} from './services/signupFormService';
import useSignUp from './hooks/useSignUp';



const Signup=(location, history,isAuthenticated, onSignUp)=>{
    const classes = styles();
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const [mobileErrorMessage,setErrorMessage]=useState("");
    const {from} = location.state || {from: {pathname: "/login"}};
    const {errorMessage, handleSignUp} = useSignUp(onSignUp);

    
    useEffect(() => {
        if (isAuthenticated) {
            history.replace(from);
        }
    });

        return (
            <div className={classes.signUpContainer}>
                <Formik initialValues={initialValues}
                        onSubmit={handleSignUp}
                        validationSchema={formSchema}>
                    {
                        (props) => {
                            const {
                                isValid,
                            } = props;
                            return (
                                <Form className={classes.signUpForm}>
                                    <FormikTextField
                                        required
                                        margin="dense"
                                        name="name"
                                        label="Name"
                                    />
                                     <FormikTextField
                                        required
                                        margin="dense"
                                        name="username"
                                        label="Username"
                                    />
                                     <FormikTextField
                                        required
                                        margin="dense"
                                        name="email"
                                        label="Email"
                                    />
                                      <FormikTextField
                                        error={isError}
                                        value={mobile}
                                        margin="dense"
                                        name="mobileNumber"
                                        label="Mobile Number"
                                        onChange={(e) => {
                                            setmobile(e.target.value);
                                            if (e.target.value.length !==10) {
                                              setIsError(true);
                                              setErrorMessage("Enter Valid Mobile Number");
                                            }
                                            else {setIsError(false);setErrorMessage();}
                                            
                                          }
                                        }    
                                    />
                                    <div>{mobileErrorMessage}</div>
                                    <FormikTextField
                                        required
                                        type="password"
                                        margin="dense"
                                        name="password"
                                        label="Password"
                                    />
                                     <FormikTextField
                                        required
                                        type="password"
                                        margin="dense"
                                        name="confirmPassword"
                                        label="Confirm Password"
                                    /> 
                                    {
                                    errorMessage()
                                    }
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={!isValid}
                                        color="primary"
                                        className={classes.signUpButton}
                                    >
                                        Signup
                                    </Button>
                                </Form>
                            );
                        }
                    }
                </Formik>
            </div>
        );
}

Signup.propTypes = {
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onSignUp: PropTypes.func.isRequired
};

export default Signup;