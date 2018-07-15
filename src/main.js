import App from './app/App'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Cache from './helpers/cache'

export default class Library {
  constructor (elementRef, onSuccess, options) {
    // set options to be used by others
    Cache.set('options', options)

    this.onSuccess = onSuccess
    // get the elements to trigger our payment form
    this.elements = [...document.querySelectorAll(elementRef)]
      .map(element => {
        element.addEventListener('click', this.mountApp.bind(this))
        return element
      })

    this.initFormContainer()
  }

  // kill everything about the app and events
  unmountApp () {
    unmountComponentAtNode(this.container)
  }

  mountApp () {
    render(<App onSuccess={this.onSuccess} close={this.unmountApp.bind(this)} />, this.container)
  }

  initFormContainer () {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }
}
