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
    // mobileNumber: string("Enter Mobile Number")
    // .required("Mobile Number is required"),
    email: string("Enter email")
        .required("Email is required"),
    // password: string("Enter password")
    //     .required("Password is required"),
    // confirmPassword: string("Enter confirm password")
    //     .required("Confirm Password is required")
});

export const isValidMobileNumber=(mobileNumber)=>{
    if (mobileNumber.length!==0 && mobileNumber.length !==10) return "Please Enter Valid Mobile Number";
    return null;
    
}
export const isValidPassword=(password)=>{
    var s="";
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    if(password!=="" && !uppercaseRegExp.test(password)) s+='Password should contain atleast one Uppercase';
    else if(password!=="" && !digitsRegExp.test(password)) s+='Password should contain atleast one digit';
    else if(password!=="" && !specialCharRegExp.test(password)) s+="Password should contain atleast one special character";
    else if(password!=="" && password.length<8) s+="Password should be of minimum 8 character";
    else if(password!=="" && password.length>64) s+="Password should be of maximim 64 character";
    return s;
}

export const isPasswordAndConfirmPasswordMatching=(password,confirmPassword)=>{
    if(confirmPassword!=="" && password!==confirmPassword) 
        return "Password doesn't match with currentPassword \n";
}

