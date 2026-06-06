interface IconProps {
  size?: number;
  color?: string;
}

export default function SearchIcon({
  size = 20,
  color = "#FFFFFF",
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
        d="M21 21L15.8 15.8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}