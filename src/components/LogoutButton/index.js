// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Logout = props => {
  const logoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="main-container">
      <button type="button" className="button" onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Logout)
