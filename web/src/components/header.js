import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
              to="/"
            >
              Jarryd Cheso
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs w-full  uppercase font-bold"
                  }
                  to="/projects"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-code text-lg leading-lg mr-2"
                    }
                  />
                  My Projects
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs w-full uppercase font-bold"
                  }
                  to="/blog"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />
                  My Blog
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase w-full font-bold"
                  }
                  href="https://www.facebook.com/jarryd.cheso"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>
              <li className="flex items-center">
                <OutboundLink
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase w-full font-bold"
                  }
                  href="https://www.instagram.com/jarryd711/"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-instagram text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </OutboundLink>
              </li>
              <li className="flex items-center">
                <OutboundLink
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase w-full font-bold"
                  }
                  href="https://www.youtube.com/user/Cheso7"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-youtube text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">YouTube</span>
                </OutboundLink>
              </li>
              <li className="flex items-center">
                <OutboundLink
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase w-full font-bold"
                  }
                  href="https://www.linkedin.com/in/jcheso/"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-linkedin-in text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </OutboundLink>
              </li>

              <li className="flex items-center">
                <OutboundLink
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase w-full font-bold"
                  }
                  href="https://github.com/jcheso"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">GitHub</span>
                </OutboundLink>
              </li>
              <li className="flex items-center">
                <OutboundLink
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase w-full font-bold"
                  }
                  href="mailto:jarryd.cheso@gmail.com"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fa fa-envelope text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Email</span>
                </OutboundLink>
              </li>

              {/* <li className="flex items-center">
                <a href="mailto:jarryd.cheso@gmail.com">
                  <button
                    className={
                      (props.transparent
                        ? "bg-white text-gray-800 active:bg-gray-100"
                        : "bg-pink-500 text-white active:bg-pink-600") +
                      " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                    }
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    <i className="fas fa-arrow-alt-circle-down mr-1"></i>
                    Contact Me
                  </button>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
