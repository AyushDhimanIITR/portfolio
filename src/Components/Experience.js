import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";




const Detail = ({position, company, compannyId, time, address, work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
            md:w-[80%] 
        ">
            <LiIcon reference={ref} />
            <motion.div initial={{y:50}}
            whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}
                > 
                <h3 className="capitalize font-bold text-2xl 
                sm:text-xl  xs:text-lg
                ">{position}&nbsp; <a target={"_blank"}
                 className="text-primary dark:text-primaryDark capitalize" href={compannyId}>@{company}</a> </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm " >
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start "]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
            <motion.div style={{scaleY:scrollYProgress}} className="dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
                md:w-[2px] md:left-[30px] xs:left-[20px]
            " />
            <ul className="w-full flex  flex-col items-satrt justify-between ml-4 xs:ml-2 ">
                <Detail position="Frontend Developer Intern" address="remote" compannyId="https://skilliumlabs.com" company="Skillium Labs" time="15 April 2023 - 15 July 2023" 
                work="Developed a high-impact responsive website, integrating top-tier functionality from scratch and deployed on firebase. Used axios for making HTTP requests to authenticate users, perform CRUD operations on users data. Optimised the website's performance by implementing caching and image optimization. Pro-actively participated in weekly team meetings and completed the task before deadline.
                Tech Stack: ReactJS, Redux, JavaScript, Git, Firebase."
                />
                <Detail position="Frontend Developer Intern" address="remote" compannyId="" company="Stealth Mode" time="17 July 2023 -Present" 
                work="Working in a FinTech Company" />
            </ul>
        </div>

        </div>
    )
}

export default Experience;