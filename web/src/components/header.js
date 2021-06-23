import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className="text-blue-500 text-2xl">
        <Link to="/">{siteTitle}</Link>
      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul className="flex">
          <li>
            <Link to="/blog/">Blog</Link>
          </li>

          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
      <button
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>
    </div>
  </div>
);

export default Header;
