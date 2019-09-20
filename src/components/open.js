// https://simpleanalytics.com/ronaldlangeveld.com.json?start=2018-08-01&end=2019-09-20

import React, {useState, useEffect} from 'react';
import { Link } from "gatsby";
import axios from 'axios'
import NumericLabel from 'react-pretty-numbers';

function Open () {


    const analytics = 'https://ron-test.unubo.app/visits'

    const [views, setviews] = useState("00")

    useEffect(() => {

        try {

            axios.get(analytics).then(res => {
                console.log(res.data)
                setviews(res.data.visits)
      
  
           
                // response.sendStatus(200);
      
                
              }).catch(err => {
                console.log(err)
    
           
              })
              
      
        } catch (error) {
           console.log(error)
      
      
        }
    })

    return (
        <>

<section className="hero">
    <div className="hero-head">
    <h1 className="title is-2 has-text-warning has-text-centered content-shadow">Open Stats  <span className="help has-text-white has-text-centered">Work in Progress</span></h1>
   
    </div>
  <div className="hero-body">
    <div className="container">
    <div className="has-text-centered">
      <p className="heading has-text-white">Website Visits</p>
      <p className="title has-text-white"><NumericLabel>{views}</NumericLabel></p>
    </div>


   
    </div>
  </div>
</section>

        </>
    )

}

export default Open