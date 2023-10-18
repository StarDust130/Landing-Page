import Logo from "../assets/Logo.png"
import { useEffect, useState } from "react";
const HomePage = () => {
     const [isMoving, setIsMoving] = useState(false);

     useEffect(() => {
       // Function to toggle the moving state every 3 seconds
       const moveImage = setInterval(() => {
         setIsMoving((prev) => !prev);
       }, 3000);

       return () => {
         clearInterval(moveImage);
       };
     }, []);

  return (
    <>
      <section id="#" className="h-screen ">
        <div className=" flex items-start  justify-between px-4 py-4">
          <img className="w-40 h-30" src={Logo} alt="Logo" />

          <div className="mt-4">
            <a
              href="https://github.com/StarDust130"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Hire ME
              </button>
            </a>
          </div>
        </div>

        <div className=" mt-28 ml-20 flex items-center ">
          <div className="w-1/2 px-6">
            <h1 className="text-6xl font-bold text-purple-600 mb-6 shadow-lg">
              We Have The Best Translation Services
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to our digital heaven where languages unite and barriers
              dissolve. At Aviral Digital Solutions, we are not just
              translators, we are architects of understanding in a diverse
              world. With our linguistic competence, we bridge cultures, empower
              businesses and amplify global connections.
            </p>
            <a href="#about">
              <button className="bg-purple-800 text-white px-6 py-3 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Get Started
              </button>
            </a>
          </div>
          <div className="w-1/2 flex justify-center">
            <div
              className={`w-84 h-64 relative overflow-hidden transform ${
                isMoving ? "translate-x-40" : ""
              } transition-transform duration-1000 ease-in-out`}
            >
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-business-startup-5283092-4431877.png?f=webp"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage