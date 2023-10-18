import Img from "./../assets/Img.png"
const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-black bg-cover bg-center bg-no-repeat h-screen text-white"
      >
        <div className="flex justify-between items-center p-6">
          <div className="ml-6 mt-5 p-4 w-2/3">
            <img
              src={Img}
              alt="Profile"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="w-1/2 p-4">
            <h1 className="text-5xl font-bold mb-8 text-purple-500">
              Explore Our Language Swags
            </h1>
            <div className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-xl text-green-500">
                  Cultural Nuances:
                </div>
                <div className="col-span-1 text-gray-700 text-lg">
                  We dont just translate, we capture the essence, ensuring your
                  message shines through intact.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-xl text-blue-500">
                  Expert Linguistics:
                </div>
                <div className="col-span-1 text-gray-700 text-lg">
                  Our team comprises language enthusiasts who breathe life into
                  every word.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-xl text-yellow-500">
                  Beyond Words:
                </div>
                <div className="col-span-1 text-gray-700 text-lg">
                  We pave the way for global connections, fostering
                  understanding in a diverse world.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 text-xl text-pink-500">
                  Tailored Solutions:
                </div>
                <div className="col-span-1 text-gray-700 text-lg">
                  Whether its business, creative content, or technical jargon,
                  we have got you covered.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-10">
          <p className="text-lg text-gray-700 text-center">
            {" "}
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
