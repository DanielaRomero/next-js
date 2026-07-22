import { LinkButton } from "@/app/ui/link-button";

type SectionIntroProps = {
  heading: string;
  title: string;
  description: string;
  variant?: "teal" | "purple";
  linkLabel: string;
  linkUrl: string;
  centered?: boolean;
};

export default function SectionIntro({
  heading,
  title,
  description,
  variant = "teal",
  linkLabel,
  linkUrl,
  centered = false,
}: SectionIntroProps) {
  const variantClasses =
    variant === "teal" ? "text-brand-teal" : "text-brand-purple";

  const iconClasses = variant === "teal" ? "#0F766E" : "#FFFFFF";
  const titleClasses = variant === "teal" ? "md:text-2xl" : "md:text-3xl";

  return (
    <div className={`flex flex-col ${centered ? "items-center mb-7" : ""}`}>
      <p className={`font-semibold text-sm ${variantClasses} uppercase`}>
        {heading}
      </p>
      <h2 className={`text-xl font-bold text-gray-800 ${titleClasses} my-4`}>
        {title}
      </h2>
      <p className="text-gray-800 text-lg md:text-base">{description}</p>
      <LinkButton
        href={linkUrl}
        className={`${centered ? "bg-purple-700 text-white hover:bg-purple-950 rounded-lg" : "text-brand-teal hover:text-teal-950"}`}
      >
        {linkLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={iconClasses}
          className="h-4 w-4"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </LinkButton>
    </div>
  );
}
