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
        <Wrapper class="modal">
            <BackDrop show={show} clicked={modalClosed} />
            <Wrapper
                class="modal-overlay"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-200vh)',
                    opacity: show ? '1' : '0',
                }}
            >
                <Wrapper class="modal-content">
                    <Wrapper class="modal-close" clicked={modalClosed}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            color="#02073E"
                            height="24px"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'rgb(2, 7, 62)' }}
                        >
                            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                        </svg>
                    </Wrapper>
                    {children}
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};
export default Modal;
