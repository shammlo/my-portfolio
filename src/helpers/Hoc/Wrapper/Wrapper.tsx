//********** IMPORTS ************* */
import React from 'react';
//******************************** */

interface WrapperProps {
    class?: string | undefined;
    clicked?: () => void;
    tabindex?: number | undefined;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    dataType?: string;
    ariaLabel?: string;
    id?: string;
    animation?: string;
    anchorPlace?: string;
    anchor?: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
    return (
        <div
            tabIndex={props.tabindex}
            className={props.class}
            id={props.id}
            style={props.style}
            onClick={props.clicked}
            data-type={props.dataType}
            aria-label={props.ariaLabel}
            data-aos={props.animation}
            data-aos-anchor-placement={props.anchorPlace}
            data-aos-anchor={props.anchor}

            // {...props}
        >
            {props.children}
        </div>
    );
};
export default Wrapper;
