import TitleHeader from "../components/TitleHeader.jsx";
import TechIcon from "../components/models/TechIcon.jsx";

const TechStack = () => {

    const techStackIcons = [
        {
            name: "React Developer",
            modelPath: "/models/react_logo-transformed.glb",
            scale: 1,
            rotation: [0, 0, 0],
        },
        {
            name: "Python Developer",
            modelPath: "/models/python-transformed.glb",
            scale: 0.8,
            rotation: [0, 0, 0],
        },
        {
            name: "Backend Developer",
            modelPath: "/models/node-transformed.glb",
            scale: 5,
            rotation: [0, -Math.PI / 2, 0],
        },
        {
            name: "Interactive Developer",
            modelPath: "/models/three.js-transformed.glb",
            scale: 0.05,
            rotation: [0, 0, 0],
        },
        {
            name: "Project Manager",
            modelPath: "/models/git-svg-transformed.glb",
            scale: 0.05,
            rotation: [0, -Math.PI / 4, 0],
        },
    ];

    return (
        <>
            <div id="skills" className="flex-center section-padding pt-5 mb-16">
                <div className="w-full h-full md:px-10 px-5">
                    <TitleHeader
                        title="TechStack"
                        sub="The Skills I Bring To The Table"
                    />
                    <div className="tech-grid">
                        {techStackIcons.map((icon) => (
                            <div className="z-20 card-border overflow-hidden xl:rounded-2xl rounded-4xl group"
                                key={icon.name}>
                                <div className="relative tech-animate">
                                    <div className="tech-card-content">
                                        <div className="tech-icon-wrapper">
                                            <TechIcon
                                                model={icon}
                                            />
                                        </div>
                                        <div className="padding-x w-full">
                                            <p>{icon.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TechStack
