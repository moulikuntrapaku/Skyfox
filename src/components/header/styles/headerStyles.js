import {makeStyles} from "@material-ui/core";
import { common } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
        headerLink: {
            color: theme.palette.primary.contrastText,
            display: 'flex',
            justifyContent: "flex-start",
            textDecoration: 'none'
        },
        logoutLink: {
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer"
        },
        profileLink: {
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer"
        },
        Link: {
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer"
        },
        cinemaLogoIcon: {
            fontSize: '2.25em'
        },
        headerLogo: {
            marginLeft: '0.15em'

        },
        toolbar: {
            display: 'flex',
            justifyContent: "space-between",
            padding: "0 2em"
        },
        cartButton: {
            color: "white",
            padding: "10px"
        },
        headerActions: {
            display:"flex",
            height:"100%"
        },
        profilediv: {
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre"
        },
        commonDiv: {
            display: "flex",
            justifyContent: "centre"
        }
    })
);
