// https://simpleanalytics.com/ronaldlangeveld.com.json?start=2018-08-01&end=2019-09-20

import React, {useState, useEffect} from 'react';
import { Link } from "gatsby";
import axios from 'axios'
import NumericLabel from 'react-pretty-numbers';

function Open () {


    const analytics = 'https://ron-test.unubo.app/visits';
    const nomad = 'https://ron-test.unubo.app/nomad';

    const [views, setviews] = useState("00")
    const[location, setLocation] = useState("Locating....") || "Whereabouts Unknown"

    useEffect(() => {

        try {

            axios.get(analytics).then(res => {
         
                setviews(res.data.visits)
      
  
           
                // response.sendStatus(200);
      
                
              }).catch(err => {
                console.log(err)
    
           
              })
              
      
        } catch (error) {
           console.log(error)
      
      
        }

        try {

            axios.get(nomad).then(res => {

                setLocation(res.data.location)
      
  
           
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
    <nav className="level">
  <div className="level-item has-text-centered">
    <div>
    <p className="heading has-text-white">Website Visits (Last 30 days)</p>
      <p className="title has-text-white"><NumericLabel>{views}</NumericLabel></p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
    <p className="heading has-text-white">Current Location</p>
      <p className="title has-text-white"><a className="has-text-white" href="https://www.nomadlist.com/@ronald" target="_blank">{location}</a></p>
    </div>
  </div>
</nav>

    </div>


   
    </div>
  </div>
</section>

        </>
    )

}

export default Open