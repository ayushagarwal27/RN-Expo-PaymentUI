export function formatSolanaAddress(address: string) {
  // Check if address is valid (should be a string and have reasonable length)
  if (!address || typeof address !== "string" || address.length < 8) {
    return address; // Return original if invalid
  }

  // Get first 4 and last 4 characters
  const first4 = address.substring(0, 4);
  const last4 = address.substring(address.length - 4);

  return `${first4}...${last4}`;
}
