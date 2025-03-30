import { useRef, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './propertyList.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from '../loader/Loader';

const PropertyList = () => {
  const { data, error, loading } = useFetch("/api/hotels/countByType");
  const containerRef = useRef();
  const [showScrollButtons, setShowScrollButtons] = useState(false);

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
    "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    if (containerRef.current) {
      setShowScrollButtons(containerRef.current.scrollWidth > containerRef.current.clientWidth);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="pList">
      {showScrollButtons && <div className='left' onClick={scrollLeft}><FaArrowLeft /></div>}
      <div className='items' ref={containerRef}>
        {data && images.map((img, i) => (
          data[i] && <div className="pListItem" key={i}>
            <img src={img} alt="" className="pListImg" />
            <div className="pListTitles">
              <h1>{data[i].type}</h1>
              <h2>{data[i].count} {data[i].type}s</h2>
            </div>
          </div>
        ))}
      </div>
      {showScrollButtons && <div className='right' onClick={scrollRight}><FaArrowRight /></div>}
    </div>
  );
};

export default PropertyList;