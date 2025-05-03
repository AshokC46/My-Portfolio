import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "DevGnan",
    period: "Jan 2024 – Present",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Built responsive UIs using React.js and Bootstrap.</li>
        <li>Integrated REST APIs and improved component performance by 25%.</li>
        <li>
          Built and contributed to real-time React applications using Material
          UI, Bootstrap, and TailwindCSS.
        </li>
        <li>
          Worked with REST APIs to dynamically render data and utilized
          localStorage.
        </li>
        <li>
          Used Redux for global state management and Redux DevTools for
          debugging and monitoring app state.
        </li>
        <li>
          Debugged application logic efficiently using Chrome DevTools and
          browser console.
        </li>
        <li>
          Gained hands-on experience in writing clean, maintainable HTML/CSS.
        </li>
        <li>Collaborated in a fast-paced agile environment.</li>
      </ul>
    ),
  },
  {
    role: "Self Projects",
    company: "Portfolio & Mini Apps",
    period: "2024 – Present",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          Built 5+ production-level React applications including a Food Delivery
          App, Car Explorer, and Weather App.
        </li>

        <li>
          Applied React with Redux for scalable state management and integrated
          REST APIs for dynamic data rendering.
        </li>

        <li>
          Used tools like localStorage, Redux DevTools, and Chrome DevTools to
          debug and optimize applications.
        </li>

        <li>
          Focused on responsive UI development using Tailwind CSS, Bootstrap,
          and Material UI for clean and adaptive interfaces.
        </li>
      </ul>
    ),
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Experience
      </h2>

      <div className="relative border-l border-indigo-300 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 ml-4"
          >
            <div className="absolute -left-6 top-1.5 bg-indigo-500 text-white p-2 rounded-full shadow-md">
              <FaBriefcase />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600">
                {exp.role}
              </h3>
              <p className="text-gray-700 text-sm mb-1">{exp.company}</p>
              <p className="text-gray-400 text-xs mb-3">{exp.period}</p>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
