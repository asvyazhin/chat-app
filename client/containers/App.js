import React, { PropTypes } from 'react'
// import Viewport from './Viewport'
// import Nav from '../containers/Nav'
// import PageLogin from '../containers/PageLogin'
// import PR from './Pr'

import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import styles from './styles/app/app.css'

/**
 * /: for auth user -> /im, for guest -> /login
 * /im: for auth user OK, for guest -> /login
 */



// PR.propTypes = {
//   singedIn: PropTypes.bool.isRequired
// }

// const mapStateToProps = state => ({
//   singedIn: state.auth.singedIn
// })

// const PrivateRoute = connect(mapStateToProps)(PR)

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div></div>
    )
  }
}

export default App
