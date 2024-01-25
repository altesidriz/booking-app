import useFetch from '../../hooks/useFetch';
import './featuredProperties.css'

const FeaturedProperties = () => {
  const { data, error, loading } = useFetch("http://localhost:8800/api/hotels?featured=true");

  const ratingCalculator = (rating) =>{
    if(rating == 6 || rating >= 5.1) {
      return "Excellent"
    }else if(rating == 5 || rating >= 4.1){
      return "Very Good"
    }else if (rating == 4 || rating >= 0){
      return "Good"
    }else{
      return "No rating"
    }
  }

  return (
    <div className="fp">
      {loading ? "Loading please wait" : <>
        {data.map(item => (
          <div className='fpItem' key={item._id}>
            <img src={item.photos[0]} alt="" className="fpImg" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">{item.cheapesPrice}</span>
           {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>{ratingCalculator(item.rating)}</span>
            </div>}
          </div>
        ))}
      </>}
    </div>
  )
}

export default FeaturedProperties