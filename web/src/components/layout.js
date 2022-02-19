import React from "react";
import Header from "./header";
import Footer from "./Footer";

// import "../styles/layout.css";
// import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer></Footer>
  </>
);

export default Layout;
