import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }} initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition:{duration: 1.5}}}
            
            className="dark:text-dark dark:bg-light flex absolute py-3 px-6 shadow-dark items-center cursor-pointer
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
            xs:font-bold
            justify-center rounded-full font-semibold bg-dark text-light">
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <div>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills
            </h2>
            <div className="bg-circularLight dark:bg-circularDark w-full h-screen relative flex
                lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                items-center rounded-full justify-center rounded-full">
                <motion.div whileHover={{ scale: 1.05 }}
                    className="flex p-8 shadow-dark items-center cursor-pointer justify-center rounded-full font-semibold bg-dark
                    lg:p-6 md:p-4 xs:p-2 xs:text-xs 
                     text-light dark:text-dark dark:bg-light">
                    Skills
                </motion.div>

                <Skill name="CSS"  x="-5vw" y="-10vw" />
                <Skill name="HTML5"  x="-20vw" y="2vw" />
                <Skill name="JavaScript"  x="20vw" y="6vw" />
                <Skill name="ReactJS"  x="0vw" y="12vw" />
                <Skill name="Express"  x="-18vw" y="12vw" />
                <Skill name="NodeJS"  x="15vw" y="-12vw" />
                <Skill name="MongoDB"  x="32vw" y="-5vw" />
                <Skill name="PostgreSQL"  x="0vw" y="-20vw" />
                <Skill name="Redux"  x="-32vw" y="-6vw" />
                <Skill name="Firebase"  x="-18vw" y="-14vw" />
                <Skill name="Angular"  x="-20vw" y="2vw" />
            </div>
        </div>
    )
}

export default Skills;