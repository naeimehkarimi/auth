import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import authenticatedRoute from '../authentication';
const Profile = () => {
   
    return (
        <div className='container'>
         <h1>  Profile Page</h1>
        </div>
    );
};

export default  authenticatedRoute(Profile);
