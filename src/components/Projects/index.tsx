import React from "react";
import Button from "../Library/Button";
import Modal from "../Library/Modal";

interface ProjectProps {
    isActive: boolean;
    onCloseHandler: () => void;
}

const Projects = ({isActive, onCloseHandler}: ProjectProps) => {
    return (
      <Modal active={isActive} onCloseHandler={() => onCloseHandler()}>
        <Modal.Content className="bg-black max-w-[800px] text-white opacity-70">
          <Modal.ContentBody>
            <div className="text-3xl font-semibold text-center text-sky-500">
              Coming Soon...
            </div>
          </Modal.ContentBody>
          <Modal.ContentFooter>
            <Button onClick={() => onCloseHandler()} color="light">
              Close
            </Button>
          </Modal.ContentFooter>
        </Modal.Content>
      </Modal>
    );
}
export default Projects;