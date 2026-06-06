interface IconProps {
  size?: number;
  color?: string;
}

export default function LocationIcon({
  size = 18,
  color = "#FEFF00",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C12 22 19 15 19 10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10C5 15 12 22 12 22Z"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="10"
        r="2"
        fill={color}
      />
    </svg>
  );
}