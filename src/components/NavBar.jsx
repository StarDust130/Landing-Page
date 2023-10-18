import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";



function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={`mr-4 p-2 ${
          activeNav === "#" ? "bg-purple-500" : ""
        } rounded-full transition duration-300 hover:bg-purple-800`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`mr-4 p-2 ${
          activeNav === "#about" ? "bg-purple-500" : ""
        } rounded-full transition duration-300 hover:bg-purple-800`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`mr-4 p-2 ${
          activeNav === "#experience" ? "bg-purple-500" : ""
        } rounded-full transition duration-300 hover:bg-purple-800`}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={`p-2 ${
          activeNav === "#projects" ? "bg-blue-500" : ""
        } rounded-full transition duration-300 hover:bg-purple-800`}
      >
        <AiFillProject />
      </a>
    </nav>
  );
  }


export default Nav;
