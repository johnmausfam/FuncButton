import React from 'react'
import ReactDOM from 'react-dom'
import ExampleApp from './ExampleApp'

var render = () => {
	ReactDOM.render(
    <div>
      <ExampleApp />
    </div>,
    document.getElementById("root")
  );
}

render()

if(module.hot) {
  module.hot.accept('./ExampleApp', () => {
    render()
  })
}