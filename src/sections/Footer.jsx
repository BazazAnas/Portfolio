import React from 'react'

const Footer = () => {

    const socialImgs = [
        {
            name: "insta",
            url: "https://www.instagram.com/",
            imgPath: "/images/insta.png",
        },
        {
            name: "fb",
            url: "https://www.facebook.com/",
            imgPath: "/images/fb.png",
        },
        {
            name: "x",
            url: "https://www.x.com/",
            imgPath: "/images/x.png",
        },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/",
            imgPath: "/images/linkedin.png",
        },
    ];


    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="flex flex-col justify-center items-center">
                        <a href="">View my projects on GitHub</a>
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