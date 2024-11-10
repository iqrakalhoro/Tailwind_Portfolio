import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Image from 'next/image';
import img from './about/image.jpg';
import Link from 'next/link';
import About from './about/page';
import Skills from './skills/page';
import Services from './services/page';
import PortfolioSection from './portfolio/page';
import ContactForm from './contact/page';


export default function HomePage() {
  return (
    <>  
      <Header />
      <div className="min-h-screen w-full flex flex-col">
        
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:flex-row bg-[#262525]">
          
          {/* Left Container */}
          <div className="left-container h-auto md:h-screen flex items-center w-full md:w-1/2 px-4 md:pl-12 justify-center">
            <div className="ml-0 md:ml-8 text-center md:text-left">
              <p className="intro text-2xl text-white">
                Hi I'm <span className="text-[#5db9ee]">Iqra Kalhoro</span>
              </p>
              <h1 className="text-4xl md:text-5xl text-[#5db9ee]">Frontend Developer</h1>
              <p className="detail text-[1rem] md:text-[1.1rem] text-white max-w-full md:max-w-[38rem] my-[1.1rem] mb-6 md:mb-12 leading-[1.8rem]">
                I am a part-time Graphic Designer. I am enrolled in the GIAIC course to learn more in information technology and AI to enhance my skills, as I am more interested in this field and aspire to be a part-time freelancer or provide my services to any brand or company privately.
              </p>
              <div className="btn-container flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center md:justify-start">
                <Link href="/portfolio">
                  <button className="border border-blue-400 text-black bg-blue-400 px-6 py-3 rounded-lg transition duration-500 hover:bg-transparent hover:text-blue-400 text-center">
                    My Portfolio
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg transition duration-500 hover:bg-blue-400 hover:text-black text-center">
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="right-container h-auto md:h-screen flex items-center justify-center w-full md:w-1/2 p-6">
            <div className="shadow-box flex justify-center items-center w-[80%] md:w-[60%] border-2 border-blue-500 h-[60%] rounded-full">
              <Image src={img} alt='' className='w-[250px] md:w-[370px] h-[250px] md:h-[370px] rounded-full' />
            </div>
          </div>
        </div>
        
       
        <About />

        <Skills />

        <Services/>
        
        <PortfolioSection />
     
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}
