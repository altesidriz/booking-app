import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';
import Loader from '../loader/Loader';

const FeaturedProperties = () => {
    const { data, error, loading } = useFetch("/api/hotels?featured=true");

    const ratingCalculator = (rating) => {
        if (rating >= 5.1) {
            return "Excellent";
        } else if (rating >= 4.1) {
            return "Very Good";
        } else if (rating >= 0) {
            return "Good";
        } else {
            return "No rating";
        }
    };

    if (loading) {
        return (
            <div className='loadContainer'>
                <h1>Hotels</h1>
                <Loader />
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="fp">
            {data.map(item => (
                <div className='fpItem' key={item._id}>
                    {item.images && item.images.length > 0 && (
                        <img src={item.images[0]} alt="" className="fpImg" />
                    )}
                    <Link to={`/hotels/${item._id}`}><span className="fpName">{item.name}</span></Link>
                    <span className="fpCity">{item.city}</span>
                    <span className="fpPrice">from {item.price} BGN for a night</span>
                    {item.rating && (
                        <div className="fpRating">
                            <button>{item.rating.toFixed(1)}</button>
                            <span>{ratingCalculator(item.rating)}</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FeaturedProperties;