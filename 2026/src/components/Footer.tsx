import { NotionMenuItem } from "@/lib/types";
import Menus from "./common/Menus";

export default function Footer({ menus }: { menus: NotionMenuItem[] }) {
  return (
    <footer>
      <div className="p-6 md:p-10">
        <Menus menus={menus} />
      </div>

      <p className="bg-point text-white p-1 text-center text-xs font-medium">
        ©2026 Jeong Daseul. All rights reserved.
      </p>
    </footer>
  );
}
