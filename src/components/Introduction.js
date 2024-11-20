
import React from "react";
import avatar from '../avatar/picture.png';
// import { FaRobot, FaBrain, FaGithub } from "react-icons/fa"; 

function Introduction() {
  return (
    <section className="my-8 flex flex-col lg:flex-row items-center lg:justify-between">
      {/* Text Section */}
      <div className="flex flex-col items-start lg:w-2/3 mb-4 lg:mb-0">
        <h2 className="text-4xl font-bold mb-4 text-white">Hi there! 👋🏾 How's it going?</h2>
        <p className="text-lg mb-6 text-white">
          Hi, I'm Faith Koki! I’m thrilled to showcase the skills, experience, and passion I bring to the table.
          My goal? To create solutions that not only work but truly make an impact. Let’s dive in!
        </p>
        
        <h4 className="text-2xl font-bold mb-3 text-white">Who I Am & What I Do</h4> 
        <p className="text-md text-white mb-6">
          Ever wondered how criminology fits into business? Think of me as your secret weapon for spotting risks, understanding people,
          and turning complexity into opportunity. I might not be solving crimes anymore, but I still bring the same sharp eye for detail 
          and strategic thinking to the table, whether it’s mitigating risks, improving workflows, or ensuring your business stays ahead 
          of the curve. Add a dash of AI and soft skills training, and you’ve got someone who can navigate challenges, streamline operations, 
          and keep things running like a well-oiled machine. Got a tricky problem or an ambitious goal? Let’s figure it out together—minus the drama 
          but with all the results. 😊
        </p>
        
      </div>
    
      {/* Avatar Section on the Right */}
      <div className="flex justify-center lg:justify-end lg:w-1/3">
        <img 
          src={avatar} 
          alt="Avatar" 
          className="w-40 h-40 rounded-full object-cover lg:ml-6 lg:mt-0 mt-4"
        />
      </div>
    </section>
  );
}

export default Introduction;



