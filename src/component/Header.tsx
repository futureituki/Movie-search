import { Link } from "react-router-dom"

export const Header = () => {
  return(
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/9 flex-wrap items-center text-base md:ml-auto">
      <li className="mr-5 hover:text-gray-900"><Link to="trending">Trending</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="original">Original</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="toprated">TopRated</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="horror">Horror</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="comedian">Comedian</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="romance">Romance</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="document">Document</Link></li>
      </nav>
    </div>
  </header>
  )
}