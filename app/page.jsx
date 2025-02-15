import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Social } from "../components/Social";
import { Photo } from "../components/Photo";

const Home = () => {
    return (
        <section>
            <div className="container mx-auto ">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-10">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">
                            Desarrollador full-stack
                        </span>
                        <h1 className="h1 mb-6">
                            Hola, soy
                            <br />
                            <span className="text-accent">
                                Abraham Rodríguez
                            </span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Soy un desarrollador full stack apasionado por crear
                            soluciones digitales eficientes y escalables. Con
                            experiencia en frontend y backend, domino
                            tecnologías como JavaScript, React, Node.js y bases
                            de datos relacionales y no relacionales. La parte
                            que más me apasiona es la del desarrollo
                            <span className="text-accent text-xl">
                                {" "}
                                Frontend.
                            </span>
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <a
                                    href="/CV Currículum Vitae.pdf"
                                    download="CV Currículum Vitae.pdf"
                                    className="flex items-center gap-2"
                                >
                                    <span>Download CV</span>
                                    <FiDownload className="text-xl" />
                                </a>
                            </Button>

                            <div className="mb-8 xl:mb-0">
                                <Social />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
