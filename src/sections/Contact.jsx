import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setformData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData({
            ...formData,
            [name]: value
        })
        console.log(name, value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPELATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )

            setformData({
                name: '',
                email: '',
                message: ''
            })

        } catch (error) {
            console.log("emailjs Error", error);
        } finally {
            setLoading(false)
        }

        setformData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <>
            <section id="contact" className='flex-center section-padding'>
                <div className="w-full h-full md:px-10 px-5 pt-18">
                    <TitleHeader
                        title="Get In Touch With Me"
                        sub="Contact Information"
                    />

                    <div className='mt-16 w-full'>

                        <p className='text-center'>
                            Feel free to reach out
                        </p>
                        <p className='text-center mt-4'>
                            Email: anasbazaz03@gmail.com
                        </p>

                        <div className="w-full h-full flex justify-center lg:mt-16 mt-8">
                            <div className="lg:w-2/3 w-full  xl:col-span-5 rounded-xl py-4 xl:px-10 px-2">
                                <form onSubmit={handleSubmit} ref={formRef}>

                                    <label htmlFor="name">Name</label>
                                    <input required className="mb-8"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        type="text" />

                                    <label htmlFor="email">Email</label>
                                    <input required className="mb-8"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email address "
                                        type="email" />

                                    <label htmlFor="message">Message</label>
                                    <textarea required className="h-48 mb-8"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message" />

                                    <div className="w-full flex justify-center">
                                        <button type="submit" className="lg:w-2/3 w-full">
                                            <div className="cta-button group">
                                                <div className="bg-circle" />
                                                <p className="text">
                                                    {loading ? "Sending..." : "Send Message"}
                                                </p>
                                                <div className="arrow-wrapper">
                                                    <img src="/images/arrow-down.svg" alt="arrow" />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact
