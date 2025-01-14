"use client";

import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
    title: "Sobre mí",
    description:
        "Soy un desarrollador full stack y diseñador de interfaces con experiencia en React, Next.js, Tailwind CSS, HTML, CSS y JavaScript.",
    info: [
        { fieldName: "Nombre", fieldValue: "Abraham" },
        { fieldName: "Número de teléfono", fieldValue: "+34 605801509" },
        { fieldName: "Email", fieldValue: "arm.developer00@gmail.com" },
        { fieldName: "Experiencia", fieldValue: "+2 años" },
        { fieldName: "Nacionalidad", fieldValue: "España" },
        { fieldName: "Idioma", fieldValue: "Español, Inglés" },
    ],
};

const experience = {
    icon: "",
    title: "Mi experiencia laboral",
    description:
        "Esta es mi experiencia laboral como desarrollador full stack.",
    items: [
        {
            company: "Crossmedia 360",
            position: "Desarrollador Full Stack.",
            duration: "2024 - 2024",
            description:
                "Con experiencia en React, Next.js, Tailwind CSS, HTML, CSS3, Figma, Node.js, JavaScript y TypeScript.",
        },
    ],
};

const studies = {
    icon: "",
    title: "Mis estudios",
    description: "Estos son mis estudios como desarrollador full stack.",
    items: [
        {
            institution: "IES Rafael Alberti",
            position: "Desarrollador de Aplicaciones Web",
            duration: "2024 - Actualidad",
        },
        {
            institution: "ID Bootcamps",
            position: "Programación y Desarrollo Web Full Stack",
            duration: "2024 - Actualidad",
        },
        {
            institution: "Ces Juan Pablo II",
            position: "Desarrollador de Aplicaciones Multiplataforma",
            duration: "2022-2024",
        },
    ],
};

const skills = {
    title: "Mis habilidades",
    description: "Estas son mis habilidades como desarrollador full stack.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <FaJs />,
            name: "javaScript",
        },

        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
    ],
};

const Resumen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 1, ease: "easeIn" },
            }}
            className="flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto ">
                <Tabs
                    defaultValue="experiencie"
                    className="flex flex-col xl:flex-row gap-[60px] "
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">Sobre mí</TabsTrigger>
                        <TabsTrigger value="experience">
                            Experiencia
                        </TabsTrigger>
                        <TabsTrigger value="education">Estudios</TabsTrigger>
                        <TabsTrigger value="skills">Habilidades</TabsTrigger>
                    </TabsList>

                    <div className="w-full h-full">
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full mx-auto xl:mx-0 ">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4 rounded-xl bg-[#232329] px-2"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-xl">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="overflow-x-hidden pr-4">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent ">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-2xl max-w-[260px] minh-[60px] text-center lg:text-left mb-2">
                                                        {item.position}
                                                    </h3>
                                                    <p className="text-sm text-white/90">
                                                        {item.description}
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {studies.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {studies.description}
                                </p>
                                <ScrollArea className="overflow-x-hidden">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {studies.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent ">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-lg max-w-[260px] minh-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-[30px]">
                                    {skills.skillList.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex  justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {item.icon}
                                                            </div>
                                                            <TooltipContent>
                                                                <p className="capitalize">
                                                                    {item.name}
                                                                </p>
                                                            </TooltipContent>
                                                        </TooltipTrigger>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};
export default Resumen;
