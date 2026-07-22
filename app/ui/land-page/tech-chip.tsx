type TechChipProps = {
  name: string;
  variant?: "skills" | "projects";
};

export default function TechChip({ name, variant = 'skills' }: TechChipProps) {
  const variantClasses = variant === 'skills' ? '' : 
  'bg-purple-700 text-white';
  return (
    <li className={`${variantClasses} rounded-md border-solid border p-2 text-sm`}>
      {name}
    </li>
);
}
