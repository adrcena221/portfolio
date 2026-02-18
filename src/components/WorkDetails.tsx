import React from "react";
import "../index.css";
import { workData } from "./WorkData";

interface WorkDetailsProps {
  selectedId: number;
}

export const WorkDetails: React.FC<WorkDetailsProps> = ({ selectedId }) => {
  const exp = workData.find((item) => item.id === selectedId);

  if (!exp) return null;

  return (
    <div
      className="w-full lg:w-2/2 bg-slate-900 border border-gray-600 rounded-3xl p-5 sm:p-6 md:p-8 transition-all fade-up"
      key={selectedId}
    >
      <h3 className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
        {exp.position}
      </h3>

      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
        {exp.date}
      </p>

      <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-200 font-mono text-sm sm:text-base lg:text-lg leading-relaxed">
        {exp.details.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </div>
  );
};
