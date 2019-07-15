
import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import axios from 'axios';

class Navbar extends Component {

  state = {
    cityNow: "Locating Ronald...."
}

componentDidMount() {

  console.log('getting status');

  axios.get('https://nomadlist.com/@ronald.json')

  .then(res => {

    const now = res.data.location.now.city;
    this.setState({cityNow: now})

      // const now = res.data;
      // if (now > 0){
      //     this.setState({fucked: true, status: now})
      // }

      //  else {

      //     this.setState({fucked: false, status:0})

      //     return now;
      // }
      
  
  }).catch(err => {
      console.log('error');
      this.setState({cityNow: "Error Locating Ronald"})
      return err;
  });

};


    render() {
        return (
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <p className="navbar-item has-text-white"><span className="has-text-weight-bold">Currently in: </span><a href="https://nomadlist.com/@ronald" target="_blank" style={leftSpace} className="has-text-white"> {this.state.cityNow}</a> </p>
      </div>
    <div className="navbar-end">
            <a href="https://twitter.com/ronaldlangeveld" target="_blank" className="navbar-item has-text-white">Twitter</a>
            <a href="mailto:hi@ronaldlangeveld.com" className="navbar-item has-text-white">Email</a>
    </div>
  </div>
</nav>
        )
    }
}

const leftSpace = {
    marginLeft: '10px'
}

export default Navbar;
