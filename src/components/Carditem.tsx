import React from "react";
import { Icons } from "./Icons";

interface cardItemProps {
  name: string;
  index: number;
  description: string;
  key_points: string[];
  link: string;
  techstack: string[];
}

const CardItem = (project: cardItemProps) => {
  return (
    <a
      className="group text-left border border-white/10 p-8 hover:border-accent"
      target="_blank"
      rel="noopener noreferrer"
      href={project.link}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg gap-1 font-bold mb-2 uppercase group-hover:text-accent">
          <p className="text-accent text-sm">#{project.index} </p>{" "}
          {project.name}
        </h3>
        <Icons.ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 " />
      </div>
      {/* DESCRIPTION */}
      <p className="text-sm font-normal text-muted-foreground">
        {project.description}
      </p>
      {/* FEATURES */}
      <p className="mt-6 mb-3 text-white font-semibold text-sm">Key Features</p>
      <ul>
        {project.key_points.map((point) => {
          return (
            <li
              key={point}
              className="text-sm list-disc ml-6 leading-7 text-muted-foreground"
            >
              {point}
            </li>
          );
        })}
      </ul>
      {/* TECHSTACK */}
      <p className="mt-6 mb-3 text-white font-semibold text-sm">Tech Stack</p>
      <ul className="flex items-center flex-grow gap-2 flex-wrap">
        {project.techstack.map((tech) => {
          return (
            <li
              key={tech}
              className="text-sm border border-white/10 bg-neutral-900 px-2 py-1 text-muted-foreground lowercase"
            >
              {tech}
            </li>
          );
        })}
      </ul>
    </a>
  );
};

export default CardItem;
