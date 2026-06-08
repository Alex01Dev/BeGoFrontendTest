interface IconProps {
  size?: number;
  color?: string;
}

export default function ChevronUpIcon({
  size = 16,
  color = "#FEFF00",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 15l7-7 7 7"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}