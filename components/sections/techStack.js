import { SiPython, SiRust } from "react-icons/si";
import { JavascriptIcon, ReactIcon, TSIcon } from "../icons/lang.js";

const TechBox = ({ icon, name }) => {
  return (
    <>
      <div className="text-md text-gray-900 dark:text-white inline-flex place-items-center mt-6 md:0">
        <span className="flex justify-center items-center w-11 h-11 mr-3 rounded-full dark:bg-[#141517] dark:border-t dark:border-slate-700">
          <span className="w-4">{icon}</span>
        </span>
        <span className="ml-2">{name}</span>
      </div>
    </>
  );
};

const TechStack = () => {
  return (
    <div className="md:flex items-center justify-center w-full">
      <div className="flex w-full justify-center items-center md:p-6">
        <h1 className="font-bold text-2xl">🔧 Tech Stack</h1>
      </div>
      <div className="flex md:w-full md:justify-center md:items-center md:mt-0 mt-10 md:p-0 p-4">
        <div className="grid gap-4 md:grid-flow-col md:grid-rows-2 md:gap-10">
          {techs.map((tech, index) => (
            <div key={index++}>
              <TechBox
                icon={tech.icons}
                name={tech.name}
                description={tech.description}
                key={index++}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const techs = [
  {
    icons: <SiRust />,
    name: "Rust",
  },
  {
    icons: <JavascriptIcon />,
    name: "Javascript",
  },
  {
    icons: <TSIcon />,
    name: "Typescript",
  },
  {
    icons: <ReactIcon />,
    name: "React",
  },
  {
    icons: <SiPython />,
    name: "Python",
  },
];

export default TechStack;