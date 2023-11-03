// Write your code here
import {Component} from 'react'
import './index.css'

// function LogIn(props) {
//   const {isLoggedIn} = props

//   const displayLogout = () => {
//     isLoggedIn = true
//   }

//   return (
//     <button type="button" className="login-button" onClick={displayLogout}>
//       Login
//     </button>
//   )
// }

class LogIn extends Component {
  constructor() {
    super()
    const {isLoggedIn} = this.props
  }

  isLogout = () => {
    const {isLoggedIn} = this.props
    this.setState(() => ({isLogout: true}))
    console.log(isLoggedIn)
  }

  render() {
    return (
      <button type="button" className="login-button" onClick={this.isLogout}>
        Login
      </button>
    )
  }
}

export default LogIn
