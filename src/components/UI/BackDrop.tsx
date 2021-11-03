//********** IMPORTS ************* */
import React, { useEffect } from 'react';
//******************************** */

interface BackDropProps {
    show: boolean;
    clicked?: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ show, clicked }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show]);
    return show ? <div className="backdrop" onClick={clicked}></div> : null;
};
export default BackDrop;
