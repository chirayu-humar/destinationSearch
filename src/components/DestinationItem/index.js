// Write your code here
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details
  return (
    <li className="outer">
      <div className="first">
        <img alt={name} src={imgUrl} className="image" />
      </div>
      <div className="second">
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
