import { useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import './propertyList.css';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Loader from '../loader/Loader';

const PropertyList = () => {
  const { data, error, loading } = useFetch("/api/hotels/countByType");
  const containerRef = useRef();

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const images = [
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
    "https://images.micazu.nl/_images/house/43407/images/villa_surga-1-3547.jpeg?&width=1600&height=1200&mode=crop",
    "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  return (
    <div className="pList">
        <div className='left' onClick={scrollLeft}><FaArrowLeft /></div>
      {loading ? (
        <Loader />
      ) : (
        <div className='items'  ref={containerRef}>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}s</h2>
                </div>
              </div>
            ))}
            <div className='right' onClick={scrollRight}><FaArrowRight /></div>
        </div>
      )}
    </div>
  );
}

export default PropertyList