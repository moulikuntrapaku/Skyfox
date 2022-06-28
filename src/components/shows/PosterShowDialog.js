import { Dialog, Typography} from "@material-ui/core";
import React from "react";
import styles from "./styles/posterShowDialogStyles"
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close"

const PosterShowDialog = ({selectedShow, posterUrl,open, onClose}) => {
    const classes = styles();
    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth classes={{
                paper: classes.dialogRoot }}>
                <div className={classes.container}>
                    <Typography>
                        <div variant="h6" className={classes.dialogHeader}>
                        {selectedShow}
                        
                         <CloseIcon onClick={handleClose} className={classes.closeIcon}/>
                        </div>
                    </Typography>
                    <div className={classes.moviePicture}>
                        <img src={posterUrl} alt="poster" width="90%" height="500px"/>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

PosterShowDialog.propTypes = {
    selectedShow: PropTypes.object.isRequired,
    isShow: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default PosterShowDialog;
