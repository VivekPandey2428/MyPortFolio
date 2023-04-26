import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Vivek from "./assets/vivek.mp4";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [openModal, setOpenModal] = useState("");
  const onValueChange = (val: string) => {
    if (val === "Resume") {
     return window.location.href = "https://white-marcy-83.tiiny.site/";
    }
    setOpenModal(val);
  }
  const onCloseHandler = () => {
    setOpenModal("");
}
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <div className="relative h-full w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] z-0">
        <div className="absolute w-full h-full bg-black opacity-60 z-[-1]"></div>
        <div
              dangerouslySetInnerHTML={{
                __html: `
                <video
                  loop
                  muted={true}
                  autoPlay
                  playsInline={true}
                  id="video"
                  class="absolute z-[-2] w-full h-full object-cover right-0 bottom-0"
                >
                <source autoPlay muted={true} src="${Vivek}" type="video/mp4" />
                </video>`,
              }}
            />
        <Navbar onValueChange={onValueChange}/>
        <Home />
        {openModal === "About" && <AboutMe isActive={true} onCloseHandler={onCloseHandler}/>}
        {openModal === "Experience" && <Experience isActive={true} onCloseHandler={onCloseHandler}/>}
        {openModal === "Skills" && <Skills isActive={true} onCloseHandler={onCloseHandler}/>}
        {openModal === "Projects" && <Projects isActive={true} onCloseHandler={onCloseHandler}/>}
      </div>
    </div>
  );
}

export default App;
