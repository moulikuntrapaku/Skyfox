import {object, string,ref} from "yup";

export const initialValues = {
    name:'',
    username: '',
    email:'',
    mobileNumber:'',
    password: '',
    confirmPassword:''

};


export const formSchema = object({
    name: string("Enter name")
        .required("Name is required"),
    username: string("Enter username")
        .required("Username is required")
        .matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,64}[a-zA-Z0-9]$/,"Username Should be valid"),
    email: string("Enter email")
        .required("Email is required")
        .email(),
    mobileNumber: string("Enter Mobile Number")
        .required("Mobile no is required")
        .matches(/^\d{10}$/, "Enter valid phone number"),
    password: string("Enter password")
        .required("Password is required")
        .matches(/(?=.*?[A-Z])/,"Password should contain atleast one Uppercase")
        .matches(/(?=.*?[0-9])/,"Password should contain atleast one digit")
        .matches(/(?=.*?[#?!@$%^&*-])/,"Password should contain  atleast one special character")
        .matches(/^.{8,64}$/,"Password should be of minimum 8 characters and maximum 64 characters")
        .matches( /^\S*$/,"No Whitespace allowed"),
    confirmPassword: string("Enter confirm password")
        .required("Confirm Password is required")
        .oneOf([ref("password"),null],'ConfirmPassword doesnt match with Password'),
});


