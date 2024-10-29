import moment from 'moment';
import './style.css';
import { CalendarToday } from '@mui/icons-material';
import { useState } from 'react';

const Card = ({title, subtitle, date, index}) => {

    return <div className='container' key={index}>
        <h1 className='title'>{title}</h1>
        <p className='text'>{subtitle}</p>
        <div className='dateContainer'>
            <CalendarToday className='icon' style={{width: "1rem"}}/>
            <p className='text'>{moment(date).format("DD/MM/YY")}</p>
        </div>
    </div>
};

export default Card;