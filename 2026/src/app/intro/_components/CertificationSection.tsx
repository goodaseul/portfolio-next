import { CertificationItem } from "@/lib/types/models";

export default function CertificationSection({
  items,
}: {
  items: CertificationItem[];
}) {
  return (
    <div>
      <h2 className="text-xl font-bold my-4">Certification</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-b border-point/20 p-4 grid grid-cols-2 xl:grid-cols-4 gap-4"
          >
            <p>{item.title}</p>
            <p className="text-sm opacity-70">{item.date}</p>
            <p>{item.description}</p>
            <p>{item.located}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
