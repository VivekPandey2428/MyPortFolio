import React from "react";
import Button from "../Library/Button";
import Modal from "../Library/Modal";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

interface skillsProps {
    isActive: boolean;
    onCloseHandler: () => void;
}

const Skills = ({isActive, onCloseHandler}: skillsProps) => {
    return (
      <Modal active={isActive} onCloseHandler={() => onCloseHandler()}>
        <Modal.Content className="bg-black max-w-[800px] text-sky-500 opacity-80">
          <Modal.ContentBody>
            <TagCloud
              options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "fast",
              })}
              onClick={(tag: string, ev: MouseEvent) => alert(tag)}
              onClickOptions={{ passive: true }}
            >
              {[
                "HTML5/CSS3",
                "JavaScript",
                "VSCode",
                "TypeScript",
                "React",
                "Redux",
                "SCSS",
                "StoryBook",
                "Tailwind",
                "Jest",
                "ESLint",
                "Framer Motion",
              ]}
            </TagCloud>
          </Modal.ContentBody>
          <Modal.ContentFooter>
            <Button onClick={() => onCloseHandler()} color="light">
              Close
            </Button>
          </Modal.ContentFooter>
        </Modal.Content>
      </Modal>
    );
};

export default Skills;