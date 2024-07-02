import { servicesData } from "@/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { getJsonValue } from "../../data/translationService";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate="animate"
      className="h-full flex flex-col gap-4 justify-between p-4"
    >
      <motion.article
        variants={variants}
        className="flex-1 self-center md:self-end flex flex-col md:flex-row items-center gap-4 text-center md:text-start"
      >
        <p className="max-w-[30ch] font-extralight text-xl text-gray-500 text-right">
          {getJsonValue("I focus on helping") ?? "Default text"}
        </p>
        <hr className="w-72 md:w-96 border-0 border-t border-gray-500" />
      </motion.article>
      <motion.article
        variants={variants}
        className="flex-[2] flex flex-col gap-4 items-center w-full md:w-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-start">
          <Image
            src="/assets/Software-Engineering.jpg"
            alt="people"
            width={288}
            height={96}
            className="hidden sm:block w-48 lg:w-56 2xl:w-72 h-12 lg:h-20 2xl:h-24 rounded-3xl object-cover"
          />
          <h4 className="capitalize text-4xl lg:text-6xl 2xl:text-8xl font-thin">
            <b className="font-semibold text-white hover:text-orange-500">
              {getJsonValue("Unique") ?? "Default Unique"}
            </b>{" "}
            {getJsonValue("Ideas") ?? "Default Ideas"}
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-center md:text-start">
          <h4 className="capitalize text-4xl lg:text-6xl 2xl:text-8xl font-thin">
            <b className="font-semibold text-white hover:text-orange-500">
              {getJsonValue("For Your") ?? "Default For Your"}
            </b>{" "}
            {getJsonValue("Business") ?? "Default Business"}
          </h4>
          <button
            type="button"
            className="uppercase w-36 lg:w-48 2xl:w-64 h-12 lg:h-16 2xl:h-20 rounded-[50px] text-black bg-orange-400 border-none text-base lg:text-xl 2xl:text-2xl cursor-pointer hover:bg-orange-500"
          >
            {getJsonValue("What we do?") ?? "Default What we do?"}
          </button>
        </div>
      </motion.article>
      <motion.article
        variants={variants}
        className="flex-[2] flex flex-col md:flex-row w-full max-w-7xl m-auto"
      >
        {servicesData.map(item => (
          <motion.div
            key={item.title}
            className="border-0 md:border border-gray-500 flex flex-col items-center justify-between gap-4 p-2 md:p-6 2xl:p-8 text-gray-100 hover:bg-gray-100 hover:text-black rounded-md"
          >
            <h5 className="text-xl font-semibold">{getJsonValue(item.title) ?? "Default Title"}</h5>
            <p className="hidden md:block line-clamp-2">{getJsonValue(item.description) ?? "Default Description"}</p>
          </motion.div>
        ))}
      </motion.article>
    </motion.div>
  );
};
