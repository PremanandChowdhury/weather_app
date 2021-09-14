import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import './index.css'
import Spinner from './Spinner'

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: '',
  }

  setLat(newLat) {
    this.setState({ lat: newLat })
    console.log('New Lat:', this.state.lat)
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setLat(position.coords.latitude),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please Give Location Access 🙂 ' />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
