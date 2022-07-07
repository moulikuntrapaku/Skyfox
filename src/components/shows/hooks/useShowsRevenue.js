import {useEffect, useState} from "react";
import {QUERY_DATE_FORMAT} from "../../../Constants";
import showsService from "../services/showsService";
import {getUserRole} from "../../../helpers/authService"

const useShowsRevenue = (showsDate) => {
    const [isAdmin,setIsAdmin] = useState(false);
    const [showsRevenue, setShowsRevenue] = useState(0);

    useEffect(() => {
        updateShowsRevenue();
        // eslint-disable-next-line
    }, []);

    const updateShowsRevenue = () => {
        const formattedDate = showsDate.format(QUERY_DATE_FORMAT);

        showsService.getRevenue(formattedDate).then(showsRevenue => {
            setIsAdmin(getUserRole);
            setShowsRevenue(showsRevenue);
        });
    };

    return {
        showsRevenue: showsRevenue,
        updateShowsRevenue: updateShowsRevenue,
        isAdmin: isAdmin
    };
};

export default useShowsRevenue;
