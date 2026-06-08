import { useEffect, useState } from "react";

export const usePickupCountdown = (
  pickupStartDate: number,
  enabled: boolean
) => {
  const [remainingTime, setRemainingTime] =
    useState("");

  const [canPickup, setCanPickup] =
    useState(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }


    const updateCountdown = () => {
      const diff =
        pickupStartDate -
        Date.now();

      if (diff <= 0) {
        setCanPickup(true);
        setRemainingTime("");
        return;
      }

      const hours = Math.floor(
        diff / 3600000
      );

      const minutes = Math.floor(
        (diff % 3600000) / 60000
      );

      const seconds = Math.floor(
        (diff % 60000) / 1000
      );

      setCanPickup(false);

      setRemainingTime(
        `${hours}:${String(
          minutes
        ).padStart(2, "0")}:${String(
          seconds
        ).padStart(2, "0")}`
      );
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () =>
      clearInterval(interval);
  }, [
    pickupStartDate,
    enabled,
  ]);

  return {
    canPickup,
    remainingTime,
  };
};