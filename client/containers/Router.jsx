import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const HomePage = () => (
  <div>
    <h2>HomePage</h2>
  </div>
)

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const RegisterPage = () => (
  <div>
    <h2>RegisterPage</h2>
  </div>
)

const Message = ({ match }) => (
  <div>
    <h3>{match.params.messageId}</h3>
  </div>
)

const Im = ({ match }) => (
  <div>
    <h2>Im</h2>
    <ul>
      <li>
        <Link to={`${match.url}/1`}>
          message 1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>
          message 2
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:messageId`} component={Message} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a message.</h3>
    )} />
  </div>
)

export default () => (
  <Router>
    <div>
      <AuthButton />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/im">Im</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/im" component={Im} />
    </div>
  </Router>
)
