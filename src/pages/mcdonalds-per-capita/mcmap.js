import React, {useEffect, useState} from "react"
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link, useStaticQuery } from "gatsby";
import NumericLabel from 'react-pretty-numbers';


const McDonalds = () => {
    const data = useStaticQuery(graphql`
    query MyQuery2 {
        allMaccasJson(sort: {fields: mcds_per_10000_people, order: DESC}) {
          nodes {
            id
            country
            mcds_per_10000_people
            population
            people_per_outlet
            mcdonalds
            slug
          }
        }
      }
  `) 

  console.log(data.allMaccasJson.nodes)
  const [labels, setLabels] = useState("")
  const [dataset, setDataset] = useState("")
  const [chart, setChart] = useState("")

  const [getData, setData] = useState(false)
  const [loaded, setLoaded] = useState(false)

const maccas = data.allMaccasJson.nodes;

  return(
  <Layout>
    <SEO title="McDonalds Per Capita" />
    <>
    <section className="hero">
            <div className="hero-header">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column marginHeaders">
                            <br />
                            <h1 className="title is-1 has-text-weight-light is-size-4-mobile">Number of McDonalds outlets per capita by country | Map</h1>
                            {/* <h2 className="subtitle is-size-3 has-text-weight-light is-size-5-mobile">Over the last 3 years I've helped build websites for businesses across many different industries.</h2> */}

                            <Link className="is-size-6 has-text-weight-light has-text-black" to="/">← Back home</Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div>
        </div>
    </>

    <div className="container">




    </div>

    <div className="hero-footer">

<div className="container has-text-centered is-size-7">
<p>We are in no way affiliated or endorsed by McDonalds Inc.</p>
<p>We are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.</p>

</div>
</div>


  </Layout>
)
  }

export default McDonalds
