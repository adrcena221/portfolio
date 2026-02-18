import { IconHover } from "../components/IconHover";
import c from "../assets/c.png";
import cplus from "../assets/cplus.png";
import css from "../assets/css.png";
import django from "../assets/django.svg"
import expressjs from "../assets/Express.png"
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import tailwindcss from "../assets/tailwindcss.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import azure from "../assets/azure.png";
import googlecloud from "../assets/google cloud.png";
import mongodb from "../assets/mongodb.png";

import "../index.css";

export const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-white">
      <h1 className="lg:text-7xl md:text-4xl sm:text-5xl font-bold mb-20">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-22 text-center items-start justify-center">
        {/* Frontend */}
        <div>
          <h2 className="mb-4 font-semibold md:text-lg lg:text-2xl">Frontend Development</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            <IconHover src={html} alt="html" url="https://developer.mozilla.org/en-US/docs/Web/HTML" size={55} />
            <IconHover src={css} alt="css" url="https://developer.mozilla.org/en-US/docs/Web/CSS" size={55} />
            <IconHover src={tailwindcss} alt="tailwindcss" url="https://tailwindcss.com/" size={55} />
            <IconHover src={js} alt="js" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" size={55} />
            <IconHover src={typescript} alt="typescript" url="https://www.typescriptlang.org/" size={55} />
            <IconHover src={react} alt="react" url="https://react.dev/" size={55} />
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="mb-4 font-semibold md:text-lg lg:text-2xl">Backend Development</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            <IconHover src={firebase} alt="firebase" url="https://firebase.google.com/" size={55} />
            <IconHover src={django} alt="django" url="https://www.djangoproject.com/" size={55} />
            <IconHover src={nodejs} alt="nodejs" url="https://nodejs.org/docs/latest/api/" size={55} />
            <IconHover src={mongodb} alt="mondodb" url="https://www.mongodb.com/" size={55} />
            <IconHover src={expressjs} alt="expressjs" url="https://expressjs.com/" size={55} />
            <IconHover src={php} alt="php" url="https://www.php.net/docs.php" size={55} />
          </div>
        </div>

        {/* Software Dev */}
        <div>
          <h2 className="mb-4 font-semibold md:text-lg lg:text-2xl">Software Development</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            <IconHover src={c} alt="c" url="https://devdocs.io/c/" size={55} />
            <IconHover src={cplus} alt="cplus" url="https://devdocs.io/cpp/" size={55} />
            <IconHover src={python} alt="python" url="https://www.python.org/doc/" size={55} />
            <IconHover src={java} alt="java" url="https://docs.oracle.com/en/java/" size={55} />
          </div>
        </div>

        {/* Cloud */}
        <div>
          <h2 className="mb-4 font-semibold md:text-lg lg:text-2xl">Cloud Services</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            <IconHover src={azure} alt="azure" url="https://azure.microsoft.com/en-us/" size={55} />
            <IconHover src={googlecloud} alt="googlecloud" url="https://cloud.google.com/" size={55} />
          </div>
        </div>
      </div>

      {/* Others */}
      <div className="mt-8 text-center">
        <h2 className="mb-4 font-semibold md:text-lg lg:text-2xl">Others</h2>
        <div className="flex justify-center gap-6 sm:gap-8 lg:gap-10">
          <IconHover src={figma} alt="figma" url="https://www.figma.com/" size={55} />
          <IconHover src={git} alt="git" url="https://git-scm.com/docs" size={55} />
        </div>
      </div>
    </section>
  );
};
