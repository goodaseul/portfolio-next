import { InfoItem } from "@/lib/types/models";

export default function InfoSection({ items }: { items: InfoItem[] }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Info</h2>
      <ul className="space-y-2">
        {items.map((item) => {
          const isUrl = item.info.startsWith("https://");
          const isEmail = item.info.includes("@");
          const href = isUrl
            ? item.info
            : isEmail
              ? `mailto:${item.info}`
              : `tel:${item.info}`;
          const target = isUrl ? "_blank" : undefined;

          return (
            <li
              key={item.id}
              className="border-b border-point/20 p-4 flex gap-4"
            >
              <p className="w-full sm:w-1/2 xl:w-[25%]">{item.title}</p>
              <a
                href={href}
                target={target}
                className="underline break-all block w-full sm:w-1/2 xl:w-[75%]"
              >
                {item.info}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
