import React from "react";
import { FaLink } from "react-icons/fa";
import CustomCard from "@/components/ui/customCard";
import { ThemeProvider } from "@/components/theme-provider";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-8xl font-bold">I'm Mark, I build <FallingText text="things" /></h1>
        <p className="text-2xl font-semibold">Aspiring game and web developer</p>
        <div className="w-1/2">
        <p className="text-md">Computer Engineering student with a passion for coding, solving problems, and learning. Interested in game development, web development, and cybersecurity.</p>
        </div>

        <img className="w-1/4 absolute rounded-lg right-[80px] top-[180px] border-2 border-slate-800" src="assets/me.jpg" alt="" />

        <div className="flex flex-col">
        <p className="text-4xl py-4">About Me</p>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <p>Mark Daniel Soriano</p>
            <p>markysoriano2002@gmail.com</p>
            <p>0945 778 2801</p>
          </div>
          <div className="flex flex-row px-8">
            <div className="w-8 my-auto"><FaLink /></div>
            <div className="flex flex-col">
              <a className="links" href="https://www.facebook.com/mark.soriano.897595"><strong>Facebook</strong></a>
              <a className="links" href="https://www.linkedin.com/in/mark-soriano-96a564316/"><strong>LinkedIn</strong></a>
              <a className="links" href="https://github.com/marky0470"><strong>Github</strong></a>
            </div>
          </div>

        </div>
        </div>

        <div className="flex flex-col">
          <p className="text-4xl py-4">Projects</p>
          <div className="text-4xl pt-4 grid grid-cols-2 gap-x-8 gap-y-8 *:h-60">
            <CustomCard
              title="Guillermo"
              desc="Online Reservation System for Guillermo Private Resort"
              img="/assets/resort3.png"
              alt="System login page"
            />
            <CustomCard
              title="Cinema Management System"
              desc="Cinema Management System in Java Swing"
              img="/assets/cinema1.png"
              alt="CMS"
            />
            <CustomCard
              title="GozSun"
              desc="Website for solar smart technologies and energy solutions"
              img="/assets/gozsun.png"
              alt="GozSun landing page"
            />
            <CustomCard
              title="Prismatic"
              desc="2D game developed in 4 weeks for the Pirate Software Game Jam"
              img="/assets/prismatic.png"
              alt="Game main menu"
            />
            {/* <div className="card border-2 border-slate-600 rounded-md p-8 mt-4 flex flex-row">
              <img className="w-48 object-cover" src="/assets/ror.png"/>
              <span className="flex flex-col pl-8">
                <div className="text-3xl">Risk of Rain Modding</div>
                <hr className="mt-2 mb-2 border-slate-600"></hr>
                <p className="text-base">Adding content to Risk of Rain</p>
              </span>
            </div> */}
            
          </div>
        

        </div>
        <div className="flex flex-row space-x-20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-4xl pt-16 *:h-60">Skills
              <div className="mt-4 flex flex-col gap-4">
                <div className="text-2xl">Python</div>
                <div className="text-2xl">Java</div>
                <div className="text-2xl">JavaScript</div>
                <div className="text-2xl">GDScript</div>
                <div className="text-2xl">Git</div>
              </div>
            </div>
          </div>
            
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-4xl pt-16 *:h-60">Soft Skills
              <div className="mt-4 flex flex-col gap-4">
                <div className="text-2xl">Collaboration</div>
                <div className="text-2xl">Communication</div>
                <div className="text-2xl">Problem Solving</div>
                <div className="text-2xl">Critical Thinking</div>
                <div className="text-2xl">Adaptability</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-4xl pt-16 *:h-60">Tools
              <div className="mt-4 flex flex-col gap-4">
                <div className="text-2xl">Visual Studio Code</div>
                <div className="text-2xl">Godot</div>
              </div>
            </div>
          </div>

        </div>

        <a href="/resume.pdf" download="resume.pdf">
          <div className="text-4xl p-4 *:h-60 rounded-md bg-slate-50 text-slate-900">Portfolio</div>
        </a>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}


interface FallingTextProps {
  text: string;
}

const FallingText: React.FC<FallingTextProps> = ({ text }) => {
  return (
    <div className="falling-text-container">
      {text.split("").map((char, index) => {
        var x = Math.random();
        return <span
          key={index}
          className="falling-letter"
          style={{
            animationDelay: `${index * 0.2}s`,
            "deviaton": x,
          } as React.CSSProperties}
        >
          {char}
        </span>
      })}
    </div>
  );
};