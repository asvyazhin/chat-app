import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Viewport from './containers/Viewport.jsx'
import Router from './containers/Router.jsx'
import { AppContainer } from 'react-hot-loader'

// AppContainer is a necessary wrapper component for HMR import
// injectTapEventPlugin from 'react-tap-event-plugin'; Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941 injectTapEventPlugin();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Viewport>
          <Component />
        </Viewport>
      </Provider>
    </AppContainer>, document.getElementById('root'))
}

render(Router)

// Hot Module Replacement API
if (module.hot) {
  module
    .hot
    .accept('./containers/Router.jsx', () => {
      render(Router)
    })
}
