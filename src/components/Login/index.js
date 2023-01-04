// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class LoginRoute extends Component {
  loginButton = JWT => {
    const {history} = this.props
    Cookies.set('jwt_token', JWT, {expires: 30})
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-container">
        <h1 className="heading">Please Login</h1>
        <button type="button" className="button" onClick={this.loginButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default LoginRoute
