interface IconProps {
  size?: number;
  color?: string;
}

export default function TruckIcon({
  size = 34,
  color = "#FFFFFF",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="1 5 21 11"
      fill="none"
      stroke={color}
      strokeWidth="1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="6"
        width="10"
        height="6"
      />

      <path
        d="M12 10H14"
        strokeLinecap="round"
      />

      <path
        d="M14 6H17L19 8.5H21V12H14V6Z"
        strokeLinejoin="round"
      />

      <path
        d="M15 7.5H17L18 9H15V7.5Z"
        strokeLinejoin="round"
      />

      <circle
        cx="5"
        cy="13.5"
        r="1"
      />

      <circle
        cx="8"
        cy="13.5"
        r="1"
      />

      <circle
        cx="18.5"
        cy="13.5"
        r="1"
      />
    </svg>
  );
}