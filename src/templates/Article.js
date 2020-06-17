import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Article = ({ data: { contentfulBlogPost: post } }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description.description}
      meta={[
        { property: "og:image", content: `https:${post.heroImage.resize.src}` },
        {
          property: "twitter:image",
          content: `https:${post.heroImage.resize.src}`,
        },
      ]}
    />
    <article className="max-w-2xl mx-auto px-5">
      <Img
        style={{
          height: "61.8vh",
          maxHeight: "400px",
        }}
        alt={post.title}
        fluid={post.heroImage.fluid}
      />
      <h1 className="c-h1">{post.title}</h1>
      <p
        style={{
          display: "block",
        }}
      >
        {post.publishDate}
      </p>
      <div
        className="c-rich-text"
        dangerouslySetInnerHTML={{
          __html: post.body.childMarkdownRemark.html,
        }}
      />
    </article>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, quality: 85) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        resize(width: 400, height: 400, resizingBehavior: CROP) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Article
