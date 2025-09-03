"use client";
import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

import AirflowLogo from "../../public/images/logos/airflowlogo.png";
import SparkLogo from "../../public/images/logos/spark.png";
import JavaLogo from "../../public/images/logos/logojava.png";
import PythonLogo from "../../public/images/logos/python.png";
import PandasLogo from "../../public/images/logos/Pandas_logo.svg.png";
import PytorchLogo from "../../public/images/logos/Pytorch_logo.png";
import TailwindLogo from "../../public/images/logos/tailwind.png";
import SQLLogo from "../../public/images/logos/sql.png";

export const TechStack = () => {
  const stack = [
    {
      title: "Apache Airflow",
      src: AirflowLogo,
      className: "h-10 w-14",
    },
    {
      title: "Apache Spark",
      src: SparkLogo,
      className: "h-10 w-24",
    },
    {
      title: "Java",
      src: JavaLogo,
      className: "h-10 w-10",
    },
    {
      title: "Python",
      src: PythonLogo,
      className: "h-10 w-8",
    },
    {
      title: "Pandas",
      src: PandasLogo,
      className: "h-10 w-10",
    },
    {
      title: "PyTorch",
      src: PytorchLogo,
      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: TailwindLogo,
      className: "h-10 w-24",
    },
    {
      title: "SQL",
      src: SQLLogo,
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
            key={item.title}
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
