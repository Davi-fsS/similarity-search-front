import { useState, useRef, useEffect } from "react";
import './style.css';
import { KeyboardArrowRight } from "@mui/icons-material";
import Card from "../components/Card/Card";
import ReactLoading from 'react-loading';

const SearchView = () => {
    const [text, setText] = useState("");
    const [canEnter, setCanEnter] = useState(false);
    const textareaRef = useRef(null);
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;

        if(text.length === 0){
            setCanEnter(false);
        }
        else{
            setCanEnter(true)
        }
    }, [text]);

    const handleRequest = async() => {
        setLoading(true);
        setNotices([]);

        setTimeout(() => {
            setNotices([
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
                {
                    title: "FINEP",
                    subtitle: "Conhecimento Brasil",
                    date: "2024-09-28",
                    notice: 689
                },
            ]);

            setLoading(false);
        }, 1000);
    };

    return (
        <div className="search">
            <p className="title-page">
                Conte-me como é o seu projeto, qual seu objetivo, desafios tecnológicos e características
            </p>
            <div className="input-button-container">
                <textarea
                    ref={textareaRef}
                    className="input"
                    placeholder="Digite aqui..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="button" style={text.length ? {opacity: 1} : {opacity: 0.8}} disabled={!canEnter} onClick={handleRequest}>
                    <KeyboardArrowRight className="icon" />
                </button>
            </div>
            <div className="cards">
            {
                loading ?
                    <ReactLoading type="spin" color="#fff" width={"5%"}/>
                :
                notices?.length > 0 ? 
                    notices?.map((item) => <Card title={item.title} subtitle={item.subtitle} date={item.date} index={item.notice}/>)
                :
                <p className="title-page" style={{fontSize: ".9rem"}}>Sem editais encontrados</p>
            }
            </div>
        </div>
    );
};

export default SearchView;
