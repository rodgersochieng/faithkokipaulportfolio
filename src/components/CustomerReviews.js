import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CustomerReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="w-full bg-[#9b4819] py-9">
      <div className="container mx-auto text-white text-center">
        <h2 className="text-2xl font-semibold text-white mb-6 tracking-wide uppercase font-serif italic"> What Satisfied Clients Say</h2>
        
        <Slider {...settings}>
          
          <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium text-white mb-2">"Faith has been a tremendous help in organizing my calendar and scheduling meetings for Amin Logistics LLC. She handled everything with precision and made sure no detail was overlooked. Her proactive approach, professionalism, and ability to adapt to last-minute changes truly made my busy days stress-free. With Faith managing my schedule, I had more time to focus on growing the business. I can confidently say she’s one of the most reliable and efficient virtual assistants I’ve worked with!."</p>
            <div className="text-sm text-white"> — Patrick, Amin Logistics LLC, Ohio, USA.</div>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium text-white mb-2">"Faith was a lifesaver when I was swamped with research for my paper! Her ability to find credible sources and organize the information so clearly was exactly what I needed. She didn’t just provide data,she truly understood the topic and delivered insights that made my work so much stronger. Beyond her skills, Faith was kind, professional, and always ahead of deadlines. It felt like having a partner who cared as much about the project as I did. Highly recommend."</p>
            <div className="text-sm text-white"> — Michael- Resource Protection LTD / M-Gas </div>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          <div className="bg-[#9b4819] p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium text-white mb-2">"Faith’s exceptional support in online research, data entry, and email management was instrumental to our operations at Global Scholars Academy. She quickly grasped our needs and delivered accurate and organized results, saving us hours of effort. Her efficiency and attention to detail ensured seamless communication with stakeholders, and her proactive approach made collaboration effortless. Faith's work ethic is unmatched, and she consistently exceeded our expectations. I highly recommend her for anyone seeking a dependable and skilled virtual assistant!"</p>
            <div className="text-sm text-white"> — Sebastian, Global Scholars Academy.</div>
            <div className="text-yellow-500">★★★★★</div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default CustomerReviews;