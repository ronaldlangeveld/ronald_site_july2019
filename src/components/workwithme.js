import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image';



function WorkWithMe() {


  return (
    <>

      <div id="work" className="container">

      <section className="hero is-medium">
      <div className="hero-head">


<h1 className="title is-2 has-text-warning has-text-centered content-shadow">Work with me</h1>
<h2 className="subtitle is-3 has-text-white has-text-centered content-shadow">Over the last 3 years I've helped build websites for businesses across many different industries</h2>

</div>

            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-10">
                            <div className="content has-text-white has-text-justified is-size-4 is-size-6-mobile content-shadow">
                                <p>
                                    I built my first ever HTML site when I was 17 years old - 2011.
                                    <br />
                                    Since then, I've continiously improved my expertise around the web technologies and used many different platforms and tools.
                                    </p>
                                <p>
                                    When I'm not developing a web application from scratch using <a className="has-text-white" href="https://www.python.org?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">Python</a> and <a className="has-text-white" href="https://www.djangoproject.com?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">Django</a> or <a className="has-text-white" href="https://www.reactjs.org?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">React</a> and <a className="has-text-white" href="https://nodejs.org/?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">NodeJS</a>, 
                                    I'm more than comfortable developing themes and setting up eCommerce stores on <a className="has-text-white" href="https://wordpress.org?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">WordPress</a> or help you blog better using <a className="has-text-white" href="https://ghost.org?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">Ghost</a>.
                                    </p>

                                    <p>I enjoy static site generators such as <a className="has-text-white" href="https://www.gatsbyjs.org?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">Gatsby JS</a> and <a className="has-text-white" href="https://jekyllrb.com?ref=ronaldlangeveld.com" target="_blank" rel="noopener noreferrer">Jekyll</a>. They are super fast, very SEO friendly and can be hosted anywhere.</p>

                                <p>If you would like more information, send me an email at <a className="has-text-white" href="mailto:hi@ronaldlangeveld.com">hi@ronaldlangeveld.com</a></p>

                            </div>
                            {/* <ChatForm Form={form} /> */}
                            
                            <p className="has-text-white content-shadow">
                                Alternatively, find me on <a className="has-text-white" href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">Twitter</a>, <a className="has-text-white" href="https://t.me/ronaldl93" target="_blank" rel="noopener noreferrer">Telegram</a>, <a className="has-text-white" href="https://github.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">Github</a> or <a className="has-text-white" href="https://www.linkedin.com/in/ronald-langeveld-0889a623/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                            </p>
                  
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </div>

    </>
  );
}

export default WorkWithMe



