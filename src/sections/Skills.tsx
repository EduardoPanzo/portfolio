import Image from "next/image";
import { Skill } from "../components/Skill";
import { skillsItems } from "../mock";

export function Skills() {
  return (
    <div className="px-4 mb-2">
      <h2 className="uppercase font-bold text-3xl mb-2">Skill </h2>
      <div className="my-10">
        <div className="flex overflow-auto justify-center sm:mx-0">
          <ul className="flex-none inline-grid grid-cols-2 gap-2 px-4 sm:px-0 xl:gap-4  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3">
            {skillsItems.map((item) => (
              <Skill
                key={item.name}
                value={item.name}
                children={
                  <Image width={60} height={60} src={item.path} alt="" />
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}