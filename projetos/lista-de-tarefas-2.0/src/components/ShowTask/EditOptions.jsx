import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import {IoDuplicateOutline} from "react-icons/io5";

import "../../style/ShowTask/editOption.css";

const EditOptions = () => {
    return (
        <div className="containerEditOptions">
            <div className="selectAllContainer containerEditTask">
                <GoPencil className="iconAll pencilIcon"/> 
                <span className="txtAll editTxt">Editar</span>
            </div>
            <div className="selectAllContainer containerDuplicateTask">
                <IoDuplicateOutline className="iconAll duplicateIcon"/>
                <span className="txtAll duplicateTxt">Duplicar</span>
            </div>
            <div className="selectAllContainer containerDeleteTask">
                <GoTrash className="iconAll trashIcon"/> 
                <span className="txtAll deleteTxt">Excluir</span>
            </div>
        </div>
    );
};

export default EditOptions;
