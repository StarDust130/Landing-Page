import Img from "./../assets/Img.png"
const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-black bg-cover bg-center bg-no-repeat h-screen text-white"
      >
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          <div className="ml-6 mt-5 p-4 w-full md:w-2/3">
            <img
              src={Img}
              alt="Profile"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-purple-500">
              Explore Our Language Swags
            </h1>
            <div className="grid gap-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="text-xl md:text-2xl text-green-500">
                  Cultural Nuances:
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  We dont just translate, we capture the essence, ensuring your
                  message shines through intact.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-xl md:text-2xl text-blue-500">
                  Expert Linguistics:
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  Our team comprises language enthusiasts who breathe life into
                  every word.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-xl md:text-2xl text-yellow-500">
                  Beyond Words:
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  We pave the way for global connections, fostering
                  understanding in a diverse world.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-xl md:text-2xl text-pink-500">
                  Tailored Solutions:
                </div>
                <div className="text-gray-700 text-lg md:text-xl">
                  Whether its business, creative content, or technical jargon,
                  we have got you covered.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-6 md:px-10">
          <p className="text-sm md:text-lg text-gray-700 text-center hidden md:block">
            Join us in celebrating India linguistic diversity. Your words, our
            expertise - a fusion that echoes across borders. Welcome to Aviral
            Digital Solutions, where languages unite and communication knows no
            bounds.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
