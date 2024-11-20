import React, { useState } from "react";
// import avatar from '../avatar/avatar2.png';

function AboutAndContact() {
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the email sending logic here, e.g., using an email API service like EmailJS
    setNotification('This is my safe space haha. I can’t allow roasting 😂😂.');
    setTimeout(() => {
      setNotification('');
    }, 5000);

    // Reset the form
    e.target.reset();
  };

  return (
    <section className="my-8 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="text-left max-w-prose mx-auto mb-12">
          <p className="mb-4">
          With a background in both technology and business, I have gained extensive experience across various sectors, helping organizations optimize their operations and achieve measurable results. I have a strong foundation in project management, security, customer relations, and technical sales, allowing me to adapt quickly to new challenges and contribute meaningfully to team success.
          </p>
          <p className="mb-4">
          Through my role at CHET Holdings and Corporate Solutions, I developed skills in surveillance, behavioral analysis, and risk management, driving improvements in security and compliance across multiple projects. I also helped reduce theft incidents by 30% and increase fraud resolution rates by 40%, proving my ability to handle complex situations under pressure.
          </p>
          <p className="mb-4">
          My time at M-Gas as a Technical Sales Representative refined my ability to manage customer relationships, ensuring high satisfaction and repeat business while addressing customer concerns with efficiency and empathy. I’ve also had the opportunity to work with various tech solutions like React and AI tools, allowing me to develop a keen understanding of how technology can enhance business performance.
          </p>
          <p className="mb-4">
          Having completed programs in Virtual Assistance and Project Management, I’ve also honed my soft skills, including leadership, communication, and multitasking, which enable me to work effectively in fast-paced, team-oriented environments. These experiences have shaped me into a well-rounded professional, eager to bring my skills and expertise to any new project or challenge.
          </p>         
        </div>
      </div>

      {/* <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">You wanna roast me ?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img src={avatar} alt="Avatar" className="w-49 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"/>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" required/>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here..." rows="4" required></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg--500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Roast Me
              </button>
            </div>
          </form>
        </div>
        {notification && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white py-2 px-4 rounded shadow-lg transition-opacity duration-300 ease-in-out">
            {notification}
          </div>
        )}
      </div> */}
    </section>
  );
}

export default AboutAndContact;
