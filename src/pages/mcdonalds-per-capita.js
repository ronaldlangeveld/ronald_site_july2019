import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, useStaticQuery } from "gatsby"
import NumericLabel from 'react-pretty-numbers';


const McDonalds = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMaccasJson(sort: {fields: mcds_per_1000_people, order: DESC}) {
          nodes {
            country
            mcds_per_1000_people
            population
            people_per_outlet
            mcdonalds
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
                            <h1 className="title is-1 has-text-weight-light is-size-4-mobile">Number of McDonalds outlets per capita by country</h1>
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


    <table className="table">

    <thead>
    <tr>
      <th>Country</th>
      <th>Population</th>
      <th>Number of McDonalds restaurants</th>
      <th>McDonalds outlets per 1000 people</th>
      <th>Number of people per outlet</th>
    </tr>
  </thead>

        <tbody>

        {data.allMaccasJson.nodes.map(mac => (


<tr>
<td className="has-text-weight-bold">{mac.country}</td>
<td><NumericLabel>{mac.population}</NumericLabel></td>
<td><NumericLabel>{mac.mcdonalds}</NumericLabel></td>
<td><progress class="progress is-danger" value={mac.mcds_per_1000_people} max="1">{mac.mcds_per_1000_people}</progress>
<NumericLabel>{mac.mcds_per_1000_people}</NumericLabel>
</td>
<td>
<NumericLabel>{mac.people_per_outlet}</NumericLabel>
</td>
</tr>


    
    

))}

        </tbody>



    </table>


    </div>


  </Layout>
)
  }

export default McDonalds
