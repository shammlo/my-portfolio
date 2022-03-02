//* ********* IMPORTS **********/
import React from 'react';
//* ***********************************
type Context = {
    isMobile: boolean;
    drawerHandler: (args?: boolean) => void;
    close?: () => void;
    mobileDrawer: boolean;
};
const MobileLinksContext = React.createContext<Context>({} as Context);
export default MobileLinksContext;
