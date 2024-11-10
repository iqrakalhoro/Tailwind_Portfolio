import React from 'react';

const services = [
  {
    title: 'Web Development',
    description:
      'Crafting responsive and visually appealing websites using HTML, CSS, and JavaScript. Building robust server-side applications with secure databases. Complete end-to-end web development, from design to deployment. Tailored solutions to meet unique business needs. Setting up online stores with seamless shopping experiences. Ongoing updates, bug fixes, and performance optimization.',
  },
  {
    title: 'Graphic Design',
    description:
      'Providing unique and memorable brand identities. Eye-catching brochures, flyers, and banners. Engaging visuals for online presence. Clean and attractive layouts for websites and apps. Creative packaging that stands out on the shelf. High-impact designs for promotions.',
  },
  {
    title: 'SEO',
    description:
      'Improve content, keywords, and meta tags for better rankings. Enhance site speed, mobile-friendliness, and crawlability. Identify high-impact keywords to target your audience. Boost authority with quality backlinks. Optimize for local searches and map listings. In-depth analysis and action plans to improve site performance.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Engage your audience across major platforms. Create and promote valuable, relevant content. Drive instant traffic with targeted paid ads. Build relationships and convert leads with effective campaigns. Optimize visibility and drive organic and paid search traffic. Data-driven insights for continuous growth.',
  },
  {
    title: 'Video Editing',
    description:
      'Smooth transitions, color correction, and sound enhancement. Engaging content tailored for platforms like Instagram, TikTok, and YouTube. High-impact videos for ads and branding. Capturing the best moments for personal or corporate events. Clear and concise edits for tutorials and presentations. Adding dynamic text, animations, and effects.',
  },
  {
    title: 'Branding',
    description:
      'Unique, memorable brand identity. Developing positioning, messaging, and branding. Consistent color schemes, typography, and brand assets. Comprehensive rules for cohesive brand usage. Refresh and modernize your existing brand. Design branded materials that stand out.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services-section" className="bg-[#262525] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg font-semibold text-blue-500">Services</h3>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-400">What I Offer</h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="card bg-gray-100 p-4 md:p-6 rounded-md shadow-md">
                <h4 className="text-lg md:text-xl font-bold mb-2 text-blue-600">{service.title}</h4>
                <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <ServicesSection />
    </div>
  );
};

export default App;
