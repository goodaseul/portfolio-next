import { InfoItem } from "@/lib/types/models";
import IntroTitle from "./IntroTitle";

export default function InfoSection({ items }: { items: InfoItem[] }) {
  return (
    <div className="mb-10">
      <IntroTitle>Info</IntroTitle>
      <ul className="space-y-2 text-lg">
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
