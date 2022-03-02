//********** IMPORTS ************* */
import React, { useContext } from 'react';
// import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import MobileLinksContext from '../../../../Context/MobileLinksContext';
//******************************** */

interface NavigationItemsProps {
    href: string;
    children: React.ReactNode;
}

const NavigationItems: React.FC<NavigationItemsProps> = (props) => {
    const mobileContext = useContext(MobileLinksContext);

    return (
        <li
            className="navigation-item flex items-center"
            onClick={() => mobileContext.drawerHandler(false)}
        >
            <Link
                to={props.href}
                className="navigation-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
            >
                {!mobileContext.isMobile ? <div className="active-link"></div> : null}
                {props.children}
            </Link>
        </li>
    );
};
export default React.memo(NavigationItems);
