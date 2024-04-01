import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import AboutImage from "../Assets/images/AboutImage.png";

function About() {
  const { about } = UserData;
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-between bg-transparent rounded-lg shadow-lg p-4 w-[90%] mx-auto">
        <div className="flex flex-col w-[50%]">
          <p className="text-2xl font-semibold text-gray-900 tracking-wide pb-2">
            About Me
          </p>
          <p className="text-lg font-poppins">{about}</p>
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={100}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="w-24 h-24 flex items-center justify-center flex-col gap-2 ml-4"
                  key={id}
                >
                  <img
                    className="w-[60px] h-[50px] bg-no-repeat bg-contain"
                    src={skillsImage(skill)}
                    alt={skill}
                  />
                  <p>{skill}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <img
          className="max-w[500px] h-[350px] bg-no-repeat bg-cover bg-center"
          src={AboutImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
