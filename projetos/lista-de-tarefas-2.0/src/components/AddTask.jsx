import React, {useState} from "react";
import InputAddTask from "./InputAddTask";

const AddTask = () => {
    const [showAddTask, setShowAddTask] = useState(true);

    const handleChange = () =>{
        setShowAddTask(!showAddTask)
    }

    return (
        <div>
            {showAddTask ? (
                <button onClick={handleChange}>
                    Adicionar Tarefa
                </button>
            ) : (
                <InputAddTask handleChange={handleChange}/>
            )}
        </div>
    );
};

export default AddTask;
