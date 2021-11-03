//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../helpers/Hoc/Wrapper/Wrapper';
import NavigationList from './NavigationList/NavigationList';
//******************************** */

interface NavigationProps {
    classes?: string;
}

const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <nav className="navigation h-100">
            <NavigationList classes={props.classes} />
        </nav>
    );
};
export default Navigation;
