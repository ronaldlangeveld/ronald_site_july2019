import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <section className="hero">
            <div className="hero-header">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <br />
                            <h1 className="title has-text-weight-light">Contact Me</h1>
                            <h2 className="subtitle is-size-6 has-text-weight-light">Where to find me around the web</h2>

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
                            <div className="is-size-5">
                            <p><a href="mailto:hi@ronaldlangeveld.com">Email</a></p>
                            <p><a href="https://twitter.com/ronaldlangeveld" target="_blank">Twitter</a></p>
                            <p><a href="https://t.me/ronaldl93" target="_blank">Telegram</a></p>
                            <p><a href="https://github.com/ronaldlangeveld" target="_blank">Github</a></p>
                            <p><a href="https://www.linkedin.com/in/ronald-langeveld-0889a623/" target="_blank">LinkedIn</a></p>
                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default Contact
