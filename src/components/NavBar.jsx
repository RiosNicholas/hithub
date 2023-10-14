const NavBar = () => {
    return (
        <nav className="py-4 px-6 font-extrabold uppercase text-xl">
            <ul>
                <li className="p-1 hover:cursor-pointer">🏠 Dashboard</li>
                <li className="p-1 hover:cursor-pointer">🔍 Search</li>
                <li className="p-1 hover:cursor-pointer">ℹ️ About</li>
            </ul>
        </nav>
    );
} 

export default NavBar;