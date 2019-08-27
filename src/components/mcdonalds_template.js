import React, {useState, useEffect} from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import 'bulma/css/bulma.min.css'
import Layout from './layout'
import BackgroundImage from 'gatsby-background-image'
import NumericLabel from 'react-pretty-numbers';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { allMaccasJson } = data
  const { edges } = allMaccasJson

  // console.log(data)

  console.log(edges)

  const McData = edges[0].node;


  const Outlets = () => {

    const stores = parseInt(McData.mcdonalds)
    const burger = "🍔".repeat(stores)

    return burger
  }

  const [burgerNumbers, setBurgers] = useState("0")

  const dollars = () => {

    console.log(McData.bigmac_price_avg)

    const price = parseInt(McData.bigmac_price_avg);
    const dev = 50/price;
    const numburgers = Math.floor(dev)

    const burger = "🍔".repeat(numburgers)


    return burger

  }

  useEffect(() => {

    const price = parseInt(McData.bigmac_price_avg);
    const dev = 50/price;
    const numburgers = Math.floor(dev)

    setBurgers(numburgers)
  }, [McData])

  return (
    <Layout>

      <section className="hero">
        <SEO title={`McDonalds - ${McData.country}`} />
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">

              <div className="column is-7">
                <h1 className="title is-2 has-text-weight-light is-size-4-mobile">McDonalds - {McData.country}</h1>

                  <div className="box">
                <div className="is-size-5">
                <p><strong>Population:</strong> <NumericLabel>{McData.population}</NumericLabel> </p>
                <p><strong>McDonalds Outlets:</strong> <NumericLabel>{McData.mcdonalds}</NumericLabel> </p>
                <p><strong>Outlets per 10,000 people:</strong> <NumericLabel>{McData.mcds_per_10000_people}</NumericLabel> </p>
                <p><strong>Number of people per outlet:</strong> <NumericLabel>{McData.people_per_outlet}</NumericLabel> </p>
                <p><strong>Big Mac Price*:</strong> <NumericLabel params={{currency: true, commafy:true, shortFormat: false, justification: 'L'}}>{McData.bigmac_price_avg}</NumericLabel> </p>
                </div>
    <div className="has-text-right">
    <Link className="is-size-6 button is-warning" to="/mcdonalds-per-capita">See more countries</Link>

    </div>
    <p className="help">* Based on the information I could find for a Big Mac burger ala carte. <br />If know a more accuracy price, please contact me.</p>

                  </div>
    
              <div className="columns is-multiline">
              <div className="column is-12">


<div>
<p className="is-size-3">In <strong>{McData.country}</strong> you can buy <strong>{burgerNumbers}</strong> Big Mac's with <strong>$50</strong></p>

<div className="is-size-2">


{dollars()}



</div>

</div>

</div>

                <div className="column">


                <p className="is-size-3">Each burger represents a <strong>McDonalds restaurant</strong> in <strong>{McData.country}</strong></p>

<div className="is-size-2">


  {Outlets()}

</div>


                </div>


              </div>


                <hr />



              </div>
            </div>
          </div>
        </div>

        <div className="hero-footer">

          <div className="container has-text-centered is-size-7">
            <p>We are in no way affiliated or endorsed by McDonalds Inc.</p>
            <p>We are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.</p>

          </div>
        </div>

      </section>
    </Layout>


  )
}

const ProfilePic = {
  width: "100px",
  height: "100px",
  borderRadius: "100%",
  margin: "0 auto"
}

export const pageQuery = graphql`
query($slug: String!) {
  allMaccasJson(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        mcds_per_10000_people
        mcdonalds
        country
        population
        people_per_outlet
        id
        bigmac_price_avg
      }
    }
  }
}
  
`