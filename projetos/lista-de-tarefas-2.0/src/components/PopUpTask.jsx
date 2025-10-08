import {useEffect, useState} from "react";
import "../style/popUp.css";
import {TfiClose} from "react-icons/tfi";

const PopUpTask = ({addTaskShowPop}) => {
    const [className, setClassName] = useState("");

    useEffect(() => {
        if (addTaskShowPop) {
            setClassName("show");
        } else {
            setClassName("");
        }
    }, [addTaskShowPop]);

    return (
        <div className={`popUpContainer ${className}`}>
            <p>Tarefa adicionada</p>
            <TfiClose className="iconClose" onClick={()=>{
                setClassName("");
            }}/>
        </div>
    );
};

export default PopUpTask;
