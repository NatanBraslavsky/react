import React, {useState} from "react";
import InputAddTask from "./InputAddTask";
import '../style/index.css';
import '../style/addTask.css';


const AddTask = () => {
    const [showAddTask, setShowAddTask] = useState(true);

    const handleChange = () =>{
        setShowAddTask(!showAddTask)
    }

    return (
        <div className="containerAddTask">
            {showAddTask ? (
                <div onClick={handleChange}>
                    <button className="btnAddTask"  >
                        <span className="xAddTaskCircle">+</span>
                        <span >Adicionar Tarefa</span>
                    </button>
                </div>
            ) : (
                <InputAddTask handleChange={handleChange}/>
            )}
        </div>
    );
};

export default AddTask;
