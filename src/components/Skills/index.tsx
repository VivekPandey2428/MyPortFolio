import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { AnimatePresence, motion } from "framer-motion";

const skillsDetails = [
  {
    skill: "Pixel perfect design",
    desc: "Precise alignment for visually appealing interfaces.",
  },
  {
    skill: "Accessibility",
    desc: "Inclusive design for diverse user abilities and needs.",
  },
  {
    skill: "Optimization",
    desc: "Enhancing performance and efficiency for better user experience.",
  },
];

const Skills = () => {
  return (
    <div className="pt-10">
      <div className="skill-grid">
        <div className="desc-skill-grid h-3/4 md:flex-col">
          <AnimatePresence>
            {skillsDetails.map((data, idx) => {
              return (
                <motion.div
                  initial={{ x: "-100px", opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 1,
                      delay: 0.2,
                    },
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="mt-4 ml-2"
                >
                  <p className="text-white text-3xl">{data?.skill}</p>
                  <span className="text-white text-opacity-60 italic">
                    {data?.desc}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ x: "100px", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
              delay: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <TagCloud
            className="overflow-hidden text-white"
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "normal",
            })}
            onClick={(tag: string, ev: MouseEvent) => console.log(tag)}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
