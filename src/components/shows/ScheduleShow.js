import React, { useEffect, useState } from "react";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, Typography } from "@material-ui/core";
import styles from "../shows/styles/ScheduleShowStyles"
import CloseIcon from '@material-ui/icons/Close';
import moment from "moment";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent} from "@material-ui/core";
import { getMovies } from "../../helpers/authService";
import useMovies from "./hooks/useMovies";


function ScheduleShow({ showsDate, isAdmin, shows }) {
    const {movies, showMovies} = useMovies();
    const classes = styles();
    const [open, setOpen] = useState(false);
    const handleOpenScheduleMoviePopup = () => { setOpen(true) };
    const handleCloseScheduleMoviePopup = () => { setOpen(false) };
    const todayDate = moment().startOf("day");
    const bookedSlots = [];
    const [movie, setMovie] = useState('');
    const [cost, setCost] = useState(0);
    const handleChange = (event) => {
        setMovie(event.target.value);
      };
    const handleChangeCost = (event) => {
        setCost(event.target.value);
      };
    const slotIds = [1,2,3,4];
    const slot = {};
    
    slot[1]=""
    console.log(cost);

    console.log(movies);

    shows.map(show => (bookedSlots.push(show.slot.name)))

    return (
        <div>
            {
                isAdmin
                    ? (
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={showsDate.isBefore(todayDate)}
                            onClick={handleOpenScheduleMoviePopup}>SCHEDULE MOVIE</Button>
                    )
                    : (
                        <div>
                        </div>
                    )
            }

            <Dialog open={open} onClose={handleCloseScheduleMoviePopup}>
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" style={{ fontWeight: 'bold', flexGrow: 1 }} component="div" >
                            Schedule Movie
                        </Typography>
                        {/* <DialogActions
                     color="secondary"
                     onClick={handleCloseScheduleMoviePopup}>
                     <CloseIcon style={{ cursor: 'pointer' }}/>
                 </DialogActions> */}
                    </div>
                    <div>
                        <DialogContent>
                            <div>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Movie</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={movie}
                                        onChange={handleChange}
                                        label="Movie"
                                        style={{ width: 400}}
                                    >
                                        
                                        {movies.map(movie => (
                                        <MenuItem value={movie.imdbID}>{movie.Title}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <h2>Slots</h2>
                                <FormControl>
                                    <FormGroup>
                                    {/* {Object.entries(tagState).map(([key,value]) =>
                                        <FormControlLabel 
                                        control={<Checkbox checked={value} onChange={handleChange} name={key}/>}
                                        label={key}
                                        />
                                    )} */}
                                    </FormGroup>
                                </FormControl>
                                {/* <div>
                                    <FormControlLabel control={<Checkbox value="checkedC" />} label={"09:00 AM - 12:30 PM"} value="93" disabled={bookedSlots.includes("slot1")} />
                                </div> */}
                                {/* <div>
                                    <FormControlLabel control={<Checkbox value="checkedC" />} label={"01:00 PM - 04:00 PM"} value="94" disabled={bookedSlots.includes("slot2")} />
                                </div>
                                <div>
                                    <FormControlLabel control={<Checkbox value="checkedC" />} label={"06:00 PM - 09:00 PM"} value="95" disabled={bookedSlots.includes("slot3")} />
                                </div>
                                <div>
                                    <FormControlLabel control={<Checkbox value="checkedC" />} label={"10:00 PM - 01:00 AM"} value="96" disabled={bookedSlots.includes("slot4")} />
                                </div> */}
                                <h2>Cost</h2>
                                <TextField id="standard-basic" label="Cost" variant="standard" type="number" value={cost} onChange={(e) => setCost(e.target.value)}/>
                            </div>
                        </DialogContent>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={showsDate.isBefore(todayDate)}
                            onClick={handleOpenScheduleMoviePopup} style={{float:'right'}}>SCHEDULE MOVIE</Button>
                    </div>
                </DialogTitle>
            </Dialog>
        </div>
    );
}

export default ScheduleShow;