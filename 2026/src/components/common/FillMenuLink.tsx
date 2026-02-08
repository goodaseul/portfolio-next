import Link from "next/link";

interface FillTextLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
  className?: string;
}

export function FillTextLink({
  href,
  text,
  isActive = false,
  className = "",
}: FillTextLinkProps) {
  return (
    <Link
      href={href}
      data-text={text}
      className={`
        relative text-transparent mx-4
        [-webkit-text-stroke:1px_var(--point)]
        after:content-[attr(data-text)]
        after:absolute after:top-0 after:left-0
        after:whitespace-nowrap after:overflow-hidden
        after:w-0 after:text-point
        after:transition-[width] after:duration-400 after:ease-in-out
        after:z-1
        hover:after:w-full
        text-2xl
        ${isActive ? "font-extrabold italic after:italic after:w-full" : "font-medium"}`}
    >
      {text}
    </Link>
  );
}
