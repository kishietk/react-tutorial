// Checks if the token has expired and returns a boolean value
export default function isTokenValid({ accessToken, expiresAt }) {
  
  // null check
  if (!accessToken && expiresAt) return false;

  // Check token expiration date
  const expiration = new Date(expiresAt).getTime();
  const now = new Date().getTime();
  return now < expiration;
}