import {CiMenuKebab} from "react-icons/ci";
import "../../style/index.css";
import "../../style/ShowTask/showTask.css";
import {IoIosCheckmark} from "react-icons/io";
import {useState} from "react";
import EditOptions from "./EditOptions";
import ModalTask from "../EditTask/ModalTask";

const ShowTask = ({task, deleteTask, editTask, duplicateTask}) => {
    const [hoveredId, setHoveredId] = useState(null);
    const [checkedIds, setCheckedIds] = useState([]);
    const [editShow, setEditShow] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const handleChangeCheck = (e, id) => {
        e.stopPropagation()
        setCheckedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleEditClick = (e, tk) => {
        e.stopPropagation();
        setEditShow(tk.id);
    }

    const handleTaskClick = (tk) => {
        setSelectedTask(tk)
    }

    return (
        <div>
            <ul>
                {task.map((tk) => {
                    const isChecked = checkedIds.includes(tk.id);

                    return (
                        <li
                            className="listContainerTask"
                            key={tk.id}
                            onMouseEnter={() => handleMouseEnter(tk.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleTaskClick(tk)}
                        >
                            <div
                                className={`checkContainer ${isChecked ? "checked" : ""}`}
                                onClick={(e) => handleChangeCheck(e, tk.id)}
                            >
                                <IoIosCheckmark className="faCheck" />
                            </div>

                            <div className="containerShowTitleDescription">
                                <p className="titleShowText">{tk.title}</p>
                                <p className="descriptionShowText">
                                    {tk.description}
                                </p>
                            </div>
                            
                            {(hoveredId === tk.id || editShow === tk.id) && (
                                    <div className="containerEditIcondOption">
                                        <CiMenuKebab
                                            className={`iconMenuShowTask ${editShow === tk.id ? "active" : ""}`}
                                            onClick={(e) => handleEditClick(e, tk)}
                                        />
                                    </div>
                            )}
                            {editShow === tk.id && (
                                <EditOptions
                                    className={`editOption ${editShow === tk.id ? "openEdit" : ""}`}
                                    editShow={editShow}
                                    id={tk.id}
                                    deleteTask={(e, id)=>{
                                        deleteTask(e, id)
                                        setEditShow(null);
                                    }}
                                    duplicateTask={(e, id) => {
                                        duplicateTask(e, id);
                                        setEditShow(null);
                                    }}
                                    setEditShow={setEditShow}
                                />
                            )}
                        </li>
                    );
                })}
                {editShow && (
                    <div
                        className="overlay"
                        onClick={() => {
                            setEditShow(null);
                        }}
                    ></div>
                )}
            </ul>
            {selectedTask && (
                <ModalTask task={selectedTask} setSelectedTask={setSelectedTask} editTask={editTask}/>
            )}
        </div>
    );
};

export default ShowTask;
