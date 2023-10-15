import SpotifyLogo from '../assets/spotify.png'
const Header = () => {
    return (
        <div className='flex justify-center align-middle px-4 py-2'>
            <img className='lg:h-12 h-10 w-auto m-1' src={SpotifyLogo}></img>
            <h1 className='lg:text-4xl text-3xl font-black m-1'>HitHub</h1>
        </div>
    );
}

export default Header;