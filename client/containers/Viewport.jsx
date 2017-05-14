import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
// import Viewport from './Viewport'
// import Nav from '../containers/Nav'
// import PageLogin from '../containers/PageLogin'
// import PR from './Pr'
import { connect } from 'react-redux'
// import { Route, Link } from 'react-router-dom'
import {
  initViewport,
  disallowViewportChange,
  setViewport,
} from '../actions/viewport'

// import styles from './styles/app/app.css'
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

class Viewport extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initViewport()
  }

  render() {
    const { supposedViewport, userViewport, changeDialogAllowed } = this.props.viewport

    const showChangeModal = (supposedViewport !== userViewport) && changeDialogAllowed

    return (
      <div>

        { this.props.children }

        <div>
          supposedViewport: {supposedViewport}
          userViewport: {userViewport}
          changeDialogAllowed: {String(changeDialogAllowed)}
        </div>

        <Modal
          show={showChangeModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.disallowViewportChange}>Close</Button>
            <Button bsStyle="primary" onClick={this.props.setViewport.bind(this)}>Save changes</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    viewport: state.viewport,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initViewport: () => {
      dispatch(initViewport())
    },
    disallowViewportChange: () => {
      dispatch(disallowViewportChange())
    },
    setViewport: () => {
      dispatch(setViewport())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Viewport)
