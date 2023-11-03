// Write your code here

import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoginLogout = () => {
    const {isLoggedIn} = this.state
    console.log(isLoggedIn)
    if (isLoggedIn === false) {
      this.setState(() => ({isLoggedIn: true}))
      document.getElementById('desc').innerHTML = 'Welcome User'
      document.getElementById('logButton').innerHTML = 'Logout'
    } else {
      this.setState(() => ({isLoggedIn: false}))
      document.getElementById('desc').innerHTML = 'Please Login'
      document.getElementById('logButton').innerHTML = 'Login'
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading" id="desc">
          Please Login
        </h1>
        <button
          className="button"
          type="button"
          onClick={this.onLoginLogout}
          id="logButton"
        >
          Login
        </button>
      </div>
    )
  }
}

export default Home
