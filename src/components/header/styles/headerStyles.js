import {makeStyles} from "@material-ui/core";

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
            cursor: "pointer",
            paddingLeft:"20px"
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
            padding: "0 4em"
        },
        cartButton: {
            color: "white",
            padding: "10px"
        },
        headerActions: {
            display:"flex",
            height:"100%"
        }
    })
);
