import { EducationItem } from "@/lib/types/models";

export default function EducationSection({
  items,
}: {
  items: EducationItem[];
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="border border-point/50 rounded p-4">
            <div className="flex justify-between">
              <strong>{item.title}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
