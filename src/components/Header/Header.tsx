//********** IMPORTS ************* */
import React, { useEffect, useState } from 'react';
import Wrapper from '../../helpers/Hoc/Wrapper/Wrapper';
import Image from 'next/image';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-scroll';

//******************************** */

interface HeaderProps {
    isMobile: boolean;
    drawerHandler: () => void;
}
const Header: React.FC<HeaderProps> = ({ isMobile, drawerHandler }) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', headerScrollHandler);
        return () => {
            window.removeEventListener('scroll', headerScrollHandler);
        };
    }, []);
    const headerScrollHandler = () => {
        setScroll(window.scrollY > 50);
    };
    return (
        <header
            className={`header px-8 py-4 flex items-center ${!scroll ? '' : 'header-scroll'} ${
                isMobile ? 'mobile-enabled' : ''
            }`}
        >
            <Wrapper class="container">
                <Wrapper class="flex justify-between flex-wrap">
                    <Wrapper class="logo  h-100 cursor-pointer">
                        <Link to="home" className="logo-link flex items-center">
                            <Wrapper class="logo-link-image h-16 mr-3 flex items-center">
                                {/* <Image src="/images/logo.svg" alt="main logo" width={40} height={40} /> */}
                                <Image src="/images/s.png" alt="Main Logo" height={40} width={40} />
                            </Wrapper>
                            <span className="text-4xl tracking-wider font-bold uppercase">
                                Shamlo
                            </span>
                        </Link>
                    </Wrapper>
                    {/* //- nav */}
                    {isMobile ? (
                        <Wrapper
                            class="mobile-menu flex items-center"
                            clicked={() => drawerHandler()}
                        >
                            <svg
                                viewBox="0 0 28 28"
                                className="svg-icon svg-r"
                                height="28"
                                width="28"
                            >
                                <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
                            </svg>
                        </Wrapper>
                    ) : (
                        <Wrapper class="nav flex items-center">
                            <Navigation classes=" flex items-center justify-between" />
                            <Wrapper class="nav-contact">
                                <Wrapper class="ml-3">
                                    <Link
                                        to="contact"
                                        className="btn btn-contact flex items-center"
                                        activeClass="active"
                                        spy={true}
                                        offset={-70}
                                    >
                                        <p>Contact</p>
                                    </Link>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    )}
                </Wrapper>
            </Wrapper>
        </header>
    );
};
export default Header;
