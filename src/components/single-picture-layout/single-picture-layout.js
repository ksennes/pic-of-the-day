import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';

import './single-picture-layout.css';

import { API } from '../../const';

import { NavigationLayout } from '../navigation-layout/navigation-layout';

export const SinglePictureLayout = ()=> {
    const [picture, setPicture] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

    useEffect(() => {
        fetch(`${API}&date=${date}`).then( res => res.json()).then( data => setPicture(data));
    }, [date]);

    useEffect(() => {
        const savedDate = sessionStorage.getItem('date');
        if(savedDate) {
            setDate(savedDate);
            setStartDate(moment(savedDate).toDate());
        };
    }, []);

    const handleChangeDate = (changedDate) => {
        sessionStorage.setItem('date', changedDate);
        setDate(changedDate);
    }

    return(
        <div className='single-picture-layout'>
            <NavigationLayout activeLink = 'Featured picture'/>
            <h1>Picture of the day</h1>
            <div className='img-container'>
                <img src={picture.url}/>
            </div>
            <div className='date-picker-container'>
                <p>Choose day: </p>
                <DatePicker todayButton="Today"
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                handleChangeDate(moment(date).format('YYYY-MM-DD'));
                            }}
                />
            </div>
        </div>
    )
}