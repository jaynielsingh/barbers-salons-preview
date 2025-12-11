import React from "react";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Features from "./_components/features";
import AboutUs from "./_components/aboutUs";
import Teams from "./_components/team";
import Contact from "./_components/contact";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="m-5">
        <Hero />
      </div>
      <Features />
      <AboutUs />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
