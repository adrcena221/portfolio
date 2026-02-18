import { useState } from "react";
import { workData } from "../components/WorkData";
import { WorkList } from "../components/WorkList";
import { WorkDetails } from "../components/WorkDetails";

export const Work = () => {
  const [selectedId, setSelectedId] = useState(workData[0].id);

  return (
    <section
      id="work"
      className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-0 py-16 sm:py-20"
    >
      <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-10 sm:mb-14 lg:mb-20 text-center">
        Work Experience
      </h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 sm:gap-10">
        <WorkList selectedId={selectedId} onSelect={setSelectedId} />
        <WorkDetails selectedId={selectedId} />
      </div>
    </section>
  );
};
