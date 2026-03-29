import Buttons from "../components/Buttons.jsx";
import Model from "../components/Model.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo(".hero-text h1", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            animation: "power2.inOut",
        })
    }
    )

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt="person"
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 pointer-events-none md:text-xl relative z-10 ">
                            Hi , I'm Anas ,a Full Stack Developer
                        </p>
                        <Buttons
                            className="md:w-80 md:h-16 w-60 h-12"
                            text="See My Work"
                            id="Button"
                        />
                    </div>
                </header>
                <figure>
                    <div className="hero-3d-layout">
                        <Model />
                    </div>
                </figure>
            </div>
            {/* <AnimatedCounter /> */}
        </section>
    )
};

export default Hero;
