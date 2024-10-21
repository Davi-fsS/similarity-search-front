import moment from 'moment';
import './style.css';

const Card = ({title, subtitle, date, index}) => {
    return <div className='container' key={index}>
        <h1 className='title'>{title}</h1>
        <p className='text'>{subtitle}</p>
        <p className='text'>Data de submissão: {moment(date).format("DD/MM/YY")}</p>
    </div>
};

export default Card;