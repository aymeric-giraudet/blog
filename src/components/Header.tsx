import { Link } from "gatsby"
import React from "react"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <nav>
      <ul className="flex justify-center">
        <li className="text-center px-4 py-2 m-2">
          <Link to="/" className="text-xl text-gray-800 underline">
            Home
          </Link>
        </li>
        <li className="text-center px-4 py-2 m-2">
          <Link to="/blog" className="text-xl text-gray-800 underline">
            Blog
          </Link>
        </li>
        <li className="text-center px-4 py-2 m-2">
          <Link to="/projects" className="text-xl text-gray-800 underline">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
