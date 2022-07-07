import React from "react";
import {Typography} from "@material-ui/core";
import styles from "./styles/showsRevenueStyles"
import PropTypes from "prop-types";
import {INR_SYMBOL} from "../../Constants";

const ShowsRevenue = ({showsRevenue,isAdmin}) => {
    const classes = styles();
    // Todo
    return (
        <>
            {
                isAdmin
                    ? (
                        <Typography variant="h5" color="secondary" className={classes.showsRevenueContainer}>
                        Revenue: {`${INR_SYMBOL}${showsRevenue}`}
                        </Typography>
                    )
                    : (
                          <div>
                          </div>
                    )
            }
        </>
    );
};

ShowsRevenue.propTypes = {
    showsRevenue: PropTypes.number.isRequired,
    showsRevenueLoading: PropTypes.bool.isRequired
};

export default ShowsRevenue;
