import React from "react";
import linkedin from '../avatar/linkedin.png'
import ALX from '../avatar/ALX.png' 
import coursera from '../avatar/Courseralogo1.svg.png'
import mmu from '../avatar/MMU.png'


const certificates = [   
      {
        institution: 'ALX Africa',
        title: 'Virtual Assistant',
        description: "I’m a graduate of the ALX Africa Virtual Assistant Program, and let’s just say if you need someone to keep your life organized without losing their mind in the process, I’m your person. I’ve got the skills to keep your inbox from overflowing, your calendar from becoming a hot mess, and your appointments running like clockwork. Honestly, I might be the superhero of administrative support... without the cape (though I do have a killer sense of timing).",
        skills: ['Email Management & Correspondence','Calendar & Appointment Management','Customer Support & Client Relations','Social Media Management','Data Entry & Record Keeping','Document Preparation & Editing','Project Coordination','Online Research & Information Gathering','Multitasking & Time Management','Problem Solving & Adaptability'],
        image: ALX
      },   
      {
        institution: 'ALX Africa',
        title: 'AI Career Essentials (AiCE)',
        description: <p>Let’s face it AI is no longer just the cool thing in sci-fi movies; it’s a game-changer in the real world, and I’m here for it. I’m a graduate of the AiCE program by ALX, where I spent six weeks mastering the art of turning AI into my personal career sidekick. <br></br>

        The program wasn’t just about learning the tech though I can now make ChatGPT do more tricks than a circus performer. It also sharpened my leadership, communication, and entrepreneurial chops. Basically, I’m the Swiss Army knife of young professionals, armed with AI smarts and a knack for turning chaos into well-oiled efficiency.
        
        Whether it's navigating complex tools, crafting innovative solutions, or just making your work life feel less like a stressful juggling act, I’ve got you covered. Think of me as the fusion of a tech wizard and a business strategist, minus the wizard hat (though I’m not ruling it out).
        
        </p>,
        skills: ['Harnessing AI to supercharge workflows and productivity',"Communication that’s clearer than your morning coffee",'Leadership with a side of innovation',"Online research that goes beyond Googling 'how to…'",'Problem-solving','Turning challenges into creative opportunities',"Career growth hacks",],
        image: ALX
      }, 
      {
        institution: 'Linkedin Learning',
        title: 'Soft Skills & Professional Development Training',
        description: <p> Through LinkedIn Learning’s Soft Skills & Professional Development courses, I’ve gained a deeper understanding of the essential skills that make professionals thrive. These courses helped me fine-tune my communication, leadership, and interpersonal abilities, preparing me to work efficiently in any team or environment. <br></br>
        From enhancing my emotional intelligence to navigating difficult conversations, I’ve learned how to balance professionalism with empathy, which is key to building strong working relationships and leading by example. The training focused not only on soft skills but also on practical strategies for career advancement, equipping me with tools to continuously improve and adapt in today’s fast-paced world.
        </p>,
        skills: ['Effective communication and active listening','Leadership and team collaboration','Time management and prioritization','Emotional intelligence and self-awareness','Conflict resolution and negotiation','Adaptability and flexibility in dynamic environments','Networking and relationship building','Presentation and public speaking'],
        image: linkedin
      },
  {
    institution: 'Coursera',
    title: 'Project Management Essentials',
    description: <p> Managing projects isn’t just about schedules and spreadsheets; it’s about understanding people, staying organized, and keeping things moving even when challenges arise.  <br></br>  Through Coursera’s Project Management program, I’ve gained the knowledge and tools to guide projects from start to finish with confidence and clarity.

    This course taught me how to break down complex tasks, create realistic plans, and ensure everyone is working toward the same goal. Now, I’m equipped to manage timelines, communicate effectively, and handle any curveballs that might come up.
    
    Whether it’s organizing resources, coordinating teams, or making sure we stick to the plan, I’m ready to help deliver successful outcomes.

    </p>,
    skills: ['Project planning and organization', 'Empathy', 'Time and deadline management', 'Effective communication and collaboration', 'Resource allocation and task prioritization', 'Risk identification and problem-solving', 'Stakeholder coordination and relationship management', 'Team leadership and motivation', 'Agile, Scrum and flexible project management approaches', 'Adaptability'],
    image: coursera 
  },
  {
    institution: 'Masinde Muliro University of Science and Technology',
    title: 'Bachelor of Science in Criminology',
    description: <p>Graduating from Masinde Muliro University of Science and Technology wasn’t just about earning a degree it was about understanding the complexities of society, justice, and human behavior. My studies gave me a deeper appreciation for the systems that maintain order and the challenges of navigating them. <br></br>

    From analyzing criminal behavior to exploring the ethics of justice, I’ve developed critical thinking and problem-solving skills that help me see the bigger picture. Whether it’s examining patterns, working with diverse perspectives, or finding solutions to tough situations, I’m ready to contribute meaningfully in any space where logic and empathy are needed.</p>,
    skills: ['Problem-solving in complex scenarios', 'Empathy', 'Critical thinking and analysis', 'Understanding legal and justice systems','Communication and interpersonal skills', 'Research and data interpretation', 'Conflict resolution', 'Ethical decision-making', 'Attention to detail in investigations','Ability to analyze and assess risks'],
    image: mmu 
  },
  
];

function Certificates() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-4">What I have Learned So Far</h2>
      <div className="space-y-8">
        {certificates.map((cert, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center p-4">
            <img src={cert.image} alt={`${cert.institution} logo`} className="w-35 h-35 md:mr-4 mb-4 md:mb-0"/>
            <div className="text-left">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="mt-2">{cert.description}</p>
              <p className="mt-2 font-bold">Issued by {cert.institution}</p>
              <div className="mt-2">
                <p className="font-semibold">Skills:</p>
                <div className="flex flex-wrap">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-200 text-black rounded-full px-3 py-1 m-1 text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
