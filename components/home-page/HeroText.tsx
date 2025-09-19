const HeroText = () => {
  return (
    <div className="text-center lg:text-left">
      <p className="text-xl tracking-widest uppercase text-secondary">
        Welcome
      </p>
      <h1 className="text-3xl md:text-6xl font-bold leading-tight mt-2">
        I&apos;m <span className="text-secondary">Yusuf Usman</span>
      </h1>
      <p className="mt-4 inline-block bg-secondary text-black px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide">
        Backend Engineer
      </p>
      <p className="mt-6 text-grey leading-relaxed max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
        Passionate about building scalable, secure, and high-performance
        server-side applications. Experienced with java, Spring Boot, Python, Django, Docker, RESTful
        APIs, databases, and cloud deployment. Focused on writing clean,
        efficient, and maintainable code that powers modern applications.
      </p>
    </div>
  );
};

export default HeroText;
