import React from "react";
import Header from "./header";
import Profile from "./profile";
import Footer from "./footer";

import "../styles/layout.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header transparent="true" />
    <Profile />
    <Footer />
  </>
);

export default Layout;
