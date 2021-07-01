import React from "react";
import Header from "./header";
import Footer from "./footer";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer></Footer>
  </>
);

export default Layout;
