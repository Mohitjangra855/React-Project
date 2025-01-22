export default function Navbar() {
    return (
        <>
            <div className="flex items-center w-full justify-between px-4">
                <img src="/NikeLogo.jpg" alt="LogoImage" className="w-16 rounded-lg" />
                <ul className="w-2/3 flex items-center justify-between max-w-md">
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                <button className="bg-red-700 px-3 py-1 rounded text-white">Login</button>
            </div>
        </>
    )
}