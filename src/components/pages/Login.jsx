import axios from 'axios';
import React from 'react';
import Cookies from 'js-cookie';
import { useDispatch,useSelector } from 'react-redux';
import { addUserData } from '../../redux/action/auth';

const Login = () => {

    const dispatch=useDispatch();
    const user = useSelector((state) => state.auth);
    // console.log(user.data);

    const handleGetToken = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        Cookies.set('user-data', response.data);
        dispatch(addUserData(response.data));

    };

    return (
        <div className='container login'>
            <h1>Login Page</h1>
            <button onClick={()=>handleGetToken()}> click to login</button>
        </div>
    );
};

export default Login;
