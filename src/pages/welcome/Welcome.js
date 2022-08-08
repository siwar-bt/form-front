import React from "react";
// Sections
import TopNavbar from "../../Components/welcome/nav/TopNavbar";
import Header from "../../Components/welcome/sections/Header";
import Services from "../../Components/welcome/sections/Services";
import Projects from "../../Components/welcome/sections/Projects";
import Contact from "../../Components/welcome/sections/Contact";
import Footer from "../../Components/welcome/sections/Footer"

export default function Landing() {
    return (
        <>
            <TopNavbar />
            <Header />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}