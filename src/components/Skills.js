
import React from "react";
import { FaTrello, FaSlack, FaDropbox, FaGoogleDrive, FaMicrophone } from "react-icons/fa"; // Using FaMicrophone as a substitute
import { SiGoogle,SiGrammarly,SiNotion, SiOpenai,SiGooglemeet, SiGmail, SiGoogledocs, SiGooglesheets, SiGoogleforms, SiGoogleads, SiCanva, SiMicrosoftonenote, SiMicrosoftoutlook, SiMicrosoftteams, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiMicrosoft, SiGooglecalendar, SiGoogleslides, SiZoom, SiHootsuite, SiAsana, SiZapier, SiLastpass, SiClickup, SiToggltrack } from "react-icons/si";
import { MdOutlineCalendarToday } from "react-icons/md";  // Importing calendar icon

function Skills() {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-bold mb-4">What I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Google */}
        <div className="flex flex-col items-center">
          <SiGoogle className="text-5xl" />
          <span className="mt-2">Google Workspace</span>
        </div>
        {/* Calendly */}
        <div className="flex flex-col items-center">
          <MdOutlineCalendarToday className="text-5xl" />
          <span className="mt-2">Calendly</span>
        </div>
        {/* Trello */}
        <div className="flex flex-col items-center">
          <FaTrello className="text-5xl" />
          <span className="mt-2">Trello</span>
        </div>
        {/* Google Meet */}
        <div className="flex flex-col items-center">
          <SiGooglemeet className="text-5xl" />
          <span className="mt-2">Google Meet</span>
        </div>
        {/* Gmail */}
        <div className="flex flex-col items-center">
          <SiGmail className="text-5xl" />
          <span className="mt-2">Gmail</span>
        </div>
        {/* Google Docs */}
        <div className="flex flex-col items-center">
          <SiGoogledocs className="text-5xl" />
          <span className="mt-2">Google Docs</span>
        </div>
        {/* Google Sheets */}
        <div className="flex flex-col items-center">
          <SiGooglesheets className="text-5xl" />
          <span className="mt-2">Google Sheets</span>
        </div>
        {/* Google Forms */}
        <div className="flex flex-col items-center">
          <SiGoogleforms className="text-5xl" />
          <span className="mt-2">Google Forms</span>
        </div>
        {/* Google Ads */}
        <div className="flex flex-col items-center">
          <SiGoogleads className="text-5xl" />
          <span className="mt-2">Google Ads</span>
        </div>
        {/* Canva */}
        <div className="flex flex-col items-center">
          <SiCanva className="text-5xl" />
          <span className="mt-2">Canva</span>
        </div>
        {/* OneNote */}
        <div className="flex flex-col items-center">
          <SiMicrosoftonenote className="text-5xl" />
          <span className="mt-2">OneNote</span>
        </div>
        {/* Outlook */}
        <div className="flex flex-col items-center">
          <SiMicrosoftoutlook className="text-5xl" />
          <span className="mt-2">Outlook</span>
        </div>
        {/* Teams */}
        <div className="flex flex-col items-center">
          <SiMicrosoftteams className="text-5xl" />
          <span className="mt-2">Teams</span>
        </div>
        {/* Word */}
        <div className="flex flex-col items-center">
          <SiMicrosoftword className="text-5xl" />
          <span className="mt-2">Word</span>
        </div>
        {/* Excel */}
        <div className="flex flex-col items-center">
          <SiMicrosoftexcel className="text-5xl" />
          <span className="mt-2">Excel</span>
        </div>
        {/* PowerPoint */}
        <div className="flex flex-col items-center">
          <SiMicrosoftpowerpoint className="text-5xl" />
          <span className="mt-2">PowerPoint</span>
        </div>
        {/* Microsoft */}
        <div className="flex flex-col items-center">
          <SiMicrosoft className="text-5xl" />
          <span className="mt-2">Microsoft</span>
        </div>
        {/* Google Calendar */}
        <div className="flex flex-col items-center">
          <SiGooglecalendar className="text-5xl" />
          <span className="mt-2">Google Calendar</span>
        </div>
        {/* Google Slides */}
        <div className="flex flex-col items-center">
          <SiGoogleslides className="text-5xl" />
          <span className="mt-2">Google Slides</span>
        </div>       
        {/* ChatGPT */}
        <div className="flex flex-col items-center">
          <SiOpenai className="text-5xl" />
          <span className="mt-2">ChatGPT</span>
        </div>       
        {/* Slack */}
        <div className="flex flex-col items-center">
          <FaSlack className="text-5xl" />
          <span className="mt-2">Slack</span>
        </div>       
        {/* Zoom */}
        <div className="flex flex-col items-center">
          <SiZoom className="text-5xl" />
          <span className="mt-2">Zoom</span>
        </div>
        {/* Hootsuite */}
        <div className="flex flex-col items-center">
          <SiHootsuite className="text-5xl" />
          <span className="mt-2">Hootsuite</span>
        </div>
        {/* LastPass */}
        <div className="flex flex-col items-center">
          <SiLastpass className="text-5xl" />
          <span className="mt-2">LastPass</span>
        </div>
        {/* Dropbox */}
        <div className="flex flex-col items-center">
          <FaDropbox className="text-5xl" />
          <span className="mt-2">Dropbox</span>
        </div>
        {/* Google Drive */}
        <div className="flex flex-col items-center">
          <FaGoogleDrive className="text-5xl" />
          <span className="mt-2">Google Drive</span>
        </div>
        {/* Asana */}
        <div className="flex flex-col items-center">
          <SiAsana className="text-5xl" />
          <span className="mt-2">Asana</span>
        </div>
        {/* Zapier */}
        <div className="flex flex-col items-center">
          <SiZapier className="text-5xl" />
          <span className="mt-2">Zapier</span>
        </div>
        {/* Otter.ai */}
        <div className="flex flex-col items-center">
          <FaMicrophone className="text-5xl" />
          <span className="mt-2">Otter.ai</span>
        </div>
        {/* ClickUp */}
        <div className="flex flex-col items-center">
          <SiClickup className="text-5xl" />
          <span className="mt-2">ClickUp</span>
        </div>
        {/* Toggl Track */}
        <div className="flex flex-col items-center">
          <SiToggltrack className="text-5xl" />
          <span className="mt-2">Toggl Track</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNotion className="text-5xl"/>
          <span className="mt-2 text-white">Notion</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGrammarly className="text-5xl"  />
          <span className="mt-2 text-white">Grammarly</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
