import React, { useState } from "react";
import Button from "../Library/Button";
import Modal from "../Library/Modal";

interface AboutMeProps {
    isActive: boolean;
    onCloseHandler: () => void;
}

const AboutMe = ({isActive, onCloseHandler}: AboutMeProps) => {

    return (
      <Modal active={isActive} onCloseHandler={() => onCloseHandler()}>
        <Modal.Content className="bg-black max-w-[800px] text-white opacity-70">
          <Modal.ContentBody>
            <div className="text-3xl font-semibold text-center text-sky-500">ABOUT</div>A Frontend
            Developer who has Engineered Modern Websites using technologies like
            JS, React, Angular and Typescript with a touch of HTML and CSS as
            well. Experienced Educator with a demonstrated history of working in
            the e-learning industry. Skilled in Data Structure and Algorithm,
            Management, and Leadership. <div className="text-2xl text-center mt-5 font-semibold text-sky-500">Education</div> Strong education professional with a
            Bachelors degree focused in Computer Science from Lovely
            Professional University.
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

export default AboutMe;