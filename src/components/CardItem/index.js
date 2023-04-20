// Write your code here.
import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item
  return (
    <div className={` ${className} greet4`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image">
        <img src={imgUrl} alt="avatar" />
      </div>
    </div>
  )
}
export default CardItem
