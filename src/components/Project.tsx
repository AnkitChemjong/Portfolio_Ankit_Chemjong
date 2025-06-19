import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react"
const MotionCard = motion(Card);

const Project = () => {
  const projects = [
    {
      name: "Efficient Pathsala",
      description: "An education platform offering course management, student-teacher interaction, and more.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gitlink: "https://github.com/AnkitChemjong/Final-Year-Project-FYP-.git",
      image: "./image/efficient.png"
    },
    {
      name: "ChatApp",
      description: "A real-time chat application with user authentication and live messaging.",
      tech: ["Socket.IO", "React.js", "Node.js", "Express.js"],
      gitlink: "https://github.com/AnkitChemjong/Chat-App-2.0.git",
      image: "https://img.icons8.com/color/96/javascript.png"
    },
    {
      name: "Job Portal",
      description: "A modern platform where users can search and post jobs with filtering features.",
      tech: ["Next.js", "MongoDB","Clerk"],
      gitlink: "https://github.com/AnkitChemjong/Nextjs-series.git",
      image: "https://img.icons8.com/color/96/javascript.png"
    },
    {
      name: "Bookstore Nepal",
      description: "An online bookstore for managing book listings, orders, and admin features.",
      tech: ["React.js", ".NET", "PostgreSQL"],
      gitlink: "https://github.com/AnkitChemjong/DotNetCourseWork3.git",
      image: "https://img.icons8.com/color/96/javascript.png"
    }
  ];

  return (
    <div id='project' className="flex flex-col text-center w-screen h-fit py-10 px-4">
      <h1 className="text-3xl font-bold">
        MY <span className="text-green-900">PROJECTS</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:px-20">
        {projects.map((item, index) => (
          <MotionCard
          whileTap={{ scale: 0.80 }}
            key={index}
            className="flex flex-col hover:scale-110 transition-all duration-150 cursor-pointer justify-between items-start p-2 text-center"
          >
            <CardHeader className="w-full">
              <img className="w-1/2 mx-auto" src={item?.image} alt="project-icon" />
              <CardTitle className="text-xl font-semibold">{item?.name}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <p className="text-sm text-gray-700">{item?.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {item?.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={item?.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-blue-600 hover:underline"
              >
                View on GitHub →
              </a>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
