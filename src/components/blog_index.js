import React from 'react';
import { Link } from "gatsby"

const PostIndex = ({ children }) => {
    return (
        <section className="hero is-dark">
            <div className="hero-header">
                <div className="container">

                </div>
            </div>
            <div className="hero-body">
                <div className="container">
                <div className="columns is-centered">
                        <div className="column is-12 marginHeaders">
                            <br />
                            <h1 className="title is-1 is-size-4-mobile has-text-warning">Blog</h1>
                            <h2 className="subtitle is-size-4 is-size-5-mobile">In my free time I write about stuff that interests me, such as Programming, Travelling and Personal Experiences </h2>

                            <Link className="is-size-6 has-text-white" to="/">← Back home</Link>
                    
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-12">
                            <div>
                            <main>
                                {children}
                            </main>
                            <div>
                <div className="has-text-centered">
                  {/* <Img style={ProfilePic} fluid={data.profilepic.childImageSharp.fluid} /> */}
                </div>
                <br />
                <h1 className="has-text-centered title is-5">Ronald Langeveld</h1>
                <p className="is-size-6 has-text-centered">Freelance Full-Stack Software Developer working on development projects for local and international clients. 
                Originally from South Africa and travels around Asia whilst working remotely. 
                <hr />
                Need Web Development or Tech Consultation to kick off for your next big thing? I'm available for Hire.
                <br />
                <a className="has-text-white" href="https://twitter.com/ronaldlangeveld" target="_blank">Twitter</a> &nbsp; <a className="has-text-white" href="mailto:hi@ronaldlangeveld.com">Email</a>
                
                </p>
              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostIndex;