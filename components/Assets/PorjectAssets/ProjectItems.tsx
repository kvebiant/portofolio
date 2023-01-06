import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, subTitle, backgroundImg, projectUrl }: {title: string, subTitle: string, backgroundImg: StaticImageData, projectUrl: string}) => {
  return (
    <div className="relative flex hover:scale-105 items-center justify-center h-auto w-full shadow-xl shadow-gray-400 hover:shadow-teal-700 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-400 to-teal-600">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className=" hidden group-hover:block absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[50%]">
        <h3 className="text-2xl text-white text-center">{title}</h3>
        <p className="pb-4 text-white text-center">{subTitle}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            View Code
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;