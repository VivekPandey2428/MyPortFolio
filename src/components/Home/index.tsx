import { motion } from "framer-motion";

const Home = () => {
  function template({ rotate, x }: any) {
    return `rotate(${rotate}) translateX(${x})`;
  }

  return (
    <>
      <motion.div
        initial={{ x: "-50%", y: "-100px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="nav"
      >
        <ul className="nav-section">
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </motion.div>
      <motion.div className="w-full pt-60 pb-72 text-white">
        <div className="h-full home-grid-layout">
          <motion.div
            initial={{ x: "100px", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.6,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="grid-top-right mt-auto mx-auto md:mr-auto mb-10 text-lg"
          >
            SOFTWARE DEVELOPER & FREELANCER
          </motion.div>
          <div className="grid-center">
            <motion.span
              initial={{ x: "100px", opacity: 0, rotate: -10 }}
              transformTemplate={template}
              style={{ rotate: 0, x: "calc(50vh - 100px)" }}
              animate={{
                x: 0,
                opacity: 1,
                rotate: -420,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 2,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="material-icons-outlined -rotate-45 mx-auto md:ml-auto mb-auto animate-top-bottom"
            >
              east
            </motion.span>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 1,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-7xl font-semibold italic mx-auto md:ml-auto"
            >
              Vivek Pandey
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
