import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((project, index) => {
            gsap.fromTo(project,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2 * (1 + index),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100'
                    }
                })
        })

        gsap.fromTo(sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1})


    })

    return (
        <>
            <div id="work" ref={sectionRef} className="app-showcase">
                <div className="w-full">
                    <div className="showcaselayout">
                        <div className="first-project-wrapper" ref={project1Ref}>
                            <div className="image-wrapper">
                                <img src="/images/whispr interface.png" alt="Chat App Interface"/>
                            </div>
                            <div className="text-content">
                                <h2>
                                    Whispr - A Real-Time Chat Application
                                </h2>
                                <p className="text-white-50 md:text-xl">
                                    Whispr is a full-stack real-time chat application built with modern web technologies. It supports secure authentication, real-time messaging using Socket.IO, and is designed with production-grade deployment practices.
                                </p>
                            </div>
                        </div>

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#151515]">
                                    <img
                                        src="/images/code reviewer interface .png"
                                        alt="code reviewer app interface"
                                    />
                                </div>
                                <h2>Code Reviewer Platform</h2>
                            </div>

                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-[#151515]">
                                    <img src="/images/react animation interface.png" alt="React Animation Interface"/>
                                </div>
                                <h2>YC Directory - A Startup Showcase App</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowcaseSection
