import { Link } from "react-router-dom"

export const Header = () => {
  return(
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h2>TV</h2>
      <nav className="flex lg:w-2/9 flex-wrap items-center text-base md:ml-auto">
      <li className="mr-5 hover:text-gray-900"><Link to="tv/trending">Trending</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="tv/original">Original</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="tv/toprated">TopRated</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="tv/horror">Horror</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="tv/comedian">Comedian</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="tv/romance">Romance</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="tv/document">Document</Link></li>
      </nav>
    </div>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h2>Movie</h2>
      <nav className="flex lg:w-2/9 flex-wrap items-center text-base md:ml-auto">
      <li className="mr-5 hover:text-gray-900"><Link to="movie/trending">Trending</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="movie/original">Original</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="movie/toprated">TopRated</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="movie/horror">Horror</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="movie/comedian">Comedian</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="movie/romance">Romance</Link></li>
      <li className="mr-5 hover:text-gray-900"><Link to="movie/document">Document</Link></li>
      </nav>
    </div>
  </header>
  )
}