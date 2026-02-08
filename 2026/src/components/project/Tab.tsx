// components/project/Tab.tsx
import Link from "next/link";

type TabItem = {
  label: string;
  value: string;
  href: string;
};

const TABS: TabItem[] = [
  { label: "ALL", value: "all", href: "/" },
  { label: "개인", value: "personal", href: "/?way=personal" },
  { label: "협업", value: "team", href: "/?way=team" },
];

export default function Tab({ current }: { current: string }) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {TABS.map((tab) => (
        <li
          key={tab.value}
          className={`py-2
            border border-point rounded
            hover:bg-point transition-all
               ${current === tab.value ? "bg-point font-medium" : ""}`}
        >
          <Link className="w-full h-full block text-center" href={tab.href}>
            {tab.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
