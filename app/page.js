import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurLocations from "./components/Locations";
import PaymentPartners from "./components/Partnerbank";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import OurServices from "./components/Services";
import Statistics from "./components/Stats";
import OurTeam from "./components/Team";
import ClientTestimonials from "./components/Testimonals";
import Gsap from "./components/Gsap";
import TrustedLoadboards from "./components/TrustedLoads";
import ComplianceCheck from "./components/Comp";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto container">
      <Header />
      <Hero />
      <Partners/>
      <OurServices/>
      <AboutUs/>
      <Statistics/>
    
      <Pricing/>
      <Gsap/>
      <ComplianceCheck/>
      <TrustedLoadboards/>
      <PaymentPartners/>
      <ClientTestimonials/>
      <OurTeam/>
      
     <OurLocations/>
     <FAQ/>
     <ContactUs/>
     <Footer/>
    </div>
  );
}
