//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../helpers/Hoc/Wrapper/Wrapper';
import BackDrop from './BackDrop';
//******************************** */

interface ModalProps {
    show: boolean;
    modalClosed: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, modalClosed, children }) => {
    return (
        <>
            <BackDrop show={show} clicked={modalClosed} />
            <Wrapper
                class="modal"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-200vh)',
                    opacity: show ? '1' : '0',
                }}
            >
                {children}
            </Wrapper>
        </>
    );
};
export default Modal;
