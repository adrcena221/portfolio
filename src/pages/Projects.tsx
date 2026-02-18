import { ProjectCarousel } from "../components/ProjectCarousel";
import portfolio from "../assets/portfolio/portfolioimg.png";
import about from "../assets/portfolio/portfolioabout.png";
import project from "../assets/portfolio/portfolioprojects.png";
import skills from "../assets/portfolio/portfolioskills.png";
import contact from "../assets/portfolio/portfoliocontact.png";
import emailscraper from "../assets/email/emailscraper.png";
import sigin from "../assets/email/emailscrapersignin.png";
import intent from "../assets/email/emailscraperintent.png";
import action from "../assets/email/emailscraperactions.png";
import linktree from "../assets/linktree.png";
import playwright from "../assets/playwright.png";
import pisowifi from "../assets/pisowifi/pisowificonnect.jpg";
import pisowifiprotocol from "../assets/pisowifi/pisowifi.png";

const projects = [
  {
    title: "Portfolio",
    description: "An modern web portfolio made with React using Typescript and TailwindCSS",
    images: [portfolio, about, project, skills, contact],
  },
  {
    title: "AI Email Intent Detection and Scraper with Playwright Automation",
    description: "A web application for scraping email messages and detecting the intent of an email using Azure OpenAI and REST API's from cloud services. Specifically Microsoft Azure and Google Cloud Services.",
    images: [emailscraper, sigin, intent, action],
  },
  {
    title: "Automation using Playwright",
    description: "A python script using playwright to automate actions like filling forms, clicking buttons, or navigating a website.",
    images: [playwright],
  },
  {
    title: "Client-centered Application Layer Security Solution for Piso Wi-Fi System",
    description: "My undergraduate thesis project that aims to create a client-centered application layer security solution for the Piso Wi-Fi system.",
    images: [pisowifi, pisowifiprotocol],
  },
  {
    title: "Personal DIY Link Tree",
    description: "A Link Tree web application built with React using Typescript and TailwindCSS.",
    images: [linktree],
  },
];

export const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl sm:text-5xl md:text-4xl lg:text-7xl font-bold text-center text-white">
        Projects
      </h1>

      <div className="w-full max-w-screen relative">
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}
