import React from "react";
import Paper from "../Library/Paper";

const Home = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center relative">
        <div className="w-full md:w-1/2">
          <div className="h-1/4 w-full pt-10  flex gap-4 items-center">
            <Paper className="opacity-30 h-10 w-40 text-lg rotate-0 bg-sky-400">
              Hello There!
            </Paper>
            <div className="text-white text-7xl font-serif font-link">I am</div>
          </div>
          <div className="pt-10 w-full">
            <div className="flex">
              <Paper className="text-6xl md:text-8xl w-3/4 h-28 opacity-40 bg-yellow-300 font-serif rotate-0">
                Vivek
              </Paper>
              <div className="rotate-12 text-7xl opacity-40">&#128512;</div>
            </div>
            <div className="flex justify-end pt-2">
              <Paper className="text-6xl md:text-8xl w-3/4 h-28 opacity-40 bg-pink-400 font-serif rotate-0">
                Pandey
              </Paper>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 m-2 p-5 pt-10 md:text-2xl text-lg text-white opacity-80 tracking-wide font-mono">
        A Frontend Developer who has Engineered Modern Websites using technologies like JS, React, Angular and Typescript with a touch of HTML and CSS as well.
        </div>
      </div>
    );
}

export default Home;