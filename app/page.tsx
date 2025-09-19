import HeroText from "@/components/home-page/HeroText";
import HeroImage from "@/components/home-page/HeroImage";

const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-around gap-10 md:gap-16 px-6 pt-2 md:pt-18">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default Home;
