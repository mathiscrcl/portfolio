import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Apache Airflow",
      src: "/images/logos/airflowlogo.png",
      className: "h-10 w-14",
    },
    {
      title: "Apache Spark",
      src: "/images/logos/spark.png",
      className: "h-10 w-24",
    },
    {
      title: "Java",
      src: "/images/logos/logojava.png",
      className: "h-10 w-10",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",
      className: "h-10 w-8",
    },
    {
      title: "Pandas",
      src: "/images/logos/Pandas_logo.svg.png",
      className: "h-10 w-10",
    },
    {
      title: "PyTorch",
      src: "/images/logos/Pytorch_logo.png",
      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "SQL",
      src: "/images/logos/SQL.png",
      className: "h-10 w-24",
    },
  ];
  
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap items-center gap-4">
        {stack.map((item) => (
          <div 
            key={item.src}
            className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <Image
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain", item.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
