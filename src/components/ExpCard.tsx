import { useEffect, useState } from "react";

interface ExpCardProps {
    number: number | string;  // Since number can be string or number
    title: string;
    subtitle: string;
  }
  
  export const ExpCard: React.FC<ExpCardProps> = ({ number, title, subtitle }) => {
    const target = typeof number === "string" ? parseInt(number, 10) : number;
    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(0);

      const duration = 2000; // 2 seconds
      const startTime = performance.now();  
  
      const updateCount = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * target);
        setCount(currentCount);
  
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
  
      requestAnimationFrame(updateCount);
    }, [target]);

    
    return (
      <div className="p-6 rounded-2xl flex items-center justify-center sm:gap-2 md:gap-2 lg:gap-4 xl:gap-6">
        <h3 className="sm:text-7xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-white">{count}</h3>
        <p className="text-gray-400 sm:text-2xl md:text-lg lg:text-lg xl:text-xl leading-tight">
          {title} <br /> {subtitle}
        </p>
      </div>
    );
  };
  