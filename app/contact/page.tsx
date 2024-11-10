import React from 'react';

const ContactForm = () => {
  return (
    <div className="mx-auto p-4 md:p-8 min-h-screen w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-lg flex flex-col items-center">
        
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-lg font-semibold text-[#5db9ee]">Contact me</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400">Get in Touch</h1>
        </div>
        
        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full px-4 md:px-0">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full border-none rounded-md p-3 md:p-4 bg-gray-200 text-base focus:outline focus:outline-blue-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full border-none rounded-md p-3 md:p-4 bg-gray-200 text-base focus:outline focus:outline-blue-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border-none rounded-md p-3 md:p-4 bg-gray-200 text-base focus:outline focus:outline-blue-400"
          />
          <textarea
            placeholder="Type Your Message Here"
            rows={6}
            required
            className="w-full border-none rounded-md p-3 md:p-4 bg-gray-200 text-base resize-none focus:outline focus:outline-blue-400"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="bg-blue-400 text-white font-semibold py-2 md:py-3 px-4 rounded-md cursor-pointer hover:bg-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
