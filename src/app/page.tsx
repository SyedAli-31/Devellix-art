import CaseStudies from "@/components/home/CaseStudies";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import SecRecent from "@/components/home/Services";
import Statistics from "@/components/home/Statistics";
import TechIndex from "@/components/home/TechIndex";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyChooseUs from "@/components/home/WhyChooseUs";



export default function Home() {
  return (
    <div>
       <Hero/>
     <WhyChooseUs/>
       <SecRecent/>
       <WhatWeDo/>
       <TechIndex/>
      <Statistics/>
      <CaseStudies/>
       <Testimonials/>  
       
<ContactSection/>
    </div>
  );
}
