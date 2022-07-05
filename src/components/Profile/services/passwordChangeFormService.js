import {object, string} from "yup";

export const initialValues = {
    oldPassword: '', 
    newPassword: '',
    confirmPassword: ''
};

export const formSchema = object({
    oldPassword: string("old password").required("Old Password is required"),
    newPassword: string("new password")
        .matches(/(?=.*?[A-Z])/,"Password should contain atleast one Uppercase")
        .matches(/(?=.*?[0-9])/,"Password should contain atleast one digit")
        .matches(/(?=.*?[#?!@$%^&*-])/,"Password should contain atleast one special character")
        .matches(/^.{8,64}$/,"Password should be of minimum 8 characters and maximum 64 characters")
        .required("Password is required"),
    confirmPassword: string("confirm password")
        .required("Confirm Password is required")
});
export const validateConfirmPassword = values => {
    if (values.confirmPassword!=="" && values.newPassword!==values.confirmPassword) {
      return 'Current Password doesnt match with Password';
    }
return null;
};
