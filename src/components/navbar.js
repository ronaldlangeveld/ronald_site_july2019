
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

  axios.get('https://www.nomadlist.com/@ronald.json')

  .then(res => {

    const now = res.data.location.now.city;
    this.setState({cityNow: now})
  
  }).catch(err => {
      console.log('error');
      this.setState({cityNow: "Error Locating Ronald"})
      return err;
  });

};


    render() {
        return (
            <nav className="navbar is-white" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <p className="navbar-item"><span className="has-text-weight-bold">Currently in: </span><a href="https://nomadlist.com/@ronald" target="_blank" style={leftSpace} className="has-text-black"> {this.state.cityNow}</a> </p>
      </div>
    <div className="navbar-end">

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
