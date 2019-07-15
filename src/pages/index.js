import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"


const IndexPage = () => (
  <Layout>
    <SEO title="Ronald Langeveld | Full Stack Web Developer and Bootstrapper" />
    <header style={bgImg} className="masthead">
    <div className="overlay"></div>
      <div className="overlay"></div>
      <div className="overlay"></div>
    <Header />
    <Projects />
    </header>




  </Layout>
)
const bgImg = {
  backgroundImage: "url(" + "'https://res.cloudinary.com/cinemakers/image/upload/v1563114654/other/IMG_0774.jpg'" + ")",

}

export default IndexPage
