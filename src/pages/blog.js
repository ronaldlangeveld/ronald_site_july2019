import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
       <SEO title="Ronald Langeveld | Blog" />
        <header style={bgImg} className="masthead">
    <div className="overlay"></div>
      <div className="overlay"></div>
      <div className="overlay"></div>


    </header>
 
    
  </Layout>
)
const bgImg = {
  backgroundImage: "url(" + "'https://res.cloudinary.com/cinemakers/image/upload/v1563114654/other/IMG_0774.jpg'" + ")",

}
export default BlogPage
