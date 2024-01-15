import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342908.jpg?k=9a1da9787186ff59b1aa19d2e74f40768df55b23541b3dcf08cf8249deb59bd6&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTittle">Cabana Palms - Oceanfront</h1>
        <span className="siDistance">Beach-front</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air condition</span>
        <span className="siFeatures">Entire studio - 1 bathroom - full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$2314</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
