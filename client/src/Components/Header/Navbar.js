import React from "react";
import DesktopNavbar from "./DesktopNavBar";
import MobileNavbar from './MobileNav'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const Navbar = () => {
  return (
    <div>
      <BrowserView>
       <DesktopNavbar/>
      </BrowserView>
      <MobileView>
        <MobileNavbar/>
      </MobileView>
    </div>
  );
};

export default Navbar;
