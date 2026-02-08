"use client";
import { MenuItem } from "@/lib/types/models";
import { FillTextLink } from "./FillMenuLink";
import { usePathname } from "next/navigation";

export default function Menus({ menus }: { menus: MenuItem[] }) {
  const router = usePathname();

  return (
    <div>
      {menus.map((menu) => {
        const isActive = router === menu.slug;
        return (
          <FillTextLink
            key={menu.id}
            href={menu.slug}
            text={menu.name}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
}
