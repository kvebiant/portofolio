import React from "react";
import ProjectItems from "../Assets/PorjectAssets/ProjectItems";
import propertyImg from "../../public/assets/image/ava.jpeg";

export default function Projects() {
  return (
    <section id="Projects" className=" w-full h-full bg-white text-black p-2">
      <div className=" max-w-[1240px] text-center mx-auto p-2 flex flex-col justify-center ">
        <div className="text-xl tracking-widest text-teal-700">
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems title='Property Finder' subTitle="React JS" backgroundImg={propertyImg} projectUrl='/' />
            <ProjectItems title='Property Finder' subTitle="React JS" backgroundImg={propertyImg} projectUrl='/' />
            <ProjectItems title='Property Finder' subTitle="React JS" backgroundImg={propertyImg} projectUrl='/' />
            <ProjectItems title='E-Commerce' subTitle="React JS" backgroundImg={propertyImg} projectUrl='/' />
          </div>
        </div>
      </div>
    </section>
  );
}