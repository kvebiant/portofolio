import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiMongodb } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import CardSkill from "../Assets/AboutAssets/Skills";

export default function About() {
  return (
    <section id="About" className=" w-full min-h-[92vh] bg-teal-600 text-white p-2">
      <div className=" max-w-[1240px] h-full text-center mx-auto p-2 flex flex-col justify-center ">
        <div>
          <h3 className="text-sm pt-4 text-white/90">Get to Know</h3>
          <h2 className="text-4xl py-4">About Me</h2>
          <div className="md:flex items-center justify-between gap-20">
            <div className=" bg-white rounded-xl p-4">
              <Image
                className=" rounded-xl hover:scale-90 hover:rotate-6 ease-in duration-300"
                src={process.env.PORT + "/assets/image/ava.jpeg"}
                alt="/"
                width={2000}
                height={2000}
              />
            </div>

            <div>
              <h3 className=" text-lg py-4">What I Can Do</h3>
              <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 border-b-2 py-2">
                <CardSkill icon={AiFillHtml5} iconColor="text-orange-600" text="HTML" />
                <CardSkill icon={DiCss3} iconColor="text-blue-600" text="CSS" />
                <CardSkill icon={IoLogoJavascript} iconColor="text-yellow-500" text="Javascript" />
                <CardSkill icon={SiTypescript} iconColor="text-blue-500" text="Typescript" />
                <CardSkill icon={DiReact} iconColor="text-blue-400" text="React JS" />
                <CardSkill icon={IoLogoNodejs} iconColor="text-green-700" text="Node JS" />
                <CardSkill icon={DiMongodb} iconColor="text-green-700" text="MongoDB" />
                <CardSkill icon={TbBrandNextjs} iconColor="text-black/75" text="Next JS" />
                <CardSkill icon={TbBrandTailwind} iconColor="text-teal-500" text="Tailwind CSS" />
              </div>
              <p className="py-4">
                Hi there! My name is Kiki Vebiant from Jakarta, Indonesia and I
                am a full-stack developer and designer with a passion for
                creating engaging and intuitive user experiences. I am skilled
                in modern web technologies and frameworks.
                <br />
                <br />
                In addition to my technical skills, I am also a talented
                designer. I am always looking for new challenges and
                opportunities to expand my skills and knowledge, and am eager to
                continue making a positive impact in the world of web
                development and design. Thank you for taking the time to learn
                more about me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}