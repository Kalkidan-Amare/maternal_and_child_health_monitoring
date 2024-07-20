
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Transformative",
      description: "Ade has revolutionized how we collect and analyze child health data. The AI-driven insights enable us to take proactive measures to improve children's well-being.",
      name: "Dr. Maria Johnson",
      title: "Pediatric Health Coordinator, Save the Children NGO",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d47253eadeb20362b546072e1a0ac1a7a6f8336cf197d2b1ff689ec8caf1963?apiKey=27e3725db8b34053b390a33ddc94eaed&"
    },
    {
      quote: "Essential",
      description: "Ade is essential for our organization. It streamlines data collection and provides real-time analysis, significantly improving our efficiency.",
      name: "John Smith",
      title: "Program Manager, Health for All Foundation",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d47253eadeb20362b546072e1a0ac1a7a6f8336cf197d2b1ff689ec8caf1963?apiKey=27e3725db8b34053b390a33ddc94eaed&"
    },
    {
      quote: "Insightful",
      description: "Ade offers unmatched insights. The AI analysis and visualizations give us a deeper understanding of children's health, and the platform is easy for all team members to use.",
      name: "Emily Davis",
      title: "Senior Research Analyst, Child Health Initiative",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d47253eadeb20362b546072e1a0ac1a7a6f8336cf197d2b1ff689ec8caf1963?apiKey=27e3725db8b34053b390a33ddc94eaed&"
    }
  ];
  

  return (
    <section className="flex flex-col px-10 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start self-center mt-12 w-full max-w-[1320px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start md:px-10">
          <h2 className="text-2xl leading-9 text-emerald-700">Testimonial</h2>
          <h3 className="mt-6 text-5xl font-semibold text-black max-md:text-4xl md:w-2/3">What People Say About Us</h3>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ba81b8926684f7c01fa586e2b823c34dfe621278a582f548b0efe7c9c162a43?apiKey=27e3725db8b34053b390a33ddc94eaed&" alt="" className="shrink-0 self-end mt-20 aspect-[0.95] w-[61px] max-md:mt-10" />
      </div>
      <div className="mt-14 mb-3 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;