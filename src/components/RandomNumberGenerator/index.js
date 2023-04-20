// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerate = () => {
    const min = 0
    const max = 100
    const randomNumber = min + Math.random() * (max - min)
    const number = Math.floor(randomNumber)
    this.setState({
      count: number,
    })
  }

  render() {
    const {count} = this.state
    const counterText = count > 0 && count <= 100 ? count : 0
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="caption">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="result">{counterText}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
