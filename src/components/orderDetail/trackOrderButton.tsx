import "./trackOrderButton.scss";

interface Props {
  status: number;
}

export default function TrackOrderButton({
  status,
}: Props) {
  const enabled = status >= 3;

  return (
    <button
      className="track-order-btn"
      disabled={!enabled}
      onClick={() =>
        console.log("Track Order")
      }
    >
      Track Order
    </button>
  );
}