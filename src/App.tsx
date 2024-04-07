import Home from "./components/Home";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Info from "./components/Info";
import Project from "./components/Project";
import Card from "./components/Card";
import ContactMe from "./components/ContactMe";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* {loading && (
        <motion.div
          initial={{ y: "-100px",x: " -50%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          }}
          className="container-text"
        >
          <h1 className="text">नमस्ते - Hello!</h1>
        </motion.div>
      )} */}
      {/* {!loading && ( */}
        <div className="home font-grotesk">
          <div className="wrapper px:0 md:px-10">
            <Home />
            <Info />
            <Project />
            <Skills />
            <Card />
            <ContactMe />
          </div>
        </div>
      {/* )} */}
    </>
  );
}

export default App;
