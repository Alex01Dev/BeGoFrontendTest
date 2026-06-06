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


export const extractCityFromAddress = (
  address: string
): string => {
  if (!address) {
    return "";
  }

  const parts = address
    .split(",")
    .map((part) => part.trim());

  if (parts.length < 3) {
    return address;
  }

  const cityPart = parts[parts.length - 3];

  const city = cityPart
    .replace(/^\d+\s*/, "")
    .trim();

  return `${city}, MX`;
};