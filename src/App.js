import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import Layout from "./components/layout/Layout";
import Theme from './Theme';
import {BrowserRouter} from "react-router-dom"


export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <Layout/>
        </ThemeProvider>
    );
};
