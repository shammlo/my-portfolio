//********** IMPORTS ************* */
import React from 'react';
import { Link } from 'react-scroll';
import Wrapper from '../../helpers/Hoc/Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';
import BackDrop from '../UI/BackDrop';
import Image from 'next/Image';

//******************************** */

interface MobileDrawerProps {
    mobileDrawer: boolean;
    drawerHandler: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ mobileDrawer, drawerHandler }) => {
    return (
        <Wrapper tabindex={-1} class={`drawer ${mobileDrawer ? 'drawer-open' : 'drawer-closed'}`}>
            <BackDrop show={mobileDrawer} clicked={drawerHandler} />
            <Wrapper
                class="drawer-content h-100"
                style={
                    mobileDrawer
                        ? { width: '35rem' }
                        : { width: '35rem', transform: 'translateX(-150%)' }
                }
            >
                <Wrapper class="drawer-content-wrapper flex flex-col h-100">
                    <Wrapper class="flex justify-between items-center">
                        <Wrapper class="logo  h-100 cursor-pointer">
                            <Link to="home" className="logo-link flex items-center">
                                <Wrapper class="logo-link-image h-16 mr-3 flex items-center">
                                    {/* <Image src="/images/logo.svg" alt="main logo" width={40} height={40} /> */}
                                    <Image
                                        src="/images/s.png"
                                        alt="Main Logo"
                                        height={40}
                                        width={40}
                                    />
                                </Wrapper>
                                <span className="text-4xl tracking-wider font-bold uppercase">
                                    Shamlo
                                </span>
                            </Link>
                        </Wrapper>
                        <Wrapper clicked={() => drawerHandler()}>
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
                    </Wrapper>
                    <Navigation classes="" />
                    <Wrapper class="nav-contact self-end w-100">
                        <Wrapper class="">
                            <Link
                                to="contact"
                                className="rounded-lg py-6 px-8 block bg-[#8d448b] text-[#fff] text-center "
                                spy={true}
                                offset={-70}
                            >
                                <p className="text-3xl">Contact</p>
                            </Link>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};
export default MobileDrawer;
