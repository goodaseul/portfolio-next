import { CertificationItem } from "@/lib/types/models";
import IntroTitle from "./IntroTitle";

export default function CertificationSection({
  items,
}: {
  items: CertificationItem[];
}) {
  return (
    <div className="my-10">
      <IntroTitle>Certification</IntroTitle>
      <ul className="space-y-2 text-lg">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-b border-point/20 p-4 grid grid-cols-2 xl:grid-cols-4 gap-4"
          >
            <p>{item.title}</p>
            <p>{item.date}</p>
            <p>{item.description}</p>
            <p>{item.located}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
