import React, { PureComponent } from 'react'
import './styles.scss'
import Logo from './logo.svg'
import Footer from './Footer'
import {performAsync} from './utils/service'

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      stacks: []
    }
  }

  async componentDidMount () {
    const stacks = await performAsync()
    this.setState({loading: false, stacks})
    console.log('component mounted')
  }

  componentWillUnmount () {
    console.log('component is unmounting')
  }

  render () {
    return <div className='libraryName'>
      <h1>React App loaded with .btn triggers</h1>
      <Logo style={{maxHeight: 35}} />
      {this.state.loading && <p>Loading Stacks</p>}
      <ul>
        {this.state.stacks.map(stack => <li>{stack}</li>)}
      </ul>

      <button type='button' aria-label='Close' onClick={this.props.close}>Close Lib</button>
      <br /> <br />
      <Footer />
    </div>
  }
}

export default App
