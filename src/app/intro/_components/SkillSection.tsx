import { SkillItem } from "@/lib/types/models";

export default function SkillSection({ items }: { items: SkillItem[] }) {
  return (
    <div>
      <h2 className="text-xl font-bold my-4">Skills</h2>
      <div
        className="flex flex-wrap
       border-b border-point/20 p-4 gap-4
      "
      >
        {items.map((item) => (
          <span
            key={item.id}
            className="px-3 py-1 text-sm border border-point/50 rounded"
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}
