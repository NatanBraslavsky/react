import React, {useState} from "react";
import InputAddTask from "./InputAddTask";
import '../style/index.css';

const AddTask = () => {
    const [showAddTask, setShowAddTask] = useState(true);

    const handleChange = () =>{
        setShowAddTask(!showAddTask)
    }

    return (
        <div>
            {showAddTask ? (
                <button className="btnAddTask" onClick={handleChange}>
                    <span className="xAddTaskCircle">+</span>
                    <span >Adicionar Tarefa</span>
                </button>
            ) : (
                <InputAddTask handleChange={handleChange}/>
            )}
        </div>
    );
};

export default AddTask;
