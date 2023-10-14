import SpotifyLogo from '../assets/spotify.png'
const Header = () => {
    return (
        <div className='flex justify-center align-middle px-4 py-2'>
            <img className='h-12 w-auto m-1' src={SpotifyLogo}></img>
            <h1 className='text-4xl font-black m-1'>HitHub</h1>
        </div>
    );
}

export default Header;