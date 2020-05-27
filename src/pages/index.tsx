import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

import ArticleCard from "../components/ArticleCard"

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(limit: 10, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          tags
          heroImage {
            fluid(maxWidth: 384, maxHeight: 234, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`

const IndexPage: React.FC = props => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-wrap justify-center">
      {props.data.allContentfulBlogPost.edges.map(({ node }) => (
        <ArticleCard {...node} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
