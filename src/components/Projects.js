
// import React from "react";
// import chet from '../avatar/CHET.png';  
// import mgas from '../avatar/mgaslogo.jpeg';  
// import optica from '../avatar/Opticalogo.png';  
// import safaricom from '../avatar/topimagelogo.jpeg';  
// import prosecutions from '../avatar/dpplogo.jpg';  

// const experiences = [
//   {
//     title: 'Security and Compliance Officer',
//     company: 'CHET Holdings and Corporate Solutions',
//     date: '03/2024 - Present',
//     description: 'Conducted comprehensive surveillance and behavioral analysis across high-risk areas, successfully reducing theft incidents by 30% within the first six months through proactive risk identification and mitigation strategies. Led detailed interviews and interrogations of individuals involved in suspicious activities, contributing to a 40% increase in the successful resolution of fraud cases by gathering key evidence and collaborating with law enforcement when necessary. Played a key role in developing and implementing enhanced security policies and procedures, which led to a 25% improvement in compliance training effectiveness, increasing staff awareness and reducing procedural violations.',
//     responsibilities: ['Reduced theft incidents by 30%', 'Increased fraud case resolutions by 40%', 'Developed enhanced security policies', 'Improved compliance training effectiveness by 25%'],
//     image: chet
//   },
//   {
//     title: 'Technical Sales Representative',
//     company: 'M-Gas Limited',
//     date: '11/2023 - 02/2024',
//     description: 'Onboarded new clients for a gas product, managing customer complaints effectively and ensuring smooth service delivery for over 150 clients, achieving a 95% satisfaction rate in post-onboarding surveys through tailored support and responsiveness. Delivered timely product servicing and resolved customer issues while maintaining high satisfaction levels, resulting in a 30% reduction in complaint resolution time and a 20% increase in repeat business, showcasing a commitment to exceptional customer service.',
//     responsibilities: ['Onboarded over 150 clients', 'Achieved 95% satisfaction rate', 'Reduced complaint resolution time by 30%', 'Increased repeat business by 20%'],
//     image: mgas
//   },
//   {
//     title: 'Eye Wear Consultant',
//     company: 'Optica Limited',
//     date: '02/2022 - 10/2023',
//     description: 'Assisted an average of 30 customers daily in selecting eyewear, providing personalized recommendations that enhanced the customer experience and increased satisfaction. Ensured accurate reporting of sales and inventory by maintaining meticulous records, achieving a 99% accuracy rate in product records and stock levels, which streamlined operations and minimized discrepancies.',
//     responsibilities: ['Provided personalized eyewear recommendations', 'Maintained 99% accuracy in product records', 'Streamlined operations and minimized discrepancies'],
//     image: optica
//   },
//   {
//     title: 'Security and Compliance Officer',
//     company: 'CHET Holdings and Corporate Solutions',
//     date: '01/2021 - 01/2022',
//     description: 'Conducted comprehensive surveillance and intelligence gathering to ensure the security of company assets, resulting in a 40% reduction in security incidents over 12 months through targeted risk assessment and response strategies. Monitored and mitigated potential security threats, including fraud and theft, successfully preventing $50,000 in potential losses through proactive measures and enhancements to security policies, demonstrating a strong commitment to asset protection.',
//     responsibilities: ['Reduced security incidents by 40%', 'Prevented $50,000 in potential losses', 'Enhanced security policies'],
//     image: chet
//   },
//   {
//     title: 'Sales Agent',
//     company: 'Top Image Agency - Safaricom',
//     date: '09/2020 – 12/2020',
//     description: '',
//     responsibilities: [],
//     image: safaricom
//   },
//   {
//     title: 'Attache',
//     company: 'Office of the Director of Public Prosecutions',
//     date: '05/2018 – 08/2018',
//     description: '',
//     responsibilities: [],
//     image: prosecutions
//   }
// ];

// function WorkExperience() {
//   return (
//     <section className="text-center my-8">
//       <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
//       <div className="grid grid-cols-1 gap-8">
//         {experiences.map((experience, index) => (
//           <div key={index} className="bg-transparent border border-gray-700 rounded-lg overflow-hidden shadow-lg">
//             <div className="p-6 text-white flex flex-col md:flex-row items-start">
//               <img src={experience.image} alt={`${experience.company} logo`} className="w-24 h-24 object-contain mb-4 md:mr-6 md:mb-0" />
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
//                 <p className="text-gray-400 mb-1">{experience.company}</p>
//                 <p className="text-gray-400 mb-4">{experience.date}</p>
//                 <p className="text-gray-300 mb-4">{experience.description}</p>
//                 {experience.responsibilities.length > 0 && (
//                   <div className="mb-4">
//                     <h4 className="font-semibold">Responsibilities:</h4>
//                     <ul className="list-disc list-inside text-left">
//                       {experience.responsibilities.map((responsibility, i) => (
//                         <li key={i} className="text-gray-300">{responsibility}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default WorkExperience;


import React from "react";
import chet from '../avatar/CHET.png';  
import mgas from '../avatar/mgaslogo.jpeg';  
import optica from '../avatar/Opticalogo.png';  
import safaricom from '../avatar/topimagelogo.jpeg';  
import prosecutions from '../avatar/dpplogo.jpg';  

const experiences = [
  {
    title: 'Security and Compliance Officer',
    company: 'CHET Holdings and Corporate Solutions',
    date: '03/2024 - Present',
    description: 'Conducted comprehensive surveillance and behavioral analysis across high-risk areas, successfully reducing theft incidents by 30% within the first six months through proactive risk identification and mitigation strategies. Led detailed interviews and interrogations of individuals involved in suspicious activities, contributing to a 40% increase in the successful resolution of fraud cases by gathering key evidence and collaborating with law enforcement when necessary. Played a key role in developing and implementing enhanced security policies and procedures, which led to a 25% improvement in compliance training effectiveness, increasing staff awareness and reducing procedural violations.',
    responsibilities: ['Reduced theft incidents by 30%', 'Increased fraud case resolutions by 40%', 'Developed enhanced security policies', 'Improved compliance training effectiveness by 25%'],
    image: chet
  },
  {
    title: 'Technical Sales Representative',
    company: 'M-Gas Limited',
    date: '11/2023 - 02/2024',
    description: 'Onboarded new clients for a gas product, managing customer complaints effectively and ensuring smooth service delivery for over 150 clients, achieving a 95% satisfaction rate in post-onboarding surveys through tailored support and responsiveness. Delivered timely product servicing and resolved customer issues while maintaining high satisfaction levels, resulting in a 30% reduction in complaint resolution time and a 20% increase in repeat business, showcasing a commitment to exceptional customer service.',
    responsibilities: ['Onboarded over 150 clients', 'Achieved 95% satisfaction rate', 'Reduced complaint resolution time by 30%', 'Increased repeat business by 20%'],
    image: mgas
  },
  {
    title: 'Eye Wear Consultant',
    company: 'Optica Limited',
    date: '02/2022 - 10/2023',
    description: 'Assisted an average of 30 customers daily in selecting eyewear, providing personalized recommendations that enhanced the customer experience and increased satisfaction. Ensured accurate reporting of sales and inventory by maintaining meticulous records, achieving a 99% accuracy rate in product records and stock levels, which streamlined operations and minimized discrepancies.',
    responsibilities: ['Provided personalized eyewear recommendations', 'Maintained 99% accuracy in product records', 'Streamlined operations and minimized discrepancies'],
    image: optica
  },
  {
    title: 'Security and Compliance Officer',
    company: 'CHET Holdings and Corporate Solutions',
    date: '01/2021 - 01/2022',
    description: 'Conducted comprehensive surveillance and intelligence gathering to ensure the security of company assets, resulting in a 40% reduction in security incidents over 12 months through targeted risk assessment and response strategies. Monitored and mitigated potential security threats, including fraud and theft, successfully preventing $50,000 in potential losses through proactive measures and enhancements to security policies, demonstrating a strong commitment to asset protection.',
    responsibilities: ['Reduced security incidents by 40%', 'Prevented $50,000 in potential losses', 'Enhanced security policies'],
    image: chet
  },
  {
    title: 'Sales Agent',
    company: 'Top Image Agency - Safaricom',
    date: '09/2020 – 12/2020',
    description: 'I was responsible for driving sales, managing customer relationships, and providing tailored solutions to meet client needs.',
    responsibilities: [],
    image: safaricom
  },
  {
    title: 'Attache',
    company: 'Office of the Director of Public Prosecutions',
    date: '05/2018 – 08/2018',
    description: 'I gained valuable exposure to legal processes, assisting in various administrative tasks and providing support to the legal team during investigations.',
    responsibilities: [],
    image: prosecutions
  }
];

function WorkExperience() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-transparent border border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 text-white flex flex-col items-center">
              <img src={experience.image} alt={`${experience.company} logo`} className="w-24 h-24 object-contain mb-4" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-400 mb-1">{experience.company}</p>
                <p className="text-gray-400 mb-4">{experience.date}</p>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                {experience.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold">Acheivements:</h4>
                    <ul className="list-disc list-inside text-left">
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-gray-300">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
