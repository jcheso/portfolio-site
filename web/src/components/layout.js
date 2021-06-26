import React from "react";
import Header from "./header";
import Profile from "./Profile";
import Footer from "./Footer";

import "../styles/layout.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header
    // siteTitle={siteTitle}
    // onHideNav={onHideNav}
    // onShowNav={onShowNav}
    // showNav={showNav}
    />
    {/* <div className={styles.content}>{children}</div> */}
    <Profile />
    <Footer />
  </>
);

export default Layout;
