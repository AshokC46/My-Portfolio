import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white text-gray-800 px-6 md:px-20 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">About Me</h2>
        <p className="text-lg leading-8">
          Hello! I'm <strong>Ashok Chavala</strong>, a passionate Front-End Developer focused on building seamless and engaging digital experiences. 
          With a strong foundation in <strong>HTML, CSS, JavaScript, React.js, Redux, TailwindCSS and Bootstrap</strong> I specialize in creating responsive, user-friendly web applications.
        </p>
        <p className="mt-6 text-lg leading-8">
          Currently, I'm diving deep into improving my React skills and exploring back-end technologies. I love bringing ideas to life through clean code and well-designed interfaces.
        </p>
        <p className="mt-6 text-lg leading-8">
        <strong>Skills</strong>: HTML5, CSS3, JavaScript (ES6+), React.js, Redux, Bootstrap, TailwindCSS, Git, and GitHub.
        </p>
      </div>
    </section>
  );
}

export default About;
