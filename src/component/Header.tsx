import { Link } from "react-router-dom"

export const Header = () => {
  return(
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <li className="mr-5 hover:text-gray-900"><Link to="original">Original</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="original">Original</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="original">Original</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="original">Original</Link></li>
      </nav>
    </div>
  </header>
  )
}