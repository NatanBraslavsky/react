import {useState} from "react";
import InputAddTask from "./InputAddTask";
import '../../style/index.css';
import '../../style/AddTask/addTask.css';


const AddTask = ({addTask}) => {
    const [showAddTask, setShowAddTask] = useState(true);

    const handleChange = () =>{
        setShowAddTask(!showAddTask)
    }

    return (
        <div className="containerAddTask">
            {showAddTask ? (
                <div onClick={handleChange} className="containerShowAddTask">
                    <button className="btnAddTask"  >
                        <span className="xAddTaskCircle">+</span>
                        <span >Adicionar Tarefa</span>
                    </button>
                </div>
            ) : (
                <InputAddTask handleChange={handleChange} addTask={addTask}/>
            )}
        </div>
    );
};

export default AddTask;
