import React from "react";
import { ProjectsData } from "./project-data";
import CardItem from "@/components/Carditem";
import ScrambledText from "@/components/ScrambledText";

const page = () => {
  return (
    <div className="mt-16 mb-8 mx-4 xl:mx-0">
      <h2 className="text-3xl font-bold capitalize flex items-center text-white mb-4 ">
        <ScrambledText text="Projects" />{" "}
        <span className="text-accent ml-1"> ˮ</span>
      </h2>
      <p className="text-muted-foreground mb-12 leading-7">
        Here are some of the projects I&apos;ve built.
      </p>
      <div className="flex flex-col gap-8">
        {ProjectsData.map((project, index) => (
          <CardItem {...project} key={project.link} index={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
