import {object, string} from "yup";

export const initialValues = {
    username: '',
    password: '',

};

export const formSchema = object({
    name: string("Enter name")
        .required("Name is required"),
    username: string("Enter username")
        .required("Username is required"),
    mobileNumber: string("Enter Mobile Number")
    .required("Mobile Number is required"),
    email: string("Enter email")
        .required("Email is required"),
    password: string("Enter password")
        .required("Password is required"),
    confirmPassword: string("Enter confirm password")
        .required("Confirm Password is required")
});
