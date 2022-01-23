//********** IMPORTS ************* */
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Wrapper from '../helpers/Hoc/Wrapper/Wrapper';
import AOS from 'aos';
import { useRouter } from 'next/router';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import MobileDrawer from '../components/MobileDrawer/MobileDrawer';
import MobileLinksContext from '../Context/MobileLinksContext';
//******************************** */

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const windowScreen = typeof window != 'undefined' && (window as any).innerWidth < 1025;
    const router = useRouter();
    const [mobileDrawer, setMobileDrawer] = useState(false);
    useEffect(() => {
        AOS.init({
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            offset: 120, // offset (in px) from the original trigger point
            delay: 250, // values from 0 to 3000, with step 50ms
            duration: 1200, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom',
            useClassNames: false,
        }); // defines which position of the element regarding to window should trigger the animation });
        AOS.refresh();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, [isMobile]);

    useEffect(() => {
        windowScreen && setIsMobile(true);

        return () => {
            setIsMobile(false);
        };
    }, [windowScreen]);

    const updateWindowWidth = () => {
        setIsMobile(window.innerWidth < 1025);
    };

    const drawerHandler = () => {
        setMobileDrawer(!mobileDrawer);
    };

    return (
        <Wrapper class={`app layout ${isMobile ? 'mobile' : 'large-screen'}`}>
            {/* Top navigation */}
            <Header isMobile={isMobile} drawerHandler={drawerHandler} />
            <MobileLinksContext.Provider value={drawerHandler}>
                <MobileDrawer drawerHandler={drawerHandler} mobileDrawer={mobileDrawer} />
            </MobileLinksContext.Provider>
            <main className="main main-wrapper">{props.children}</main>
        </Wrapper>
    );
};

export default Layout;
