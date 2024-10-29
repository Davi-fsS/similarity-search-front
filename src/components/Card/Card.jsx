import moment from 'moment';
import './style.css';
import { CalendarToday } from '@mui/icons-material';

const Card = ({ title, distance, link, index }) => {
    console.log("link:", link)

    return <div className='container' key={index}>
        <a href={`${link}`} target='_blank' rel='noopener noreferrer'>
            <h1 className='title'>{title}</h1>
            <p className='text'>{distance}</p>
            {/* <div className='dateContainer'>
                <CalendarToday className='icon' style={{ width: "1rem" }} />
                <p className='text'>{moment(date).format("DD/MM/YY")}</p>
            </div> */}
        </a>
    </div>
};

export default Card;