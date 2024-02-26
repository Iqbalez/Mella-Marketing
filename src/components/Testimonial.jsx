import React from 'react'
import Picture from '../assets/Picture.jpg'

    const testimonials = [
        {
        id: 1,
        name: 'John Doe',
        testimonial: 'Mella transformed our business. The impact was immediate, and the results were outstanding. Trust, reliability and success – that is what Mella delivers.',
        company: 'CEO',
        
      },
      {
        id: 2,
        name: 'Jane Smith',
        testimonial: 'Working with Mella was a game-changer for our marketing strategy. The team is expertise and dedication turned our challenges into opportunities. Mella is a great partner you need.',
        company: 'COO',
        
      },
      {
        id: 3,
        name: 'Mark Johnson',
        testimonial: 'Choosing Mella was the best decision for our business. The level of creativity and professionalism they brought to our campaigns exceeded our expectations.',
        company: 'CTO',
        
      },
    ];
    
    const Testimonials = () => {
      return (
        <div className="bg-neutral-900 py-12 scroll-smooth">
        <div className="container mx-auto px-4 mt-6 sm:mt-28">
          <h2 className="text-3xl font-bold mb-10 sm:mb-20">What people are saying about us!</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
                <div className="flex items-center">
                  <img
                    src={Picture}
                    className="w-10 h-10 rounded-full mr-4"
                    alt="Profile Picture"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
}

export default Testimonials