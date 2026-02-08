import { MenuItem } from "@/lib/types/models";
import Menus from "./common/Menus";
import Link from "next/link";

export default function Header({ menus }: { menus: MenuItem[] }) {
  return (
    <header className="sticky left-0 top-0 bg-background">
      <div className="p-6 md:p-10 flex items-center justify-between">
        <h1>
          <Link href="/" className="font-bold text-md flex items-end">
            <span className="mr-1 bg-point rounded w-10 h-10 flex items-center justify-center text-2xl">
              J
            </span>
            Daseul
          </Link>
        </h1>
        <Menus menus={menus} />
      </div>
    </header>
  );
}
