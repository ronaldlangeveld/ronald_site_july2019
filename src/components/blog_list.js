import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (

<div>


{(post.frontmatter.img ? 
<Link to={post.frontmatter.path}>
<div style={{ backgroundImage: `url(${post.frontmatter.img})` }} className="responsiveImgBlog" >
</div> 
<br />
</Link>
:
""
  )}



<p className="help">{post.frontmatter.date}</p>
<p> <Link to={post.frontmatter.path} className="title is-5 is-size-6-mobile">
    {post.frontmatter.title} →
    </Link></p>

  <p className="subtitle is-6 is-size-7-mobile">{post.excerpt}</p>

<br />
</div>
 
    
)


export default PostLink