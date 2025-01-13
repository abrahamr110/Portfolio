"use client";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Teléfono",
        description: "(+34) 605 80 15 09",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "arm.developer00@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Ubicación",
        description: "Cádiz, España",
    },
];

const Contacto = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-20">
                    <div className="xl:h-full order-2 xl:order-none xl:w-full">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">
                                Trabajemos juntos
                            </h3>
                            <p className="text-white/60">
                                Rellene los siguientes campos para contactarnos
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="nombre"
                                    placeholder="Nombre"
                                    className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                                />
                                <input
                                    type="apellido"
                                    placeholder="Apellidos"
                                    className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                                />
                                <input
                                    type="teléfono"
                                    placeholder="Número de teléfono"
                                    className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                                />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecciona el servicio" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Selecciona el servicio
                                        </SelectLabel>
                                        <SelectItem value="1">
                                            Desarrollador Full Stack
                                        </SelectItem>
                                        <SelectItem value="2">
                                            Desarrollador Frontend
                                        </SelectItem>
                                        <SelectItem value="3">
                                            Desarrollador Backend
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className="h-[200px]"
                                placeholder="Escribe aquí tu mensaje..."
                            />
                            <Button size="md" className="max-w-40">
                                Enviar mensaje
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 xl:w-full">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">
                                                {item.title}
                                            </p>
                                            <h3 className="text-xl">
                                                {item.description}
                                            </h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contacto;
