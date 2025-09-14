import React from "react";
import { createPortal } from "react-dom";

const PopUp = ({copied}) => {
    return (
        <section>
            {copied && (
                <div>
                    <p>Conteúdo copiado.</p>
                </div>
            )}
        </section>,
        document.querySelector('#popup-content')
    );
};

export default PopUp;
