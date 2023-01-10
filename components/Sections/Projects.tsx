import React from "react";
import ProjectItems from "../Assets/PorjectAssets/ProjectItems";

export default function Projects() {
  return (
    <section id="Projects" className=" mw-full min-h-[92vh] h-full bg-white mb-4 text-black p-2 flex-auto">
      <div className=" max-w-[1240px] text-center mx-auto p-2 flex flex-col justify-center ">
        <div className="text-xl tracking-widest text-teal-700">
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={'/assets/image/a'} projectUrl='/' />
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={'/assets/projects/b'} projectUrl='/' />
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={'/assets/projects/c'} projectUrl='/' />
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={'/assets/projects/d'} projectUrl='/' />
          </div>
        </div>
      </div>
    </section>
  );
}