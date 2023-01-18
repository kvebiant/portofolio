import React from "react";
import ProjectItems from "../Assets/PorjectAssets/ProjectItems";

export default function Projects() {
  return (
    <section id="Projects" className=" mw-full min-h-[(100vh-5rem)] h-full bg-white mb-4 text-black p-2 flex-auto">
      <div className=" max-w-[1240px] text-center mx-auto p-2 flex flex-col justify-center ">
        <div className="text-xl tracking-widest text-teal-700">
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={process.env.NEXT_PUBLIC_PORT as string + '/assets/image/projects/a'} projectUrl='/' />
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={process.env.NEXT_PUBLIC_PORT as string + '/assets/image/projects/a'} projectUrl='/' />
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={process.env.NEXT_PUBLIC_PORT as string + '/assets/image/projects/a'} projectUrl='/' />
            <ProjectItems title='Test Subject' subTitle="React JS" backgroundImg={process.env.NEXT_PUBLIC_PORT as string + '/assets/image/projects/a'} projectUrl='/' />
          </div>
        </div>
      </div>
    </section>
  );
}