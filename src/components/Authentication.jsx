const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:5173/'; 
const RESPONSE_TYPE = 'token';

const Authentication = () => {
  const handleLoginClick = () => {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    window.location = authUrl;
  };

  return (
    <button className='bg-green-800 hover:border-green-500' onClick={handleLoginClick}>
      Login to Spotify
    </button>
  );
};

export default Authentication;
