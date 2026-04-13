import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaJira,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiSonarcloud,
  SiTestinglibrary,
  SiVite,
  SiMaterialdesign,
} from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Material UI", icon: <SiMaterialdesign className="text-blue-500" /> },

  { name: "SonarCloud", icon: <SiSonarcloud className="text-orange-500" /> },
  { name: "Unit Testing", icon: <SiTestinglibrary className="text-red-500" /> },
  {
    name: "Agile / Scrum",
    icon: <HiLightningBolt className="text-yellow-500" />,
  },
  { name: "JIRA", icon: <FaJira className="text-blue-600" /> },
  { name: "GitHub Actions", icon: <FaGithub className="text-black" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
