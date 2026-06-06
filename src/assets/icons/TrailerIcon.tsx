interface IconProps {
  size?: number;
  color?: string;
}

export default function TrailerIcon({
  size = 34,
  color = "#FFFFFF",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 16V9C5 7.5 6 6.5 7.5 6.5H13.5C15.5 6.5 17 8 17 10V11" />

      <path d="M17 11H19C20.7 11 22 12.3 22 14V15C22 16.1 21.1 17 20 17H19" />

      <path d="M8 17H16" />

      <path d="M11 8.5H15C15.8 8.5 16.4 9 16.8 10L17.3 11.5H11V8.5Z" />

      <circle cx="8" cy="17" r="1.8" />
      <circle cx="17" cy="17" r="1.8" />

      <path d="M5 12H3.5" />
      <circle cx="2.5" cy="17" r="0.8" />
      <circle cx="4.5" cy="17" r="0.8" />
    </svg>
  );
}