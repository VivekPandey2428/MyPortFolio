import React from "react";
import Button from "../Library/Button";
import Modal from "../Library/Modal";

interface ExperienceProps {
    isActive: boolean;
    onCloseHandler: () => void;
}

const Experience = ({isActive, onCloseHandler}: ExperienceProps) => {
    return (
      <Modal active={isActive} onCloseHandler={() => onCloseHandler()}>
        <Modal.Content className="bg-black max-w-[800px] text-white opacity-70">
          <Modal.ContentBody>
            <div className="text-2xl font-semibold text-center text-sky-500">DataSigns Technologies Pvt Ltd.(MyShubhLife)</div>
            <ol>
                <li>1. Working as a Developer for a Fintech Product, responsible for maintaining the code standards and pr reviews for junior developer and also taking part in architectural discussions.</li>
                <li>2. Responsible for code reviews, feature planning, and design reviews</li>
                <li>3. Taking up Research and Development tasks and driving revamp of the web apps to fine-tune and remove any friction from the customer journey.</li>
                <li>4. Developed and maintained reusable code libraries, while keeping track of changes and their effects on existing functionality.</li>
                <li>5. Supervised junior developers with Onboarding process and provided guidance with tasks</li>
            </ol>
            <div className="text-2xl text-center mt-5 font-semibold text-sky-500">
            RELEVEL BY UNACADEMY
            </div>
            <ul>
                <li>1. Conducted 30+ live sessions to teach concept and handled a batch of over 100 Students during live session.</li>
                <li>2. Top Rated Mentor with a rating over(4.92/5). Solved 200+ doubts.</li>
                <li>3. Monitored performance regularly to make sure that students are attending the lectures and completing assignments on time.</li>
            </ul>
            <div className="text-2xl text-center mt-5 font-semibold text-sky-500">
            Coding Minutes
            </div>
            <ul>
                <li>1. Resolved 400+ doubts of students enrolled in DSA Essentials and Level Up of course with a rating over 4.7.</li>
                <li>2. Helped students in building logic and debugging their code whenever they are stuck.</li>
                <li>3. Conducted Live sessions to teach concepts.</li>
            </ul>
            <div className="text-2xl text-center mt-5 font-semibold text-sky-500">
            Kranti Tech Pvt Ltd.
            </div>
            <ul>
                <li>1. Developed User Interfaces using modern javaScript framework like REACT which increased user satisfaction by 31 percent.</li>
                <li>2. Created, Updated, Tested React App by using JSX, Hooks and React-Testing-Library.</li>
            </ul>
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

export default Experience;