import { Link } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({ item }) => {

  return (
    <div className='searchItem'>
      <img src={item.images[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTittle">{item.name}</h1>
        <span className="siDistance">{item.address}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{item.title}</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating.toFixed(1)}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.price} BGN</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
