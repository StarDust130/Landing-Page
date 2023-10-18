import Logo from "../assets/Logo.png"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8">
      <div className="container mx-auto">
        <div className="font-bold text-gray-500 flex justify-center">
          <p>Created by </p>
        </div>
        <a
          href="https://github.com/StarDust130"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl font-extrabold text-purple-500 block mb-6"
        >
          StarDust
        </a>
        <div className="flex justify-center items-center w-screen ">
          <a
            href="#"
            className="text-3xl font-extrabold text-purple-500 block mb-6"
          >
            <img className="w-40" src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="permalink text-xl">
          <li className="mb-2">
            <a href="#" className="hover:text-purple-300">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#about" className="hover:text-purple-300">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#experience" className="hover:text-purple-300">
              Mission 
            </a>
          </li>
          <li className="mb-2">
            <a href="#portfolio" className="hover:text-purple-300">
              Projects
            </a>
          </li>
        </ul>
        <div className=" text-sm ">
          <small>&copy; StarDust All Rights Reserved. 2023</small>
        </div>

        <div className="footer_social space-x-4 mt-4">
          <a
            href="https://github.com/StarDust130"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-4xl hover:text-purple-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-4xl hover:text-purple-300" />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsXSquare className="text-4xl hover:text-purple-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
