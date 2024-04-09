import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const TextInput = ({textAreaRef, setTextValue, textValue}: any) => {
  const rotateAnimate = Math.floor(Math.random() * 201) - 100;
  return (
    <main className="flex flex-col">
      <input
        className="w-0 h-0 opacity-0"
        ref={textAreaRef}
        placeholder="Type HERE"
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      ></input>
      <motion.div
        className="min-h-full h-auto bg-black text-slate-200 font-grotesk whitespace-pre-wrap text-xl min-w-full p-2 border-b-2 overflow-x-hidden"
      >
        <AnimatePresence>
          {textValue?.split("")?.map((letter: string, idx: number) => {
            return (
              <motion.span
                initial={{ opacity: 0, y: -100, rotate: rotateAnimate }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{
                    opacity: 0,
                    y: 100,
                    transition: {
                        duration: 0.15,
                    },
                    rotate: rotateAnimate
                }}
                transition={{duration: 0.15, ease: "easeIn"}}
                key={idx}
                className={classNames("text-slate-300",letter !== "\n" ? "inline-block" : "inline")}
              >
                {letter}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default TextInput;
