import { useState, useRef, useEffect } from "react";
import './style.css';
import { KeyboardArrowRight } from "@mui/icons-material";
import { toast } from "react-toastify";

const SearchView = () => {
    const [text, setText] = useState("");
    const [canEnter, setCanEnter] = useState(false);
    const textareaRef = useRef(null);

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
    };

    return (
        <div className="search">
            <p className="title">
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
                <button className="button" style={text.length ? {opacity: 1} : {opacity: 0}} disabled={!canEnter} onClick={() => alert("teste")}>
                    <KeyboardArrowRight className="icon" />
                </button>
            </div>
        </div>
    );
};

export default SearchView;
