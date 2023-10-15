const NavBar = () => {
    return (
        <nav className="py-4 px-6 font-extrabold uppercase text-lg lg:text-xl">
            <ul>
                <li className="p-1 hover:cursor-pointer hover:text-gray-300">🏠 Dashboard</li>
                <li className="p-1 hover:cursor-pointer hover:text-gray-300">🔍 Search</li>
                <li className="p-1 hover:cursor-pointer hover:text-gray-300">ℹ️ About</li>
            </ul>
        </nav>
    );
} 

export default NavBar;