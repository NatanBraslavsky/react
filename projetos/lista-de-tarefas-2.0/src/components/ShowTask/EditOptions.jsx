import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import {IoDuplicateOutline} from "react-icons/io5";

import "../../style/ShowTask/editOption.css";
import "../../style/ShowTask/showTask.css";

const EditOptions = ({className, id, deleteTask, duplicateTask, setEditShow}) => {
    return (
        <div className={`containerEditOptions ${className}`}>
            <div className="selectAllContainer containerEditTask" onClick={()=>setEditShow(null)}>
                <GoPencil className="iconAll pencilIcon"/> 
                <span className="txtAll editTxt">Editar</span>
            </div>
            <div className="selectAllContainer containerDuplicateTask" onClick={(e) => duplicateTask(e, id)}>
                <IoDuplicateOutline className="iconAll duplicateIcon"/>
                <span className="txtAll duplicateTxt">Duplicar</span>
            </div>
            <div className="selectAllContainer containerDeleteTask" onClick={(e)=> deleteTask(e, id)}>
                <GoTrash className="iconAll trashIcon"/> 
                <span className="txtAll deleteTxt">Excluir</span>
            </div>
        </div>
    );
};

export default EditOptions;
