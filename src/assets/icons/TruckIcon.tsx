interface IconProps {
  size?: number;
  color?: string;
}

export default function TruckIcon({
  size = 20,
  color = "#FFFFFF",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 6H15V16H3V6Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M15 9H19L21 11V16H15"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="18"
        r="2"
        stroke={color}
        strokeWidth="2"
      />
      <circle
        cx="18"
        cy="18"
        r="2"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}