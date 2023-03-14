import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = (props) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        // let params = Object.fromEntries([...searchParams])

        let token = Cookies.get('token')

        if (token){
            console.log('found token')
        }else{
            setIsLoggedIn(false);
            console.log('naviagte')
            return navigate('/auth/login');
        }


        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;