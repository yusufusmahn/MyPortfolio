"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navLists: NavItem[] = [
  { label: "About Me", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Navbar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm uppercase tracking-wide text-grey">
        {navLists.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onLinkClick} 
                className={`block transition-colors duration-300 ${
                  isActive
                    ? "text-secondary font-semibold"
                    : "hover:text-secondary/90"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
