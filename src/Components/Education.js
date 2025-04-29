import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Electrical and Electronics Engineering",
    institution: "N.B.K.R Institute of Science and Technology",
    period: "2019 – 2023",
    score: "CGPA: 6.12",
  },
];

const awards = [
  {
    title: "Coding Competition",
    issuer: "Secured 4th position",
    date: "Sep 2022",
  },
  {
    title: "Front-End Coding Challenge",
    issuer: "5th position in College-level Competition",
    date: "July 2022",
  },
];

function EducationAwards() {
  return (
    <section
      id="education-awards"
      className="py-20 px-6 md:px-20 bg-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Education & Awards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
              <p className="text-sm text-gray-600">{edu.score}</p>
            </div>
          ))}
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Awards</h3>
          {awards.map((award, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{award.title}</h4>
              <p className="text-gray-700">{award.issuer}</p>
              <p className="text-sm text-gray-500">{award.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default EducationAwards;
