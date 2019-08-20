import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (

<div>
<div className="card">
  <div className="card-content">
  <p> <Link to={post.frontmatter.path} className="title is-4 is-size-6-mobile">
    {post.frontmatter.title}
    </Link></p>
    <p className="subtitle is-6 is-size-7-mobile">
      {post.frontmatter.date}
    </p>
  </div>

</div>
<br />
</div>
 
    
)

export default PostLink