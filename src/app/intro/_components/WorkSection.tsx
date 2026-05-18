import { WorkItem } from "@/lib/types/models";
import IntroTitle from "./IntroTitle";

export default function WorkSection({ items }: { items: WorkItem[] }) {
  return (
    <div className="my-10">
      <IntroTitle>Work</IntroTitle>
      <ul className="space-y-4 text-lg">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-b border-point/20 p-4 grid grid-cols-2 xl:grid-cols-4 gap-4"
          >
            <p>{item.title}</p>
            <p>{item.date}</p>
            <p>{item.located}</p>
            <p className="whitespace-pre-line break-keep">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
