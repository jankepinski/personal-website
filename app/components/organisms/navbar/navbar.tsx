"use client";
import { usePathname, useRouter } from "next/navigation";
import { SlideButton } from "../../atoms/slide-button/slide-button";

const Paths = [
  { path: "/", name: "Home" },
  { path: "/contact", name: "Contact" },
];

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between sticky py-4 top-0 bg-background z-50">
      <div className="flex items-center">
        <div
          className="w-8 h-8 bg-white rounded-full cursor-pointer"
          onClick={() => router.push("/")}
        ></div>
      </div>
      <div className="flex items-end gap-2">
        {Paths.map(({ path, name }) => (
          <SlideButton
            key={path}
            onClick={() => router.push(path)}
            permFocused={pathname === path}
          >
            {name}
          </SlideButton>
        ))}
      </div>
    </div>
  );
};
