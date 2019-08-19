import React from 'react';
import { Link } from "gatsby"

const PostIndex = ({ children }) => {
    return (


        <section className="hero">
            <div className="hero-header">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6 marginHeaders">
                            <br />
                            <h1 className="title is-1 has-text-weight-light">Blog</h1>
                            <h2 className="subtitle is-size-3 has-text-weight-light">I'm not the most consistent blogger, but I <i>sometimes</i> write about stuff that interest me. </h2>

                            <Link className="is-size-6 has-text-weight-light has-text-black" to="/">← Back home</Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <div>
                            <main>
                                {children}
                            </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}

export default PostIndex;