import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="md:w-1/2 relative flex justify-center md:justify-start">
      <div className="absolute inset-0 flex justify-center md:justify-start">
        <div className="w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] rounded-lg bg-gradient-to-r from-secondary via-purple-500 to-pink-500 blur-3xl opacity-40" />
      </div>

      <Image
        src="/yusuf-img.png"
        alt="Yusuf Usman"
        width={500}
        height={500}
        className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] rounded-lg grayscale shadow-lg"
      />

      <div className="absolute top-0 right-0 grid grid-cols-4 gap-3 p-6">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-secondary rounded-full opacity-50"
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileImage;
