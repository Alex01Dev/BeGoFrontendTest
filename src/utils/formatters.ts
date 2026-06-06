export const formatDate = (
  timestamp: number
) => {
  return new Date(timestamp).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }
  );
};

export const formatTime = (
  timestamp: number
) => {
  return new Date(timestamp).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
  );
};

export const truncateAddress = (
  address: string,
  maxLength = 35
) => {
  if (address.length <= maxLength) {
    return address;
  }

  return `${address.slice(0, maxLength)}...`;
};