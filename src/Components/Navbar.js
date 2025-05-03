import { Link } from "react-scroll";

function Navbar() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/ashok_chavala.pdf`;
    link.download = "Ashok_Resume.pdf";
    link.click();
  };
  
  return (
    <nav className="fixed top-0 w-full flex justify-between p-6 bg-white shadow-md z-50">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="space-x-8 text-lg hidden md:flex">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Skills
        </Link>

        <Link
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Experience
        </Link>

        <Link
          to="education-awards"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Education & Awards
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-orange-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Contact
        </Link>

        <button
          onClick={handleResumeDownload}
          className="bg-blue-500 text-white px-4 rounded hover:bg-orange-500 transition duration-300 cursor-pointer font-bold"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
