import { Button } from "@/components/ui/button";

type SlideButtonProps = {
  onClick?: () => void;
  permFocused?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const SlideButton = ({
  onClick,
  permFocused,
  className,
  children,
}: SlideButtonProps) => {
  return (
    <Button
      className={`px-2 h-8 py-0 text-neutral-400 hover:text-neutral-200 rounded before:rounded bg-transparent relative z-1 hover:bg-inherit before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:z-[-1] before:bg-white before:opacity-25 before:scale-x-0 before:origin-right hover:before:origin-left hover:before:rounded hover:before:transform-none before:transition-transform before:duration-300 ${
        permFocused ? "before:transform-none text-neutral-200" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
