import { TypeAnimation } from "react-type-animation";

function MainSection() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div
        className="text-5xl font-bold font-serif"
        style={{ fontFamily: "Roboto" }}
      >
        I'm Punyakrit Singh Makhni
      </div>
      <div className="text-4xl mt-5 ">
        I code{" "}
        <TypeAnimation
        className="font-bold"
          sequence={[
            "Frontend Websites",
            2000,
            "Backend Servers",
            2000,
            "MERN Stack Applications",
            2000,
          ]}
          wrapper="span"
          speed={3}
          repeat={Infinity}
        />
      </div>
      <div className="mt-10  mx-56 text-lg text-white/60">
      I possess a diverse skill set combining technical proficiency with a commitment to excellence in software development. My expertise lies in the MERN stack, with a strong focus on utilizing React libraries like Recoil for state management and Tailwind CSS for designing sleek and responsive interfaces. I have hands-on experience in React, enabling me to create dynamic and user-friendly interfaces for web applications.      </div>
    </div>
  );
}

export default MainSection;
