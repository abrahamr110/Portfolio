"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "inicio", path: "/" },
    { name: "resumen", path: "/resumen" },
    { name: "proyectos", path: "/proyectos" },
    { name: "contacto", path: "/contacto" },
];

export const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.path}
                        className={`${
                            link.path === pathname &&
                            "text-accent border-b-2 border-accent"
                        } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};
