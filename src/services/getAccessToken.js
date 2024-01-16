const getAccessToken = () => {

  const accessToken = localStorage.getItem('accessToken');
  const expiresAt = localStorage.getItem('expiresAt');

  // トークンの有効期限を確認
  const expirationTime = new Date(expiresAt).getTime();
  const currentTime = new Date().getTime();
  const isValid = currentTime < expirationTime;

  return isValid ? accessToken : null;
}

export default getAccessToken;