import {CiMenuKebab} from "react-icons/ci";
import "../../style/index.css";
import "../../style/ShowTask/showTask.css";
import {IoIosCheckmark} from "react-icons/io";
import {useState} from "react";
import EditOptions from "./EditOptions";

const ShowTask = ({task}) => {
    const [hoveredId, setHoveredId] = useState(null);
    const [checkedIds, setCheckedIds] = useState([]);
    const [editShow, setEditShow] = useState("");

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const handleChangeCheck = (id) => {
        setCheckedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

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
                        >
                            <div
                                className={`checkContainer ${
                                    isChecked ? "checked" : ""
                                }`}
                                onClick={() => handleChangeCheck(tk.id)}
                            >
                                <IoIosCheckmark className="faCheck" />
                            </div>

                            <div className="containerShowTitleDescription">
                                <p className="titleShowText">{tk.title}</p>
                                <p className="descriptionShowText">
                                    {tk.description}
                                </p>
                            </div>

                            {hoveredId === tk.id && (
                                <div className="containerEditIcondOption">
                                    <CiMenuKebab
                                        className="iconMenuShowTask"
                                        onClick={() => {
                                            setEditShow("openEdit");
                                        }}
                                    />
                                </div>
                            )}
                            <div>
                                <EditOptions
                                    className="editOption"
                                    editShow={editShow}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ShowTask;
