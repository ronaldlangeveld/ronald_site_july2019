import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ProjectList from "../components/projects"

const Projects = () => (
  <Layout>
    <SEO title="My Latest Projects" />
    <ProjectList />

  </Layout>
)

export default Projects
