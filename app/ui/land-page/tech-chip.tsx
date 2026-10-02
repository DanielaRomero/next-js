type TechChipProps = {
  name: string;
  variant?: "skills" | "projects";
};

export default function TechChip({ name, variant = 'skills' }: TechChipProps) {
  const variantClasses = variant === 'skills' ? 'bg-white border border-gray-300 text-gray-800' : 
  'bg-purple-100 text-purple-700';
  return (
    <li className={`${variantClasses} rounded-md border-solid border px-4 py-2 text-sm`}>
      {name}
    </li>
);
}
