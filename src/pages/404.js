import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-weight-light">
            404 🥺
      </h1>
          <h2 class="subtitle">
            Oops, looks like this page has moved.
Sorry about that. <br /> Lets get you somewhere useful.
<Link to="/"> Back to homepage</Link>
          </h2>

        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
