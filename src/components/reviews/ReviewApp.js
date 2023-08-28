import React from 'react';
import Review from './Review';
import data from './Data';

import './app.css'
const ReviewApp = () => {

    return <div>
        <h2 className='headding'>Our Reviews</h2>
        <Review data={data}/>
    </div>;
};

export default ReviewApp;
