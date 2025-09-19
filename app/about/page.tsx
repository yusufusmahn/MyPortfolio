import ProfileImage from "@/components/about/ProfileImage";
import BioText from "@/components/about/BioText";

const AboutMe  = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-secondary inline-block pt-2">
        ABOUT ME
      </h2>

      <div className="px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:items-start text-white gap-12  py-14">
        <ProfileImage />
        <BioText />
      </div>
    </section>
  );
};

export default AboutMe;

