import {object, string} from "yup";

export const initialValues = {
    name: '',
    username: ''
};

export const formSchema = object({
    name: string("Name"),
    username: string("Username")
   
});