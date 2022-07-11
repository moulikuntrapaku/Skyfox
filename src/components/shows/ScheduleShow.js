import React ,{useEffect, useState}from "react";
import {Button,Dialog, DialogActions, DialogContent, DialogTitle,Typography} from "@material-ui/core";
import styles from "../shows/styles/ScheduleShowStyles"
import CloseIcon from '@material-ui/icons/Close';
import moment from "moment";


function ScheduleShow({showsDate,isAdmin}) {
    //console.log("ShowsDateshowsDate"+showsDate);
    const classes = styles();
    const [open, setOpen] = useState(false);
    const [disableValue,setDisableValue]=useState(false);
    const handleOpenScheduleMoviePopup = () => {setOpen(true)};
    const handleCloseScheduleMoviePopup = () => {setOpen(false)};

    // useEffect(()=>{
    //     console.log(showsDate+"   "+date);
    //     if(showsDate<date){
    //         console.log("disbale");
    //         setDisableValue(true);}
    // })

    
    const dateLimit = showsDate;
    const now = moment();
    const date=now.toString();
    console.log("now",now.toString()," ",dateLimit);

    console.log("Dates: ",showsDate," ",date);
    console.log("value: ",now.isAfter(dateLimit));
    if(showsDate<date){
        console.log("disable");
    }
    return (
        <div>
             {
                isAdmin
                    ? (
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={showsDate<date}
                            onClick={handleOpenScheduleMoviePopup}>
                            SCHEDULE MOVIE
                        </Button>
                    )
                    : (
                          <div>
                          </div>
                    )
            }
            
         <Dialog open={open} onClose={handleCloseScheduleMoviePopup}>
         <DialogTitle className={classes.dialogTitle}>
             <div style={{ display: 'flex' }}>
                 <Typography variant="h5" style={{fontWeight: 'bold', flexGrow: 1}} component="div" >
                     Schedule Movie
                 </Typography>
                 <DialogActions
                     color="secondary"
                     onClick={handleCloseScheduleMoviePopup}>
                     <CloseIcon style={{ cursor: 'pointer' }}/>
                 </DialogActions>
                 <DialogContent>
                 <h2>Slots</h2>
                 <h2>Cost</h2>
                 </DialogContent>
             </div>
         </DialogTitle>
         </Dialog>
        </div>
    );
}

export default ScheduleShow;