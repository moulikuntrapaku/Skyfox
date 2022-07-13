import { Button, Dialog, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import styles from "./styles/seatSelectionDialogStyles"
import CustomerDetailsDialog from "./CustomerDetailsDialog";
import { INR_SYMBOL } from "../../Constants";
import PropTypes from "prop-types";
import PosterShowDialog from "./PosterShowDialog";
import { getUsername, getUserRole, customer} from "../../helpers/authService";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import bookingService from "./services/bookingService";
import moment from "moment";
import BookingConfirmation from "./BookingConfirmation";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Alert from "@material-ui/lab/Alert/Alert";


const SeatSelectionDialog = ({ selectedShow, updateShowsRevenue, open, onClose}) => {
    const [showCustomerDetails, setShowCustomerDetails] = useState(false);
    const [seats, setSeats] = useState("1");
    const [showPoster, setShowPoster] = useState(false);
    const classes = styles();
    const [role,setRole]=useState("");
    const [success, setSuccess] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [bookingConfirmation, setBookingConfirmation] = useState({});
    const [paymentMode, setPaymentMode] = React.useState('');
    const [isValid,setIsValid]=useState(false);
    const [data,setData]=useState({});
    const handlePaymentMode = (event) => {
        setPaymentMode(event.target.value);
        setIsValid(true);
      };

    useEffect(() => {
        getUserRole().then(response=>{
          setRole(response);
        })
        customer().then(response=>{
            setData(response.data);
          })
      },[]);
    const handleClose = () => {
        setSeats("1");
        onClose();
    };
    
    const currentTime = moment().startOf("second");
    const showTime=moment(selectedShow.date+' '+selectedShow.slot.startTime);
    {console.log(showTime.isBefore(currentTime))}

    const bookShowForCustomer = async () => {
        
        const today = moment().format("YYYY-MM-DD");
        const payload = {
            date: today,
            showId: selectedShow.id,
            customer: {
                name: getUsername(),
                phoneNumber:data.phoneNumber,
            },
            noOfSeats: seats
        };
        try {
            const response = await bookingService.create(payload);
            setSuccess(true);
            updateShowsRevenue();
            setBookingConfirmation(response.data)
            setShowConfirmation(true);
        } catch {
            setSuccess(false);
        } finally {
            onClose();
        }
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
                        <div style={{ cursor: 'pointer' }} onClick={() => {
                            setShowPoster(true);
                        }} className={classes.moviePicture}>
                            <img src={selectedShow.movie.url} alt="poster" width="75px" height="105px" />
                        </div>
                        <div className={classes.dialogMain}>
                            <Typography className={classes.movieMarquee} color="primary">
                                {selectedShow.movie.name}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {selectedShow.movie.plot}
                            </Typography>
                            <Typography variant="subtitle2" color="primary" className={classes.movieMarquee}>
                                {selectedShow.movie.duration}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                IMDb rating: {selectedShow.movie.imdbRating}
                            </Typography>
                            <div className={classes.dialogBottom}>
                                <div className={classes.seatsAndAmount}>
                                    <div className={classes.seatsSelector}>
                                        <TextField type="number" label="Seats" defaultValue="1"
                                            inputProps={{ step: "1", min: "1", max: "15" }}
                                            onChange={(e) => setSeats(e.target.value)} />
                                    </div>
                                    <Typography variant="subtitle1" color="secondary">
                                        {`${INR_SYMBOL}${(selectedShow.cost * seats).toFixed(2)}`}
                                    </Typography>
                                </div>
                                {role==="CUSTOMER" &&<div cvariant="caption" color="textSecondary">
                                    <InputLabel id="paymentMode">Payment Mode</InputLabel>
                                    <Select
                                        
                                        value={paymentMode}
                                        fullWidth
                                        onChange={handlePaymentMode}
                                    >
                                    <MenuItem value="UPI Payment" >Upi Payment</MenuItem>
                                    <MenuItem value="Card Payment">Card Payment</MenuItem>
                                   
                                    </Select>
                                </div>}
                                {role=== "ADMIN" && <Button id="adminNext" variant="contained" color="primary"
                                    disabled={showTime.isBefore(currentTime)}
                                    onClick={() => {                                         
                                        setShowCustomerDetails(true);
                                        onClose();
                                    }}
                                    className={classes.dialogButton}>
                                    Next
                                </Button>}
                                {role === "CUSTOMER" && <Button  id="customerBook" variant="contained" color="primary"
                                    disabled={!isValid || showTime.isBefore(currentTime)} 
                                    onClick={bookShowForCustomer}
                                    className={classes.dialogButton}>
                                    Book
                                </Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
            <CustomerDetailsDialog seats={seats} selectedShow={selectedShow} role={"ADMIN"} updateShowsRevenue={updateShowsRevenue}
                open={showCustomerDetails} onClose={() => {
                    handleClose();
                    setShowCustomerDetails(false)
                }} />
            <PosterShowDialog selectedShow={selectedShow.movie.name} posterUrl={selectedShow.movie.url} open={showPoster}
                onClose={() => setShowPoster(false)} />

            <BookingConfirmation bookingConfirmation={bookingConfirmation} paymentMode={paymentMode} showConfirmation={showConfirmation} role={role} data={data} selectedShow={selectedShow}/>

           <Snackbar open={success === false} autoHideDuration={2000} onClose={() => setSuccess(null)}>
                <Alert severity="error">
                    Sorry, seats could not be booked!
                    </Alert>
            </Snackbar>
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
