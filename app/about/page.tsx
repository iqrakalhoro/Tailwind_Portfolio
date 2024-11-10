import React from 'react';
import { FaPhone, FaBookOpen, FaHospital, FaMap, FaPalette, FaLaptop, FaMailBulk } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import Image from 'next/image';
import img from "../about/image.jpg";

const About: React.FC = () => {
  return (
    <section className="about-section bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 w-full md:w-[80%]">
        <div className="row-container flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28">
          
          {/* Image Container */}
          <div className="image-container w-full md:w-1/2 flex justify-center mb-8 md:mb-0" data-type="inverted-img">
            <Image 
              src={img} 
              alt="Iqra Kalhoro" 
              className="w-[15rem] md:w-[22.8rem] h-auto md:h-[75vh] rounded-tl-[50%] rounded-tr-[50%]" 
            />
          </div>
          
          {/* Content Container */}
          <div className="content font-[Poppins] w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg md:text-xl text-blue-500">My intro</h3>
            <h1 className="text-2xl md:text-[2.6rem] font-[Fantasy] text-blue-400">About Me</h1>
            <p className="text-gray-700 text-sm md:text-base max-w-full md:max-w-[80%] mt-4 mb-8">
              I am Iqra Kalhoro, a Graphic Designer and student of GIAIC, aspiring to become a successful Frontend Developer.
            </p>
            
            {/* Information List */}
            <ul className="information text-gray-700">
              <li className="detail mb-4 md:mb-7">
                <FaPerson className="fill-blue inline-block" /> &nbsp; Name: &nbsp; Iqra Kalhoro
              </li>
              <li className="detail mb-4 md:mb-7">
                <FaPhone className="fill-blue inline-block" /> &nbsp; Phone: &nbsp; 03352974765
              </li>
              <li className="detail mb-4 md:mb-7">
                <FaMailBulk className="fill-blue inline-block" /> &nbsp; Email: &nbsp; iqrakalhoro110@gmail.com
              </li>
            </ul>
            
            {/* Interests */}
            <h4 className="text-xl md:text-2xl text-blue-300 mt-8 md:mt-10">My Interest</h4>
            <ul className="interest flex flex-wrap gap-4 md:gap-8 mt-5 justify-center md:justify-start">
              <li className="flex items-center gap-2">
                <FaLaptop className="text-blue-500 h-5 w-5" /> Technology
              </li>
              <li className="flex items-center gap-2">
                <FaBookOpen className="text-blue-500 h-5 w-5" /> Reading
              </li>
              <li className="flex items-center gap-2">
                <FaHospital className="text-blue-500 h-5 w-5" /> Healthcare
              </li>
              <li className="flex items-center gap-2">
                <FaMap className="text-blue-500 h-5 w-5" /> Traveling
              </li>
              <li className="flex items-center gap-2">
                <FaPalette className="text-blue-500 h-5 w-5" /> Art
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
