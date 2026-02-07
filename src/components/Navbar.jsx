import {useState, useEffect} from 'react'

const Navbar = () => {

    const navLinks = [
        {
            name: "Work",
            link: "#work",
        },
        {
            name: "Skills",
            link: "#skills",
        },
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
                <div className="inner">
                    <a className="logo" href="#hero">Anas Bin Ajaz</a>
                    <nav className="desktop">
                        <ul>
                            {navLinks.map(({name, link}) => (
                                <li className="group">
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a className="contact-btn group" href="#contact">
                        <div className="inner">
                            <span>Contact Me</span>
                        </div>
                    </a>
                </div>
            </header>
        </>
    )
}
export default Navbar
