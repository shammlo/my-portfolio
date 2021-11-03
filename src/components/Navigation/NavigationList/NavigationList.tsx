//********** IMPORTS ************* */
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
//******************************** */

interface NavigationListProps {
    classes?: string;
}

const NavigationList: React.FC<NavigationListProps> = (props) => {
    return (
        <ul className={`navigation-list ${props.classes}`}>
            <NavigationItem href="home">
                <span className="">Home</span>
            </NavigationItem>
            <NavigationItem href="about-me">
                <span className="">About me</span>
            </NavigationItem>
            <NavigationItem href="projects">
                <span className="">Projects</span>
            </NavigationItem>
        </ul>
    );
};
export default NavigationList;
