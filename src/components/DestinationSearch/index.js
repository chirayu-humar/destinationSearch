// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchValue: '',
  }

  changeState = event => {
    const newValue = event.target.value
    this.setState({
      searchValue: newValue,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state

    const newList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div>
          <input
            type="text"
            className="input-container"
            onChange={this.changeState}
          />
          <img alt="search icon" className="search_icon" src="" />
        </div>
        <ul className="inner">
          {newList.map(eachItem => (
            <DestinationItem key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
