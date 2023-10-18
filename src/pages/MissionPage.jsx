import Img2 from "../assets/Img-2.png"

const MissionPage = () => {
  return (
    <>
      <section id="experience" className="  bg-black">
        <div className="flex justify-center items-center text-center ">
          {/* Left side: Text */}
          <div className="w-1/2 p-8">
            <h1 className="font-extrabold text-5xl text-purple-600 mb-6">
              Our Mission
            </h1>
            <p className="text-gray-700 text-xl leading-7 mb-8">
              Our mission is to break down language barriers and foster
              understanding by providing top-notch translation services in a
              multitude of Indian languages. We are dedicated to ensuring your
              message is not lost in translation, making meaningful connections
              in a diverse world.
            </p>

            <h1 className="font-extrabold text-5xl text-purple-600 mb-6">
              Vision
            </h1>
            <p className="text-gray-700 text-xl leading-7">
              Our vision is to be the cornerstone of communication in India,
              connecting businesses, communities, and individuals through
              accurate and culturally sensitive translations. We aspire to
              create a world where language diversity is a source of strength
              and unity, not a barrier.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="w-1/2">
            <img
              src={Img2}
              alt="Vision Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default MissionPage;
