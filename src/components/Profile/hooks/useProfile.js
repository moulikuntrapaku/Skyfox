import {useEffect, useState} from 'react';
import profileService from "../services/profileService";

const useProfile= () => {
    const [profileLoading, setProfileLoading] = useState(true);
    const [profile, setProfile] = useState([]);
    useEffect(() => {
    const username = profileService.fetch().then(
        profile =>{
        setProfile(profile)
        setProfileLoading(false)
        }
        );
    }, []);
    return {
        profile:profile,
        profileLoading: profileLoading
    };
}
export default useProfile;