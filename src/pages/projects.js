import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Image from "next/image";
import Transition from "@/Components/Transition";

const Featured = ({ type, title, summary, img, github, link }) => {
    return (
        <article className="dark:bg-dark dark:border-light w-full flex items-center justify-between relative rounded-3xl 
        lg:flex-col lg:p-8 xs:rounded 2xl xs:rounded-br-3xl xs:p-4
        rounded-br-2xl border border-solid border-dark p-12 bg-light shadow-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[10 0%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] " />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg" >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base " >{type} </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm ">{title} </h2>
                </Link>
                <p className="py-2 font-medium text-dark dark:text-light sm:text-sm ">{summary} </p>
                <div className="mt-2 flex items-center ">
                    <Link href={github} target="_blank" className="w-10">{" "} <GithubIcon /> </Link>
                    <Link href={link} target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base"
                    >Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const ProjectList = ({ title, type, img, link, github, summary }) => {
    return (
        <article className="dark:bg-dark w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-10 py-6 relative
            xs:p-4 dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light dark:bg-light md:-right-2 md:w-[101%]
            xs:h-[102%] xs:rounded-[1.5rem] " />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg" >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base " >{type} </span>
                <Link href={link} target="_blank">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl  " >{title} </h2>
                </Link>
                <p className="py-2 font-medium text-dark dark:text-light sm:text-sm ">{summary} </p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                        className="underline text-lg font-semibold md:text-base"
                    >Visit</Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6"><GithubIcon /> </Link>
                </div>
            </div>
        </article>

    )
}

const Project = () => {
    return (
        <div>
            <Head>
                <title>Ayush Dhiman | Projects Page</title>
                <meta name="description" content="" />
            </Head>
            <Transition />
            <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12  ">
                            <Featured type="Featured Project" img={Project1} title="Inventory Management Portal" link="http://13.127.42.238" github="/"
                                summary="Built from scratch an inventory management portal for managing the 250+ items within the lab with features like a central login system, issue or return an item, notifying the lab when an item is low on stock etc. Working with the team to take this application to the institute level, implementing role based access that would ease the job of 500+ employees in IITR.
                                Tech Stack: React.js, Redux, Node.js, Express, and MongoDB." />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <ProjectList type="Cognizance, IIT Roorkee" img={Project1} title="Cognizance 2023 Website" link="http://13.127.42.238" github="/"
                                summary="Developed a ReactJS based website with a team of web developers with more than 2k+ user visits. Worked as backend web developer, implemented forgot password feature, used Email Client to send email alerts to the user improving the user experience.
                                Tech Stack: React.js, Node.js, PostgreSQL, HTML5, JavaScript, CSS, Git." />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <ProjectList type="NSS, IIT Roorkee" img={Project1} title="Social Summit by NSS" link="http://13.127.42.238" github="/"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency." />
                        </div>
                        <div className="col-span-12 ">
                            <Featured type="Featured Project" img={Project1} title="Inventory Management Portal" link="http://13.127.42.238" github="/"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency." />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <ProjectList type="Featured Project" img={Project1} title="Inventory Management Portal" link="http://13.127.42.238" github="/"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency." />
                        </div>
                        
                    </div>
                </Layout>
            </main>
        </div>
    )
}

export default Project;