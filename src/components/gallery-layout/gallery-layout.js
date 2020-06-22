import React, { useState, useEffect, Fragment } from 'react';

import './gallery-layout.css';

import { API, START_DATE } from '../../const';
import { NavigationLayout } from '../navigation-layout/navigation-layout';

export const GalleryLayout = () => {

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetch(`${API}&start_date=${START_DATE}&end_date=2020-06-21`).then( res => res.json() ).then( data => setPictures(data));
    }, [pictures]);

    return(
        <Fragment>
            <NavigationLayout activeLink='Gallery'/>
            <div className='gallery-layout'>
            {
                pictures.reverse().map((el, index) => {
                    return(
                        <div className='gallery-img-container' key={index}>
                            <img src={el.url} alt={el.title}/>
                            <p>{el.date}</p>
                            <p>{el.title}</p>
                        </div>
                    )
                })
            }
            </div>
        </Fragment>
    )
}