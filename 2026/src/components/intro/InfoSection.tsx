import { InfoItem } from "@/lib/types/models";

export default function InfoSection({ items }: { items: InfoItem[] }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Info</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="border border-point/50 rounded p-4">
            <p>{item.title}</p>
            <p>{item.info}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
