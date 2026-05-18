import { EducationItem } from "@/lib/types/models";
import IntroTitle from "./IntroTitle";

export default function EducationSection({
  items,
}: {
  items: EducationItem[];
}) {
  return (
    <div className="my-10">
      <IntroTitle>Education</IntroTitle>
      <ul className="space-y-4 text-lg">
        {items.map((item) => (
          <li key={item.id} className="border-b border-point/20 p-4 flex gap-4">
            <div className="w-full sm:w-1/2 xl:w-[25%]">
              <p>{item.title}</p>
              <p className="text-sm opacity-70">{item.date}</p>
            </div>
            <p className="w-full sm:w-1/2 xl:w-[75%] whitespace-pre-line break-keep">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
