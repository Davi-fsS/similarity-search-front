import moment from 'moment';
import './style.css';
import { Article, CalendarToday, Language } from '@mui/icons-material';

const Card = ({ title, distance, link, index }) => {
    console.log("link:", link)

    return <div className='container' key={index}>
        <div>
            <h1 className='title'>FINEP</h1>
            <p className='text'>{distance}</p>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "inline-flex", alignItems: "center", gap: ".5rem"}}>
                    <Article className='icon' style={{width: "1rem"}}/>
                    <a href={`${link}`} target='_blank' rel='noopener noreferrer' style={{color: "white"}}>Ver Documento</a>
                </div>
                <div style={{display: "inline-flex", alignItems: "center", gap: ".5rem"}}>
                    <Language className='icon' style={{width: "1rem"}}/>
                    <a href={`${link}`} target='_blank' rel='noopener noreferrer' style={{color: "white"}}>Ver Site</a>
                </div>
            </div>
            {/* <div className='dateContainer'>
                <CalendarToday className='icon' style={{ width: "1rem" }} />
                <p className='text'>{moment(date).format("DD/MM/YY")}</p>
            </div> */}
        </div>
    </div>
};

export default Card;