const Footer = () => {

    const socialImgs = [
        {
            name: "insta",
            url: "https://www.instagram.com/",
            imgPath: "/images/insta.png",
        },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/anas-bin-ajaz/",
            imgPath: "/images/linkedin.png",
        },
    ];


    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="flex flex-col justify-center items-center">
                        <a href="https://github.com/BazazAnas">View my projects on GitHub</a>
                    </div>
                    <div className="socials">
                        {socialImgs.map((img) => (
                            <a className='icon' href={img.url} key={img.name}>
                                <img src={img.imgPath} alt={img.name} />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-center md:text-end">
                            © {new Date().getFullYear()} Anas Bin Ajaz. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer