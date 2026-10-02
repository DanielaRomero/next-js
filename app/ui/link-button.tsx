import clsx from "clsx";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function LinkButton({ children, className, ...rest }: LinkButtonProps) {
    return (
        <a {...rest} className={clsx("inline-flex gap-1 mt-8 px-4 py-2 font-semibold text-sm items-center", 
        className
        )}
        >
            {children}
        </a>
    );
}