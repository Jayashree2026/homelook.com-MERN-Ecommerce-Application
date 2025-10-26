import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-purple-50/60 to-purple-100/30 px-6 md:px-16 lg:px-24 py-16">
      
      {/* About Us Section */}
      <section className="border-t border-purple-200/50">
        <div className="border-t border-purple-200 pt-16 mb-12 text-center">
          <div className="text-4xl font-semibold py-2 text-purple-900">
            <Title text1="About " text2="Us" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-14 mb-16">
          
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-purple-200/40 hover:shadow-purple-300/40 transition-shadow duration-500">
              <img 
                className="object-cover w-full h-80 rounded-2xl transform hover:scale-105 transition-transform duration-700 ease-out" 
                src={assets.ab1} 
                alt="About HomeLook" 
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-purple-900">HomeLook.com</span>, your ultimate destination for elegant and affordable home décor. 
              We curate a wide range of stylish products that turn houses into cozy homes.
            </p>
            <p>
              Our collection features timeless classics, modern designs, and artisan-crafted pieces to suit every taste and style. 
              At HomeLook, quality and customer satisfaction come first.
            </p>

            <div className="bg-white/80 p-6 rounded-2xl shadow-md border border-purple-100 hover:shadow-purple-200/70 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-900">Our Mission</h3>
              <p>
                To inspire and empower you to create beautiful, personalized spaces by providing high-quality, stylish home décor at accessible prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-t border-purple-200/50 pt-20">
        <div className="text-4xl font-semibold py-2 text-center text-purple-900 mb-10">
          <Title text1="Why " text2="Choose Us" />
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              At <span className="font-semibold text-purple-900">HomeLook.com</span>, we are dedicated to making your home beautiful and comfortable. 
              Here’s why shoppers trust us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-purple-800/90">
              <li><strong>Exclusive Designs:</strong> Unique and curated collections.</li>
              <li><strong>Premium Quality:</strong> Durable materials and expert craftsmanship.</li>
              <li><strong>Affordable Prices:</strong> Luxury home décor within reach.</li>
              <li><strong>Fast Delivery:</strong> Timely and safe shipping guaranteed.</li>
              <li><strong>Customer Support:</strong> Friendly service every step of the way.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-purple-200/40 hover:shadow-purple-300/40 transition-shadow duration-500">
              <img 
                className="object-cover w-full h-80 rounded-2xl transform hover:scale-105 transition-transform duration-700 ease-out" 
                src={assets.ab2} 
                alt="Why Choose Us" 
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
