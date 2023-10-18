import Img2 from "../assets/Img-2.png"

const MissionPage = () => {
  return (
    <>
      <section id="experience" className="bg-black mt-44 md:mt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center p-4 md:p-6">
          {/* Left side: Text */}
          <div className="w-full sm:w-1/2 p-2 sm:p-4 md:p-8">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-5xl text-purple-600 mb-2 sm:mb-4 md:mb-6">
              Our Mission
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7 mb-4 sm:mb-6 md:mb-8">
              Our mission is to break down language barriers and foster
              understanding by providing top-notch translation services in a
              multitude of Indian languages. We are dedicated to ensuring your
              message is not lost in translation, making meaningful connections
              in a diverse world.
            </p>

            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-5xl text-purple-600 mb-2 sm:mb-4 md:mb-6">
              Vision
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
              Our vision is to be the cornerstone of communication in India,
              connecting businesses, communities, and individuals through
              accurate and culturally sensitive translations. We aspire to
              create a world where language diversity is a source of strength
              and unity, not a barrier.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="w-full sm:w-1/2">
            <img
              src={Img2}
              alt="Vision Image"
              className="w-full h-64 sm:h-80 md:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default MissionPage;
