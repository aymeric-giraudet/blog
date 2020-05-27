import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="bg-gray-200">{children}</main>
      <footer className='w-full text-center border-t border-grey p-4 pin-b'>
        © {new Date().getFullYear()}, Aymeric Giraudet
      </footer>
    </>
  )
}

export default Layout
