import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import SocialMedia from "../Assets/SocialMedia";

export default function Intro() {
  return (
    <section className="w-full h-screen text-center shadow-l">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" text-sm text-black/60">Let's Build Something Together</p>
          <h2 className=" text-5xl py-2">
            Hi, I'm
            <span className="text-teal-500"> Kiki</span>
          </h2>
          <h3 className=" text-xl py-2">A Software Developer and Designer.</h3>
          <p className=" text-md py-2 leading-6 text-gray-800">
            I am a software developer specializing in building (and sometime's
            designing) digital experiences. Currently, I'm focused on building
            responsive web applications for Javascript, Node JS, React JS, etc.
            Contact me below for Information.
          </p>
          <div className=" text-4xl flex justify-center gap-10 py-2">
            <SocialMedia icon={AiFillLinkedin} url="https://www.linkedin.com/in/kikivebiant" />
            <SocialMedia icon={AiFillInstagram} url="https://www.instagram.com/kvebiant" />
            <SocialMedia icon={AiFillGithub} url="https://github.com/kvebiant" />          
          </div>
        </div>
      </div>
    </section>
  );
}
