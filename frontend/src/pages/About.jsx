import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-gray-50 px-6 md:px-16 lg:px-24 py-12">
      
      {/* About Us Section */}
      <section className="border-t border-gray-300">
         <div className='border-t pt-16 mb-10'>
                <div className=' text-3xl font-semibold py-2 text-gray-900'>
          <Title text1="About" text2="Us" />
        </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          
         
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-100 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-gray-400 italic"> <img className='object-center w-100 h-90 rounded-2xl' src={assets.ab1}/></p>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-gray-900">HomeLook.com</span>, your ultimate destination for elegant and affordable home décor. 
              We curate a wide range of stylish products that turn houses into cozy homes.
            </p>
            <p>
              Our collection features timeless classics, modern designs, and artisan-crafted pieces to suit every taste and style. 
              At HomeLook, quality and customer satisfaction come first.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md border mb-10 border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Mission</h3>
              <p>
                To inspire and empower you to create beautiful, personalized spaces by providing high-quality, stylish home décor at accessible prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-t border-gray-300 pt-20">
        <div className="text-3xl font-semibold py-2 text-gray-900">
          <Title text1="Why" text2="Choose Us" />
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              At <span className="font-semibold text-gray-900">HomeLook.com</span>, we are dedicated to making your home beautiful and comfortable. 
              Here’s why shoppers trust us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Exclusive Designs:</strong> Unique and curated collections.</li>
              <li><strong>Premium Quality:</strong> Durable materials and expert craftsmanship.</li>
              <li><strong>Affordable Prices:</strong> Luxury home décor within reach.</li>
              <li><strong>Fast Delivery:</strong> Timely and safe shipping guaranteed.</li>
              <li><strong>Customer Support:</strong> Friendly service every step of the way.</li>
            </ul>
          </div>

           
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-72 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-gray-400 italic"><img src={assets.ab2}/></p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
