import React from "react";
import ProjectItems from "../Assets/PorjectAssets/ProjectItems";

export default function Projects() {
  return (
    <section
      id="Projects"
      className=" mw-full min-h-[(100vh-5rem)] h-full bg-white mb-4 text-black p-2 flex-auto"
    >
      <div className=" max-w-[1240px] text-center mx-auto p-2 flex flex-col justify-center ">
        <div className="text-xl tracking-widest text-teal-700">
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems
              title="Weather App"
              subTitle="Flutter"
              backgroundImg={
                (process.env.NEXT_PUBLIC_PORT as string) +
                "/assets/image/projects/Clima.png"
              }
              aspectRatio="aspect-auto"
              hasDesc={true}
              projectUrl="https://github.com/kvebiant/clima"
              projectDemo=""
            />
            <ProjectItems
              title=''
              subTitle=''
              backgroundImg={
                (process.env.NEXT_PUBLIC_PORT as string) +
                "/assets/image/projects/comingsoon.png"
              }
              aspectRatio="aspect-square"
              hasDesc={false}
              projectUrl="/"
              projectDemo=""
            />
            <ProjectItems
              title=''
              subTitle=''
              backgroundImg={
                (process.env.NEXT_PUBLIC_PORT as string) +
                "/assets/image/projects/comingsoon.png"
              }
              aspectRatio="aspect-square"
              hasDesc={false}
              projectUrl="/"
              projectDemo=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
