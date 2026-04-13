import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white text-gray-800 px-6 md:px-20 py-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">About Me</h2>
        <p className="text-lg leading-8">
          I’m <strong>Ashok Chavala</strong>, a{" "}
          <strong>Software Engineer</strong> who builds interfaces that work as
          well in the hands of users as they do in the code. I focus on
          simplicity, performance, and clarity.
        </p>
        <p className="mt-6 text-lg leading-8">
          In my recent role at a fast-paced startup, I moved beyond just
          "writing code" to mastering the professional workflow. I spent my time
          building complex insurance modules, managing state with{" "}
          <strong>Redux Toolkit</strong>, and ensuring 100% code quality using{" "}
          <strong>SonarCloud</strong> and <strong>ESLint</strong> within{" "}
          <strong>Agile</strong> sprints.
        </p>
        <p className="mt-6 text-lg leading-8">
          <strong>Skills</strong>: HTML5, CSS3, JavaScript (ES6+), React.js,
          Redux, Bootstrap, TailwindCSS, Git, and GitHub.
        </p>
        <p className="mt-6 text-lg leading-8">
          I help companies grow by building fast, accessible, and scalable
          interfaces that improve user engagement and product value. By hiring
          me, you gain a dedicated developer who cares about user experience,
          clean architecture, and aligning tech with business goals to drive
          measurable impact.
        </p>
      </div>
    </section>
  );
}

export default About;
