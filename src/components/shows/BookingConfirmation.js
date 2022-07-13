import React from 'react'
import {Dialog, Button,DialogContent,Typography} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert/Alert";
import styles from "./styles/customerDetailsDialogStyles"
import ticketPdfGenerator from "./services/ticketPdfGenerator"
import CloseIcon from '@material-ui/icons/Close';


const BookingConfirmation = ({bookingConfirmation, showConfirmation, role, data ,paymentMode,selectedShow}) => {
    const classes = styles();
    return (
      <Dialog open={showConfirmation} >
            <Alert severity="success">
                Seats booked successfully!
            </Alert>
            <Typography variant="h6" className={classes.dialogHeader}>
                Booking Confirmation
                <a href="/"><CloseIcon style={{ cursor: 'pointer' ,margin:"10px 0px 0px 30px"}}/></a>
            </Typography>
                
           {role  &&<DialogContent>
                <Typography variant="body1" display="block" gutterBottom>
                    Booking id : {bookingConfirmation.id}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Show Date: {bookingConfirmation.showDate}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Show start time: {bookingConfirmation.startTime}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Customer Name: {bookingConfirmation.customerName}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Amount Paid: {bookingConfirmation.amountPaid}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Number of seats booked: {bookingConfirmation.noOfSeats}
                </Typography>

            </DialogContent>}
            {!role &&<DialogContent >
                <Typography variant="body1" display="block" gutterBottom>
                    Name: {bookingConfirmation.customerName}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Email: {data.email}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Number of seats booked: {bookingConfirmation.noOfSeats}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Movie name: {selectedShow.movie.name}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Amount Paid: {bookingConfirmation.amountPaid}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Payment mode : {paymentMode}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Show Date: {bookingConfirmation.showDate}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Show start time: {bookingConfirmation.startTime}
                </Typography>
            </DialogContent>}
            {!role &&<Button
              variant="contained"
              color='primary'
              onClick={() => ticketPdfGenerator(bookingConfirmation,selectedShow,paymentMode,data)}
            >
                download ticket
              </Button>}
        </Dialog>
    )
}

export default BookingConfirmation;
