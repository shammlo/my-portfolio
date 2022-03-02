//********** IMPORTS ************* */
import React from 'react';
import dynamic from 'next/dynamic';
const NavigationList = dynamic(() => import('./NavigationList/NavigationList'));
//******************************** */

interface NavigationProps {
    classes?: string;
    drawerHandler?: () => void;
    isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <nav className="navigation h-100">
            <NavigationList classes={props.classes} />
        </nav>
    );
};
export default Navigation;
