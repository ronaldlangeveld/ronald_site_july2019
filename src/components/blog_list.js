import React from "react"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const PostLink = ({ post }) => (

<div data-aos="fade-right" data-aos-duration="100">



<Link to={post.frontmatter.path}>
<BackgroundImage Tag="section"
                           className="responsiveImgBlog"
                           fluid={post.frontmatter.featuredImage.childImageSharp.sizes}
          >
          </BackgroundImage></Link>

<p className="help">{post.frontmatter.date}</p>
<p> <Link to={post.frontmatter.path} className="title is-4 is-size-6-mobile has-text-warning">
    {post.frontmatter.title} →
    </Link></p>

  <p className="subtitle is-6 is-size-7-mobile">{post.excerpt}</p>

<br />
</div>
 
    
)


export default PostLink