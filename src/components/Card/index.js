import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

const WorkExperience = [
  {
    title: "Murf AI",
    duration: "May 2023 - Present",
    designation: "Software Developer (Frontend)",
    about:
      "Make studio-quality voice overs in minutes. Use Murf’s lifelike AI voices for podcasts, videos, and all your professional presentations",
  },
  {
    title: "MyShubhLife",
    duration: "May 2022 - May 2023",
    designation: "Software Developer (Frontend)",
    about:
      "Leverage Technology to build and deliver contextual Financial Products for the Next Half Billion people and transforming into a full stack Digital Bank by 2026.",
  },
  {
    title: "Coding Minutes",
    duration: "May 2021 - May 2022",
    designation: "Doubt Mentor (DSA)",
    about:
      "Coding Minutes was started with a mission to provide affordable & high quality education for everyone. ",
  },
  {
    title: "Relevel By Unacademy",
    duration: "Nov 2021 - May 2022",
    designation: "Mentor (DSA & Frontend) Part Time",
    about:
      "Coding Minutes was started with a mission to provide affordable & high quality education for everyone. ",
  },
];

const Card = () => {
  const scrollRef = React.useRef(null);
  return (
    <AnimatePresence>
      <div
        className="card-section py-10"
        ref={scrollRef}
      >
        {WorkExperience.map((data, idx) => {
          return (
            <motion.div
              initial={{ x: "-100px", opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="checkpoint"
            >
              <div className="Card-Experience">
                <div className="card-heading">
                  <h3 className="company">{data?.title}</h3>
                  <span className="duration-styles">{data?.duration}</span>
                </div>
                <div className="sub-heading">{data?.designation}</div>
                <p className="about">{data?.about}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center justify-center py-5">
      <div
          className={classNames(
            "group relative flex h-16 w-48 items-center justify-center text-xl cursor-pointer text-white font-semibold before:absolute",
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
          <span className="ease relative text-white transition-colors delay-200 duration-300 group-hover:text-black z-20">
            Download Resume
          </span>
        </div></div>
    </AnimatePresence>
  );
};

export default Card;
