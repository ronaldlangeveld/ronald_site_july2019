import React from "react"
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

const {allMaccasJson} = data
const {edges} = allMaccasJson

// console.log(data)

console.log(edges)

const McData = edges[0].node;


const Outlets = () => {

    const stores = parseInt(McData.mcdonalds)
   const burger = "🍔".repeat(stores)

   return burger
}

return (
<Layout>

<section className="hero">
      <SEO title={`McDonalds - ${McData.country}`} />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">

            <div className="column is-7">
            <h1 className="title is-3 has-text-weight-light is-size-4-mobile">McDonalds - {McData.country}</h1>
             <p>Population: <NumericLabel>{McData.population}</NumericLabel> </p>
             <p>McDonalds Outlets: <NumericLabel>{McData.mcdonalds}</NumericLabel> </p>
             <p>Outlets per 10,000 people: <NumericLabel>{McData.mcds_per_1000_people}</NumericLabel> </p>
             <p>Number of people per outlet: <NumericLabel>{McData.people_per_outlet}</NumericLabel> </p>
             <br />
             <Link className="is-size-6 has-text-weight-light has-text-black" to="/mcdonalds-per-capita">← Back to McDonald's Index</Link>

              <hr />
              <p>Each burger represents a McDonalds restaurant in <strong>{McData.country}</strong></p>

            <div className="is-size-2">


                {Outlets()}

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
        mcds_per_1000_people
        mcdonalds
        country
        population
        people_per_outlet
        id
      }
    }
  }
}
  
`