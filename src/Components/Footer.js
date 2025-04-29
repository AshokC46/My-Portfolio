import React from "react";

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white text-center py-4">
      <p className="text-bold font-bold">
        © {new Date().getFullYear()} Ashok Chavala. Built with ❤️ using React & Tailwind.
      </p>
    </footer>
  );
}

export default Footer;
