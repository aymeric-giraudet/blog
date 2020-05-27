import React from "react"
import Img, { FluidObject } from 'gatsby-image'

interface ArticleCardProps {
  title: string;
  slug: string;
  tags: string[];
  description: { description: string };
  heroImage: { fluid: FluidObject }
}

const ArticleCard: React.FC<ArticleCardProps> = props => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
  <Img alt="" fluid={props.heroImage.fluid} className="w-full"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
      {props.description.description}
    </p>
  </div>
  <div className="px-6 py-4">
    {props.tags && props.tags.map(tag => (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>))}
  </div>
</div>
)

export default ArticleCard
