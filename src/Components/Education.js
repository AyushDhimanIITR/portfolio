import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";




const Detail = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between lg:w-[90%] md:w-full md:w-[80%] ">
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }}
                whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl  xs:text-lg">{type}</h3>
                <span className="dark:text-light/75 capitalize font-medium text-dark/75 xs:text-sm" >
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm ">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start "]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 " >
                Education
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative ">
                <motion.div style={{ scaleY: scrollYProgress }} className="dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                            md:w-[2px] md:left-[30px] xs:left-[20px]
            " />
                <ul className="w-full flex  flex-col items-satrt justify-between ml-4 xs:ml-2">
                    <Detail type="Bachelor Of Technology (B.Tech)" place="IIT Roorkee" info="CGPA - 7.8" time="Nov 2021 - April 2025(Expected)" />
                    <Detail type="Intermediate" place="Siddhant World School (CBSE)" info="91.6%" time="2020" />
                    <Detail type="Matriculate" place="Siddhant World School (CBSE)" info="91.6%" time="2018" />
                </ul>
            </div>

        </div>
    )
}

export default Education;