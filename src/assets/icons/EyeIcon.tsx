interface IconProps {
  size?: number;
  color?: string;
}

export default function EyeIcon({
  size = 18,
  color = "#000000",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 12C4 8 7 6 12 6C17 6 20 8 22 12C20 16 17 18 12 18C7 18 4 16 2 12Z"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}