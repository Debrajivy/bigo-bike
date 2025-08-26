
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ravi Gupta",
      company: "SwiftDelivery Co.",
      role: "Operations Manager",
      rating: 5,
      text: "BiGo.bike has transformed our delivery operations. The electric bikes are reliable, cost-effective, and our customers love the eco-friendly approach.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Meera Reddy",
      company: "FreshMart",
      role: "Logistics Head",
      rating: 5,
      text: "Excellent service and support. The fleet management system is intuitive and the bikes perform exceptionally well in city traffic.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Arjun Singh",
      company: "QuickEats",
      role: "Founder",
      rating: 5,
      text: "Our delivery times improved by 30% after switching to BiGo.bike. The subscription model is perfect for our growing business.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <>
    <div style={{marginTop:-200}}>
      </div></>
    // <section className="section-padding bg-white" id="testimonials">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-16">
    //       <h2 className="section-title">
    //         WHAT OUR CLIENTS
    //         <br />
    //         <span className="text-bigo-teal">SAY ABOUT US</span>
    //       </h2>
    //     </div>

    //     <div className="grid md:grid-cols-3 gap-8">
    //       {testimonials.map((testimonial, index) => (
    //         <div key={index} className="feature-card">
    //           <div className="flex items-center mb-4">
    //             {[...Array(testimonial.rating)].map((_, i) => (
    //               <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    //             ))}
    //           </div>
              
    //           <Quote className="w-8 h-8 text-bigo-teal mb-4" />
              
    //           <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
    //           <div className="flex items-center">
    //             <img 
    //               src={testimonial.image} 
    //               alt={testimonial.name}
    //               className="w-12 h-12 rounded-full mr-4"
    //             />
    //             <div>
    //               <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
    //               <p className="text-sm text-gray-600">{testimonial.role}</p>
    //               <p className="text-sm text-bigo-teal">{testimonial.company}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Testimonials;
