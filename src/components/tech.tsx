import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div 
            className="w-28 h-28 relative group" 
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                          bg-black bg-opacity-75 text-white px-2 py-1 rounded-md 
                          text-sm opacity-0 group-hover:opacity-100 transition-opacity 
                          duration-300 whitespace-nowrap">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
