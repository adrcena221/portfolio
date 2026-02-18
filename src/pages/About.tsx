import '../index.css'
import profile from "../assets/about.jpg";
import { AboutDetails } from '../components/AboutDetails';

export const About = () => {
    return (
        <section className="flex flex-col w-screen items-center pt-14 sm:pt-16 md:pt-20 text-white px-4 sm:px-6 lg:px-0">
            
            <div className='flex flex-col lg:flex-row items-start justify-between w-auto mx-auto gap-10 sm:gap-12 md:gap-20 lg:gap-40 xl:gap-60'>
                
                {/* Left side */}
                <div className="flex flex-col justify-center items-center w-full lg:w-1/2 md:min-h-125 lg:min-h-160">

                    {/* Image + Spinning Border */}
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-80 md:h-80 xl:w-80 xl:h-80 flex items-center justify-center">

                        {/* Spinning Border */}
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-400 animate-[spin_20s_linear_infinite]" />

                        {/* Image */}
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src={profile}
                                alt="Adrian Miguel R. Cena"
                                className="w-full h-full object-cover object-[center_20%] rounded-full"
                            />
                        </div>

                    </div>

                    <p className="mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl text-blue-300 font-medium text-center">
                        Adrian Miguel R. Cena
                    </p>
                </div>

                {/* Right side */}
                <div className="flex flex-col sm:space-y-2 md:space-y-4 lg:space-y-6 w-full md:w-lg lg:w-xl xl:w-3xl items-center text-center lg:text-left">
                    <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-7xl font-bold mb-6 md:mb-15 lg:mb-18 xl:mb-20 text-center'>
                        About Me
                    </h1>

                    <AboutDetails 
                        emoji="👨‍💻" 
                        details="I'm a software and a full stack web developer that aims to develop meaningful and practical software and web experiences." 
                    />
                    <AboutDetails 
                        emoji="🎓" 
                        details="Graduated with a Bachelor of Science in Computer Engineering from the University of San Carlos in February 2026." 
                    />
                    <AboutDetails 
                        emoji="💡" 
                        details="I have developed production level projects from full-stack development to cloud-based solutions made to increase efficacy in operations and create an impact." 
                    />
                    <AboutDetails 
                        emoji="🚀" 
                        details="I am interested in optimizing systems, automating tasks, and creating meaningful projects. I am an open-book and always strive to learn more." 
                    />

                </div>
            </div>
        </section>
    );
};
