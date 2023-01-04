// Write your JS code here
import {Component} from 'react'
import './index.css'

import Header from '../Header'
import Logout from '../LogoutButton'

class About extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <h1 className="heading">About Route</h1>
        <Logout />
      </div>
    )
  }
}

export default About
