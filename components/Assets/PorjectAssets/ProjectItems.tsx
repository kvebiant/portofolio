import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  subTitle,
  backgroundImg,
  hasDesc,
  projectUrl,
  projectDemo,
  aspectRatio,
}: {
  title: string;
  subTitle: string;
  backgroundImg: any;
  hasDesc: boolean;
  projectUrl: string;
  projectDemo: string;
  aspectRatio: string;
}) => {
  return (
    <div
      className={
        hasDesc === true
          ? " flex mb-5 md:mb-10 hover:scale-105 h-auto w-full shadow-xl shadow-gray-400 hover:shadow-teal-700 rounded-xl p-4 ease-in duration-300 group hover:bg-gradient-to-r from-teal-400 to-teal-600"
          : " flex mb-5 md:mb-10 hover:scale-105 h-auto w-full shadow-xl shadow-gray-400 hover:shadow-teal-700 rounded-xl p-4 ease-in duration-300"
      }
    >
      <Image
        className={"rounded-xl w-full group-hover:opacity-10 " + aspectRatio}
        src={backgroundImg}
        alt="404: Image not Found"
        width={400}
        height={400}
        layout="responsive"
        priority
      />
      {hasDesc === true ? (
        <div className=" hidden columns-1 group-hover:block absolute items-center justify-center top-[10%] left-[50%] translate-x-[-50%] translate-y-[50%]">
          <h3 className="text-2xl text-white text-center">{title}</h3>
          <p className="pb-4 text-white text-center">{subTitle}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer mb-5">
              View Code
            </p>
          </Link>
          {projectDemo != "" ? (
            <Link href={projectDemo} target="_blank" rel="noopener noreferrer">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                View Demo
              </p>
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectItem;
