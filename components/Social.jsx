"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    {
        path: "https://github.com/abrahamr110",
        icon: <FaGithub />,
    },
    {
        path: "https://www.linkedin.com/in/abraham-rodriguez-69aa7b29b/",
        icon: <FaLinkedinIn />,
    },
];

export const Social = () => {
    return (
        <div className="flex gap-6">
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};
