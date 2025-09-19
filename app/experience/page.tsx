import {experiences} from "@/data/experienceInfo"

export default function Experience() {
  return (
    <section className="relative bg-gradient-to-br from-background via-gray-900 to-blue-900 text-white py-10 md:py-16 px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center mb-14 relative z-10 gap-3">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">EXPERIENCE</h2>
          <div className="w-20 h-1 bg-secondary" />
        </div>
        <h3 className=" text-5xl md:text-6xl font-extrabold text-grey">2018 - 2025</h3>
      </div>

      <div className="space-y-12 relative z-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between flex-col md:flex-row items-start gap-6"
          >
            <div className="flex gap-5">
              <div className="text-secondary text-3xl font-bold">»</div>
              <div>
                <h4 className="font-bold text-lg">{exp.company}</h4>
                <p className="text-grey">
                  {exp.title} {exp.years}
                </p>
              </div>
            </div>
            <p className="text-sm text-grey mt-2 max-w-2xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}