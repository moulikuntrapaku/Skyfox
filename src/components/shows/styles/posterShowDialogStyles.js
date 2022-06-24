import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
        dialogRoot: {
            overflow: "hidden",
            minHeight: "30vh",
            maxHeight: "100vh",
            maxWidth: "65vh",
        },
       
        dialogHeader: {
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            padding: "10px 0px 10px 50px",
            marginRight: "25px"
        },
        moviePicture: {
            display: "flex",
            justifyContent: "center",
            minWidth: "15%",
            marginBottom: "25px",
            marginTop:"10px"
        }
    })
);
