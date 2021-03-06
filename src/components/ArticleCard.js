import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ArticleCard = props => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
    <Img alt="" fixed={props.heroImage.fixed} className="w-full" />
    <div className="px-6 py-4">
      <Link className="font-bold text-xl mb-2" to={`/blog/${props.slug}`}>
        {props.title}
      </Link>
      <p className="text-gray-700 text-base">{props.description.description}</p>
    </div>
    <div className="px-6 py-4">
      {props.tags &&
        props.tags.map(tag => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
    </div>
  </div>
)

export default ArticleCard
