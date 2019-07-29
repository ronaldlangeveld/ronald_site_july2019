import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    
  <div className="subtitle is-6 is-size-6-mobile">
    <Link className="has-text-black" to={post.frontmatter.path}>
     {post.frontmatter.title}
    </Link>
  </div>
)

export default PostLink