import EducationCard from "@/components/education/EducationCard";
import {education} from "@/data/educationInfo"


const Education = () => {
  return (
    <section className="text-white px-6 py-3 pb-8 md:py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center border-b-2 border-secondary inline-block pb-2">
        EDUCATION
      </h2>
      <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
        <p className="text-grey lg:w-1/2 leading-relaxed max-w-2xl text-center lg:text-left">
          My educational journey has shaped both my technical expertise and
          problem-solving mindset. I started with a strong foundation in{" "}
          <span className="text-secondary">Mathematics</span>, where I
          gained core knowledge in programming, algorithms, and system design.
          Over time, I advanced into specialized areas such as{" "}
          <span className="text-secondary">Backend Development</span>,
          <span className="text-secondary">Databases</span>, and{" "}
          <span className="text-secondary">Cloud Technologies</span>. Alongside
          formal studies, I continuously sharpened my skills through online
          certifications, hands-on projects, and real-world application of
          modern technologies. This blend of academic training and practical
          learning has prepared me to build scalable, secure, and efficient
          solutions for today’s digital challenges.
        </p>
        <div className="lg:w-1/2 w-full">
          <h3 className="text-4xl md:text-6xl font-extrabold text-secondary/70 mb-8 text-center lg:text-left">
            2012 - 2024
          </h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <EducationCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
