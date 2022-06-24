import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import Layout from "./components/layout/Layout";
import Theme from './Theme';
<<<<<<< HEAD
=======

>>>>>>> b7d63cf ([Priya|Lasya] Add. Password and mobile number validation added.)


export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <Layout/>
        </ThemeProvider>
    );
};
