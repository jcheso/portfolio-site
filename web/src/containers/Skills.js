import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import mongodbIcon from "@iconify-icons/cib/mongodb";
import bxlDjango from "@iconify-icons/bx/bxl-django";
import expressIcon from "@iconify-icons/logos/express";
import herokuIcon from "@iconify-icons/cib/heroku";
import bxlFirebase from "@iconify-icons/bx/bxl-firebase";
import pandasIcon from "@iconify-icons/simple-icons/pandas";
import numpyIcon from "@iconify-icons/file-icons/numpy";
import tailwindIcon from "@iconify-icons/file-icons/tailwind";
import htmlFive from "@iconify-icons/icomoon-free/html-five";
import css3Icon from "@iconify-icons/simple-icons/css3";
import bxlJavascript from "@iconify-icons/bx/bxl-javascript";
import bxlReact from "@iconify-icons/bx/bxl-react";
import vueJs from "@iconify-icons/cib/vue-js";
import nodeJs from "@iconify-icons/fa-brands/node-js";
import bxlPython from "@iconify-icons/bx/bxl-python";
import databaseIcon from "@iconify-icons/dashicons/database";
import documentsIcon from "@iconify-icons/et/documents";
import linuxIcon from "@iconify-icons/cib/linux";
import gitIcon from "@iconify-icons/fa-brands/git";
import amazonAws from "@iconify-icons/cib/amazon-aws";
import mysqlIcon from "@iconify-icons/fontisto/mysql";

const SkillsContainer = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div className="px-6">
        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            Skills
          </h3>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Frontend
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-evenly flex mb-4 w-full px-4 text-gray-800 flex-wrap">
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={htmlFive} />
                <div className="pt-1 text-center">HTML5</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={css3Icon} />
                <div className="pt-1 text-center">CSS3</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={bxlJavascript} />
                <div className="pt-1 text-center">JavaScript</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={bxlReact} />
                <div className="pt-1 text-center">React.js</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={vueJs} />
                <div className="pt-1 text-center">Vue.js</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={tailwindIcon} />
                <div className="pt-1 text-center">Tailwind</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Backend
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-evenly flex mb-4 w-full px-4 text-gray-800 flex-wrap">
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={nodeJs} />
                <div className="pt-1 text-center">Node.js</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={expressIcon} />
                <div className="pt-1 text-center">Express</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={bxlPython} />
                <div className="pt-1 text-center">Python</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={pandasIcon} />
                <div className="pt-1 text-center">Pandas</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={numpyIcon} />
                <div className="pt-1 text-center">NumPy</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={bxlDjango} />
                <div className="pt-1 text-center">Django</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={databaseIcon} />
                <div className="pt-1 text-center">SQL</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={documentsIcon} />
                <div className="pt-1 text-center">NoSQL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Tools and Services
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-evenly flex mb-4 w-full px-4 text-gray-800 flex-wrap">
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={linuxIcon} />
                <div className="pt-1 text-center">Linux</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={gitIcon} />
                <div className="pt-1 text-center">Git</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={amazonAws} />
                <div className="pt-1 text-center">AWS</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={herokuIcon} />
                <div className="pt-1 text-center">Heroku</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={bxlFirebase} />
                <div className="pt-1 text-center">Firebase</div>
              </div>

              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={mysqlIcon} />
                <div className="pt-1 text-center">MySQL</div>
              </div>
              <div className="flex flex-col mx-2 my-2 p-2">
                <Icon className="w-24 h-24" icon={mongodbIcon} />
                <div className="pt-1 text-center">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
