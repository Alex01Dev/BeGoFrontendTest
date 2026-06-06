import "./PickupButton.scss";

interface Props {
    canPickup: boolean;
    remainingTime: string;
    onPickup: () => void;
}

export default function PickupButton({
    canPickup,
    remainingTime,
    onPickup,
}: Props) {
    return (
        <button
            className={`pickup-btn ${!canPickup
                    ? "pickup-btn--active"
                    : ""
                }`}
            disabled={!canPickup}
            onClick={onPickup}
        >
            {!canPickup ? (
                <>
                    <span className="pickup-label">
                        Start pickup in
                    </span>

                    <span className="pickup-time">
                        {remainingTime}
                    </span>
                </>
            ) : (
                "It's time for pickup"
            )}
        </button>
    );
}