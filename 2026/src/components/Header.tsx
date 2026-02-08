import { NotionMenuItem } from "@/lib/types";
import Menus from "./common/Menus";

export default function Header({ menus }: { menus: NotionMenuItem[] }) {
  return (
    <header>
      <div className="p-6 md:p-10 flex items-center justify-between">
        <h1 className="font-bold text-md flex items-end">
          <span className="mr-1 bg-point rounded w-10 h-10 flex items-center justify-center text-2xl">
            J
          </span>
          Daseul
        </h1>
        <Menus menus={menus} />
      </div>
    </header>
  );
}
