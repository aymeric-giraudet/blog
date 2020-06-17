import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul className="flex justify-center">
        <li className="text-center px-4 py-2 m-2">
          <Link to="/" className="text-xl text-gray-800 underline">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
