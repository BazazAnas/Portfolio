import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./components/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <TechStack />
            <Contact />
            <Footer />
        </main>
    )
}

export default App