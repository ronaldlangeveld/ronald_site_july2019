import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ChatForm from '../components/chat_form'

const form=true

const Projects = () => (
    
    <Layout>
        <SEO title="Personal Projects" />
    
        <section class="hero">
        <div className="hero-header">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-6 marginHeaders">
                                    <br />
                                    <h1 className="title is-1 has-text-weight-light is-size-4-mobile">Personal Projects</h1>
                                    <h2 className="subtitle is-size-3 has-text-weight-light is-size-5-mobile">Some side projects I'm working on, usually to learn something new</h2>

                                    <Link className="is-size-6 has-text-weight-light has-text-black" to="/">← Back home</Link>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
        <div class="hero-body">
            <div class="container">

          
              <div className="columns is-centered">

                <div className="column is-6">


                
                    <li><Link to="/mcdonalds-per-capita">🍔 McDonalds outlets per capita by country</Link></li>
                <li><a href="https://www.notifbar.com">📝 Notifbar</a></li>
       

                </div>
              </div>

            </div>
          </div>

        </section>
    </Layout>
)

export default Projects

    
    
    
