

const Header = () => {
  return (
    // <div>
    //     <nav className='hidden md:flex justify-center items-center px-4 py-2 shadow-sm'>
    //         <ul className='hidden md:flex justify-center items-center space-x-4 font-bold'>
    //             <li>Home</li>
    //             <li>About</li>
    //             <li>Contact</li>
    //             <li>Projects</li>
    //         </ul>
    //     </nav>
    // </div>
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      
      {/* Menu Items */}
      <ul className="flex space-x-8 text-lg font-semibold">
        <li className="hover:text-gray-600 transition">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-gray-600 transition">
          <a href="#">About</a>
        </li>
        <li className="hover:text-gray-600 transition">
          <a href="#">Contact Me</a>
        </li>
        <li className="hover:text-gray-600 transition">
          <a href="#">Download CV</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header