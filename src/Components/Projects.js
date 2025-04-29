import React from "react";
import { motion } from "framer-motion";
import project from "../assets/food-project.png";
import project2 from "../assets/weather-app.png";
import project3 from "../assets/car-app.jpg";
const projects = [
  {
    title: "Food Delivery App",
    description: "A responsive food ordering app with Redux and localStorage.",
    image: project,
    tech: ["React", "Redux", "Bootstrap", "API"],
    live: "https://ashokc46.github.io/Food-Delivery-Application/",
    github: "https://github.com/AshokC46/Food-Delivery-Application",
  },
  {
    title: "Car Explorer",
    description: "Browse your favorite cars by type using dynamic API filters.",
    image: project3,
    tech: ["React", "API", "Filtering"],
    live: "https://your-carexplorer-link.com",
    github: "https://github.com/AshokC46/Car-View-Application",
  },
  {
    title: "Weather App",
    description: "Get latest weather updates with one click using OpenWeather API.",
    image: project2,
    tech: ["React", "Bootstrap", "API"],
    live: "https://ashokc46.github.io/Weather-Forecast-App/",
    github: "https://github.com/AshokC46/Weather-Forecast-App",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold text-indigo-600 mb-2 ">
                  {project.title}
                </h3>
              </a>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
