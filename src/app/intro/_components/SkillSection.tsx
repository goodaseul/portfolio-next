import { SkillItem } from "@/lib/types/models";
import IntroTitle from "./IntroTitle";

export default function SkillSection({ items }: { items: SkillItem[] }) {
  return (
    <div className="my-10">
      <IntroTitle>Skills</IntroTitle>
      <div
        className="flex flex-wrap
       border-b border-point/20 p-4 gap-4
       "
      >
        {items.map((item) => (
          <span
            key={item.id}
            className="px-3 py-1 text-md bg-point rounded font-bold"
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}
