interface AboutDetailsProps {
    emoji: string;
    details: string;
  }
  
  export const AboutDetails: React.FC<AboutDetailsProps> = ({ emoji, details }) => {

    return (
      <div className="p-5 rounded-2xl w-full flex items-start justify-start lg:gap-5 xl:gap-10">
        <h3 className="md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white">{emoji}</h3>
        <p className="text-white md:text-sm lg:text-md xl:text-lg leading-relaxed">
          {details}
        </p>
      </div>
    );
  };
  