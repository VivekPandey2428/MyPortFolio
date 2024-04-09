import React from "react";
import Popover from "./Popover";
import { motion } from "framer-motion";
import classNames from "classnames";
const projectData = [
  {
    name: "Project1",
    description: "Project 1 description",
    img: "",
  },
  {
    name: "Project2",
    description: "Project 2 description",
    img: "",
  },
  {
    name: "Project3",
    description: "Project 3 description",
    img: "",
  },
  {
    name: "Project4",
    description: "Project 4 description",
    img: "",
  },
];

const ProjectCard = ({
  name,
  description,
  key,
  idx,
  handleClick,
  handleMouseEnter,
  ...restProps
}: any) => {
  const handleMouseMove = (event: any) => {
    if (handleMouseEnter) {
      handleMouseEnter(event, idx);
    }
  };
  const clickCapture = (evt: any, name: string) => {
    console.log(name, evt.target)
    if (handleClick) {
      handleClick(name);
    }
  }
  return (
    <div
      key={key}
      className="project-card flex items-center justify-between"
      onMouseMove={handleMouseMove}
      onClick={(evt) => clickCapture(evt, name)}
      {...restProps}
    >
      <h4 className="text-xl md:text-4xl hover:-translate-x-8">{name}</h4>
      <p className="text-sm opacity-60 italic">{description}</p>
    </div>
  );
};

export default function Project() {
  const [open, setOpen] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState({});
  const handleMouseEnter = (event: any, idx: any) => {
    setCurrentItem({ idx: idx, value: event.target.textContent });
    setOpen(true);
  };
  const handleClick = (name: string) => {
    alert(`${name} Coming Soon`);
  }
  return (
    <>
      <div id="my-projects" className="pt-32 pb-20 px-14 font-grotesk flex items-center justify-center w-full">
        <motion.div
          onMouseLeave={() => setOpen(false)}
          className="project-section w-full flex flex-col items-center justify-center"
        >
          {projectData.map((project, idx) => (
            <ProjectCard
              key={idx}
              idx={idx}
              handleClick={handleClick}
              handleMouseEnter={handleMouseEnter}
              name={project.name}
              description={project.description}
              img={project.img}
            />
          ))}
        </motion.div>
        <Popover open={open} currentItem={currentItem} />
      </div>
      <motion.div className="flex justify-center">
        <div
          className={classNames(
            "group relative flex h-16 w-48 items-center justify-center text-xl text-white font-semibold before:absolute",
            "before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all ",
            "before:delay-300 before:duration-1000 before:content-[''] after:absolute after:bottom-0 after:right-0",
            "after:z-0 after:h-full after:w-0 after:transition-all after:delay-300 after:duration-1000",
            "after:content-[''] hover:text-black before:hover:w-full after:hover:w-full before:bg-white after:bg-white rounded-xl"
          )}
        >
          <span
            className={classNames(
              "ease absolute left-0 top-0 h-0 w-0 border-t-2 transition-all duration-200 group-hover:w-full"
            )}
          ></span>
          <span
            className={classNames(
              "ease absolute bottom-0 right-0 h-0 w-0 border-b-2 transition-all duration-200 group-hover:w-full"
            )}
          ></span>
          <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-black z-20">
            More Work
          </span>
        </div>
      </motion.div>
    </>
  );
}
