import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Work = () => (
    <Layout>
        <SEO title="Work Me" />
        <section className="hero">
            <div className="hero-header">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <br />
                            <h1 className="title has-text-weight-light">Work with me</h1>
                            <h2 className="subtitle is-size-6 has-text-weight-light">Over the last 3 years I've helped build websites for businesses across many different industries.</h2>

                            <Link className="is-size-7 has-text-weight-light has-text-black" to="/">← Back home</Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <div className="content has-text-justified">
                                <p>
                                    I built my first ever HTML site when I was 17 years old - 2011.
                                    <br />
                                    Since then, I've continiously improved my expertise around the web technologies and used many different platforms and tools.
                                    </p>
                                <p>
                                    When I'm not developing a web application from scratch using <a href="https://www.python.org?ref=ronaldlangeveld.com" target="_blank">Python</a> and <a href="https://www.djangoproject.com?ref=ronaldlangeveld.com" target="_blank">Django</a> or <a href="https://www.reactjs.org?ref=ronaldlangeveld.com" target="_blank">React</a> and <a href="https://nodejs.org/?ref=ronaldlangeveld.com" target="_blank">NodeJS</a>, 
                                    I'm more than comfortable developing themes and setting up eCommerce stores on <a href="https://wordpress.org?ref=ronaldlangeveld.com" target="_blank">WordPress</a> or help you blog better using <a href="https://ghost.org?ref=ronaldlangeveld.com" target="_blank">Ghost</a>.
                                    </p>

                                    <p>I enjoy static site generators such as <a href="https://www.gatsbyjs.org?ref=ronaldlangeveld.com" target="_blank">Gatsby JS</a> and <a href="https://jekyllrb.com?ref=ronaldlangeveld.com" target="_blank">Jekyll</a>. They are super fast, very SEO friendly and can be hosted anywhere.</p>

                                <p>If you would like more information, send me an email at <a href="mailto:hi@ronaldlangeveld.com">hi@ronaldlangeveld.com</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Work
