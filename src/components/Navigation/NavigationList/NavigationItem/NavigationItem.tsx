//********** IMPORTS ************* */
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import MobileLinksContext from '../../../../Context/MobileLinksContext';
//******************************** */

interface NavigationItemsProps {
    href: string;
    children: React.ReactNode;
}

const NavigationItems: React.FC<NavigationItemsProps> = (props) => {
    const router = useRouter();
    const mobileDrawerHandler = useContext(MobileLinksContext);
    const classes = ['navigation-item'];

    if (router.asPath === props.href) {
        // console.log(router.push());
        classes.push('active');
    }
    return (
        <li className="navigation-item flex items-center" onClick={() => mobileDrawerHandler()}>
            <Link
                to={props.href}
                className="navigation-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
            >
                <div className="active-link"></div>
                {props.children}
            </Link>
            {/* <NavLink href={props.href} className={classes.join(' ')}>{props.children}</NavLink> */}
        </li>
    );
};
export default NavigationItems;
