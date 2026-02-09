import { FillTextLink } from "../common/FillTextLink";

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
    <div className="flex gap-2">
      {TABS.map((tab) => (
        <FillTextLink
          key={tab.value}
          href={tab.href}
          text={tab.label}
          isActive={current === tab.value}
        />
      ))}
    </div>
  );
}

// <li
//       key={tab.value}
//       className={`py-2
//         border border-point rounded
//         hover:bg-point transition-all
//            `}
//     >
//       <Link className="w-full h-full block text-center" href={tab.href}>
//         {tab.label}
//       </Link>
//     </li>
