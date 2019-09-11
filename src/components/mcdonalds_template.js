import React, {useState, useEffect} from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import 'bulma/css/bulma.min.css'
import Layout from './layout'
import BackgroundImage from 'gatsby-background-image'
import NumericLabel from 'react-pretty-numbers';
import RavePaymentModal from 'react-ravepayment'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { allMaccasJson } = data
  const { edges } = allMaccasJson

  //Live Key
  const pubkey = "FLWPUBK-127f14902b1886e5e46c529fd493cc22-X" 

  //Dev Key
  // const pubkey = "FLWPUBK_TEST-e4a3713dd014db320e169fc2ee2acc51-X"


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



    const burger = "🍔".repeat(burgerNumbers)


    return burger

  }

  useEffect(() => {

    const price = McData.bigmac_price_avg;
    console.log(price);
    const money = 50.00;
    console.log(money);
    const dev = parseFloat(money) / parseFloat(price);
    console.log(dev)
    const numburgers = Math.floor(dev)


    setBurgers(numburgers)
  }, [McData])


  const [email, setEmail] = useState("")
  const [payBTN, setPayBTN] = useState(false)

  const updateEmail = (e) => {

    setEmail(e.target.value)

    if (email.length > 1)
    setPayBTN(true)

  }

 const callback = (response) => {
    console.log(response);
    alert("Thank you for your support!")

  }

 const close = () => {
    console.log("Payment closed");
  }

 const getReference = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 10; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
  }





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

    <br />
    {/* <button className="button is-fullwidth is-danger is-size-5">Buy me a Big Mac 🍔</button> */}

    <div class="field">
  <label class="label">Buy me a Big Mac 🍔</label>
  <div class="control">
  <input onChange={updateEmail} className="input" type="email" placeholder="ronald@mcdonald.com" value={email} />
  </div>
</div>

{payBTN ?


  <RavePaymentModal
  text="Buy me a Big Mac 🍔"
  class="payButton button is-fullwidth is-danger is-size-5"
  reference={getReference()}
  currency="USD"
  email={email}
  amount={McData.bigmac_price_avg}
  ravePubKey={pubkey}
  callback={callback}
  close={close}
isProduction={true}
tag="button" 
/>

:

<>
</>
}

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