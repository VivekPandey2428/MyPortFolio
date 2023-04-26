import React, {
    ComponentProps,
    createContext,
    useContext,
    useState,
  } from "react";
  import classNames from "classnames";
  import {AnimatePresence, motion} from "framer-motion";
  import {twMerge} from "tailwind-merge";
  import If from "./If";
  import Button from "./Button";
  
  export interface ModalProps extends ComponentProps<"div">, SharedProps {
    active: boolean;
  }
  
  export interface HeaderProps extends ComponentProps<"div"> {
    resizable?: boolean;
    closeButton?: boolean;
  }
  
  interface SharedProps {
    onCloseHandler: () => void;
    active?: boolean;
    maximize?: boolean;
    toggleModalSize?: () => void;
  }
  
  const ModalContext = createContext({} as SharedProps);
  const Modal = ({children, onCloseHandler, active, className}: ModalProps) => {
    const [maximize, setMaximize] = useState(false);
    const toggleModalSize = () => setMaximize((maximized) => !maximized);
  
    return (
      <ModalContext.Provider
        value={{onCloseHandler, active, toggleModalSize, maximize}}
      >
        <AnimatePresence>
          {active && (
            <motion.div
              key="wc-modal-content"
              variants={{
                active: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: 0.9},
              }}
              animate="active"
              initial="hidden"
              exit="hidden"
              transition={{duration: 0.2, ease: "easeInOut"}}
              className={twMerge(
                classNames(
                  "fixed inset-0 backdrop-blur-md flex justify-center items-center transition-colors before:scale-150",
                  "before:fixed before:inset-0 before:bg-slate-500 before:opacity-20",
                ),
                className,
              )}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </ModalContext.Provider>
    );
  };
  
  const Content = ({className, children}: ComponentProps<"div">) => {
    const {maximize} = useContext(ModalContext);
  
    return (
      <div
        className={twMerge(
          classNames(
            "p-1 selection:transition-all max-h-[95vh] duration-500 rounded-2xl",
            "scroll-hidden drop-shadow-xl overflow-y-auto bg-slate-50",
            {
              "max-w-md": !maximize,
              "max-w-4xl": maximize,
            },
          ),
          className,
        )}
      >
        {children}
      </div>
    );
  };
  
  const ContentHeader = ({
    className,
    children,
    resizable,
    closeButton,
  }: HeaderProps) => {
    const {onCloseHandler, toggleModalSize} = useContext(ModalContext);
  
    const btnClassNames = {
      "w-5 h-5 p-0 bg-transparent border-0 aspect-square": true,
      " text-primary-700 active:bg-slate-100": true,
    };
  
    return (
      <div
        className={twMerge(
          "p-4 flex text-xl gap-0.5 text-primaryBlue-700",
          className,
        )}
      >
        <span className="flex-1 text-2xl text-primary-700">{children}</span>
        <If condition={closeButton}>
          <Button className={classNames(btnClassNames)} onClick={onCloseHandler}>
            &#10005;
          </Button>
        </If>
      </div>
    );
  };
  
  const ContentBody = ({className, children}: ComponentProps<"div">) => {
    return (
      <div
        className={twMerge(
          "px-6 my-6 max-h-96 min-h-0 h-fit overflow-y-auto scroll-themed",
          className,
        )}
      >
        {children}
      </div>
    );
  };
  
  const ContentFooter = ({className, children}: ComponentProps<"div">) => {
    return (
      <div
        className={twMerge(
          "p-4 flex justify-end gap-2 text-xl text-primaryBlue-700",
          className,
        )}
      >
        {children}
      </div>
    );
  };
  
  Modal.Content = Content;
  Modal.ContentHeader = ContentHeader;
  Modal.ContentFooter = ContentFooter;
  Modal.ContentBody = ContentBody;
  export default Modal;
  