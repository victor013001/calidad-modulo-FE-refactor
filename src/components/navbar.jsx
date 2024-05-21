import takeOffLogo from "../assets/takeoff.svg"

function NavBar() {
    return (
        <>
            
            <nav className="bg-cyan-500 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={takeOffLogo} className="h-12" alt="TakeOff Logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Singapur Airlines</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="text-black bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center">Usuario</button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-cyan-500">
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 md:hover:text-white md:p-0">Tu Reserva</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 md:hover:text-white md:p-0">Ofertas y Destinos</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 md:hover:text-white md:p-0">Informacion y Ayuda</a>
                </li>
                </ul>
            </div>
            </div>
            </nav>

        </>
    )
}

export default NavBar