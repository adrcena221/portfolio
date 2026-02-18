import React from "react";
import { workData } from "./WorkData";

interface WorkListProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export const WorkList: React.FC<WorkListProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2">
      {workData.map((exp) => (
        <div
          key={exp.id}
          onClick={() => onSelect(exp.id)}
          className={`flex items-center gap-3 sm:gap-4 cursor-pointer p-3 sm:p-4 rounded-2xl transition duration-300 ${
            selectedId === exp.id
              ? "bg-slate-900 border border-gray-600"
              : "hover:bg-slate-800/50"
          }`}
        >
          <img
            src={exp.img}
            alt={exp.position}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-blue-600 shrink-0"
          />

          <div className="min-w-0">
            <h3 className="font-mono text-base sm:text-lg lg:text-2xl leading-snug wrap-break-word">
              {exp.position}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg wrap-break-word">
              {exp.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
