import {Button, Dialog, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import styles from "./styles/seatSelectionDialogStyles"
import CustomerDetailsDialog from "./CustomerDetailsDialog";
import {INR_SYMBOL} from "../../Constants";
import PropTypes from "prop-types";
import PosterShowDialog from "./PosterShowDialog";

const SeatSelectionDialog = ({selectedShow, updateShowsRevenue, open, onClose}) => {
    const [showCustomerDetails, setShowCustomerDetails] = useState(false);
    const [seats, setSeats] = useState("1");
    const [showPoster, setShowPoster] = useState(false);
    const classes = styles();

    const handleClose = () => {
        setSeats("1");
        onClose();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth classes={{
                paper: classes.dialogRoot
            }}>
                <div className={classes.container}>
                    <Typography variant="h6" className={classes.dialogHeader}>
                        Select Seats
                    </Typography>
                    <div className={classes.dialogContent}>
                        <div style={{cursor: 'pointer'}} onClick={()=>{
                            setShowPoster(true);
                        }} className={classes.moviePicture}>
                                <img src={selectedShow.movie.poster} alt="poster" width="65px" height="85px"/>
                        </div>
                        <div className={classes.dialogMain}>
                            <Typography className={classes.movieMarquee} color="primary">
                                {selectedShow.movie.name}
                            </Typography>
                            <Typography variant="body2">
                                {selectedShow.movie.plot}
                            </Typography>
                            <Typography variant="subtitle2" color="primary" className={classes.movieMarquee}>
                                {selectedShow.movie.duration}
                            </Typography>
                            <div className={classes.dialogBottom}>
                                <div className={classes.seatsAndAmount}>
                                    <div className={classes.seatsSelector}>
                                        <TextField type="number" label="Seats" defaultValue="1"
                                                   inputProps={{step: "1", min: "1", max: "15"}}
                                                   onChange={(e) => setSeats(e.target.value)}/>
                                    </div>
                                    <Typography variant="subtitle1" color="secondary">
                                        {`${INR_SYMBOL}${(selectedShow.cost * seats).toFixed(2)}`}
                                    </Typography>
                                </div>
                                <Button variant="contained" color="primary"
                                        onClick={() => {
                                            setShowCustomerDetails(true);
                                            onClose();
                                        }}
                                        className={classes.dialogButton}>
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
            <CustomerDetailsDialog seats={seats} selectedShow={selectedShow} updateShowsRevenue={updateShowsRevenue}
                                   open={showCustomerDetails} onClose={() => {
                handleClose();
                setShowCustomerDetails(false)
            }}/>
            <PosterShowDialog selectedShow={selectedShow.movie.name} posterUrl={selectedShow.movie.poster} open={showPoster} 
            onClose={() => setShowPoster(false)}/>
        </>
    );
}

SeatSelectionDialog.propTypes = {
    selectedShow: PropTypes.object.isRequired,
    updateShowsRevenue: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default SeatSelectionDialog;
