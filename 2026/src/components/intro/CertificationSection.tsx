import { CertificationItem } from "@/lib/types/models";

export default function CertificationSection({
  items,
}: {
  items: CertificationItem[];
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Certification</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border border-point/50 rounded p-3"
          >
            <span>{item.title}</span>
            <span className="text-sm opacity-70">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
